import { ITaskDTO } from "@modules/task/dtos/ITaskDTO";
import { ITaskResponseDTO } from "@modules/task/dtos/ITaskResponseDTO";
import { ITaskUpdateDTO } from "@modules/task/dtos/ITaskUpdateDTO";

export interface ITaskRepository {

    create(taskDTO: ITaskDTO): Promise<ITaskResponseDTO>;
    
    update(taskDTO: ITaskUpdateDTO): Promise<ITaskResponseDTO | undefined>;

    updateBoard(id: number, boardId: number): Promise<ITaskResponseDTO | undefined>;
    
    findById(id: number): Promise<ITaskResponseDTO | null>;

    delete(id: number): Promise<boolean>;

}