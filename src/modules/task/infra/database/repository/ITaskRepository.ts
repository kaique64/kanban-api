import { ITaskDTO } from "@modules/task/dtos/ITaskDTO";
import { ITaskResponseDTO } from "@modules/task/dtos/ITaskResponseDTO";
import { ITaskUpdateDTO } from "@modules/task/dtos/ITaskUpdateDTO";
import Task from "../entity/Task";

export interface ITaskRepository {

    create(taskDTO: ITaskDTO): Promise<Task>;
    
    update(taskDTO: ITaskUpdateDTO): Promise<Task | undefined>;
    
    findById(id: number): Promise<Task | null>;

    delete(id: number): Promise<boolean>;

}