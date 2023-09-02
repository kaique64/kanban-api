import { ITaskDTO } from "@modules/task/dtos/ITaskDTO";
import { ITaskResponseDTO } from "@modules/task/dtos/ITaskResponseDTO";
import { ITaskUpdateDTO } from "@modules/task/dtos/ITaskUpdateDTO";

export interface ITaskRepository {

    create(boardDTO: ITaskDTO): Promise<ITaskResponseDTO>;
    
    update(TaskDTO: ITaskUpdateDTO): Promise<ITaskResponseDTO | undefined>;
    
    findById(id: number): Promise<ITaskResponseDTO | null>;

    delete(id: number): Promise<boolean>;

}