import { ITaskDTO } from "@modules/task/dtos/ITaskDTO";
import { ITaskUpdateDTO } from "@modules/task/dtos/ITaskUpdateDTO";
import Task from "@modules/task/infra/database/entity/Task";

export interface ITaskService {

    create(taskDto: ITaskDTO): Promise<Task>;
    
    update(taskDto: ITaskUpdateDTO): Promise<Task | undefined>;
    
    delete(id: number): Promise<boolean>;

}