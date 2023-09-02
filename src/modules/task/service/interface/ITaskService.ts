import { ITaskDTO } from "@modules/task/dtos/ITaskDTO";
import { ITaskResponseDTO } from "@modules/task/dtos/ITaskResponseDTO";
import { ITaskUpdateDTO } from "@modules/task/dtos/ITaskUpdateDTO";

export interface ITaskService {

    create(taskDto: ITaskDTO): Promise<ITaskResponseDTO>;
    
    update(taskDto: ITaskUpdateDTO): Promise<ITaskResponseDTO | undefined>;
    
    delete(id: number): Promise<boolean>;

}