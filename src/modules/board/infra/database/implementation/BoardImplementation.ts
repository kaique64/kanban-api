import { IBoardDTO } from "@modules/board/dtos/IBoardDTO";
import { IBoardResponseDTO } from "@modules/board/dtos/IBoardResponseDTO";
import { IBoardUpdateDTO } from "@modules/board/dtos/IBoardUpdateDTO";
import { IBoardRepository } from "../repository/IBoardRepository";
import { Repository } from "typeorm";
import Board from "../entity/Board";
import databaseConnection from "@shared/infra/database";

class BoardImplementation implements IBoardRepository {
    private ormRepository: Repository<Board>;

    constructor() {
        this.ormRepository = databaseConnection.getRepository(Board);
    }

    public async create(boardDTO: IBoardDTO): Promise<IBoardResponseDTO> {
        const board = this.ormRepository.create(boardDTO);
        const results = await this.ormRepository.save(board);

        return results;
    }
    
    public async update(boardDTO: IBoardUpdateDTO): Promise<IBoardResponseDTO | undefined> {
        const board = await this.ormRepository.findOneBy({ id: boardDTO.id });

        if (board) {

            this.ormRepository.merge(board, boardDTO);
            const results = await this.ormRepository.save(board);
            
            return results;
        }
    }

    public async delete(id: number): Promise<boolean> {
        const board = await this.ormRepository.delete(id)

        return board.affected ? board.affected > 0 : false;
    }
}

export default BoardImplementation;
