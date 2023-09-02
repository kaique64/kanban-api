import { ITaskDTO } from "@modules/task/dtos/ITaskDTO";
import { ITaskResponseDTO } from "@modules/task/dtos/ITaskResponseDTO";
import { ITaskUpdateDTO } from "@modules/task/dtos/ITaskUpdateDTO";
import Task from "../entity/Task";

export interface ITaskRepository {

    create(taskDTO: ITaskDTO): Promise<Task>;
    
    update(taskDTO: ITaskUpdateDTO): Promise<ITaskResponseDTO | undefined>;
    
    findById(id: number): Promise<ITaskResponseDTO | null>;

    delete(id: number): Promise<boolean>;

}