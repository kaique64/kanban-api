import { IBoardDTO } from "@modules/board/dtos/IBoardDTO";
import { IBoardResponseDTO } from "@modules/board/dtos/IBoardResponseDTO";
import { IBoardUpdateDTO } from "@modules/board/dtos/IBoardUpdateDTO";
import { IBoardService } from "../interface/IBoardService";
import { inject, injectable } from "tsyringe";
import { IBoardRepository } from "@modules/board/infra/database/repository/IBoardRepository";

@injectable()
class BoardService implements IBoardService {
    
    constructor(
        @inject('BoardRepository')
        private boardRepository: IBoardRepository,
    ) {}

    public async create(boardDTO: IBoardDTO): Promise<IBoardResponseDTO> {
        return await this.boardRepository.create(boardDTO);
    }
    
    public async update(boardDTO: IBoardUpdateDTO): Promise<IBoardResponseDTO | undefined> {
        return await this.boardRepository.update(boardDTO);
    }

    public async delete(id: number): Promise<boolean> {
        return await this.boardRepository.delete(id);
    }

}

export default BoardService