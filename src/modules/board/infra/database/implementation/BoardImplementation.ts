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
    }
    
    public async update(boardDTO: IBoardUpdateDTO): Promise<IBoardResponseDTO> {
    }

    public async delete(id: number): Promise<boolean> {
    }
}

export default BoardImplementation;
