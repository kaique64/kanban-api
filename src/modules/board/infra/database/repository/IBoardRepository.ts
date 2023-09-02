import { IBoardDTO } from "@modules/board/dtos/IBoardDTO";
import { IBoardResponseDTO } from "@modules/board/dtos/IBoardResponseDTO";
import { IBoardUpdateDTO } from "@modules/board/dtos/IBoardUpdateDTO";

export interface IBoardRepository {

    create(boardDTO: IBoardDTO): Promise<IBoardResponseDTO>;
    
    update(boardDTO: IBoardUpdateDTO): Promise<IBoardResponseDTO | undefined>;
    
    findById(id: number): Promise<IBoardResponseDTO | null>;

    list(): Promise<IBoardResponseDTO[]>

    delete(id: number): Promise<boolean>;

}