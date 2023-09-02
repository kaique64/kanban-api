import { IBoardDTO } from "@modules/board/dtos/IBoardDTO";
import { IBoardResponseDTO } from "@modules/board/dtos/IBoardResponseDTO";
import { IBoardUpdateDTO } from "@modules/board/dtos/IBoardUpdateDTO";

export interface IBoardService {

    create(boardDTO: IBoardDTO): Promise<IBoardResponseDTO>;
    
    update(boardDTO: IBoardUpdateDTO): Promise<IBoardResponseDTO | undefined>;
    
    delete(id: number): Promise<boolean>;

}