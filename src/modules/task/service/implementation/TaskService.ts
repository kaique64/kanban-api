import { ITaskDTO } from "@modules/task/dtos/ITaskDTO";
import { ITaskUpdateDTO } from "@modules/task/dtos/ITaskUpdateDTO";
import { ITaskService } from "../interface/ITaskService";
import { inject, injectable } from "tsyringe";
import { ITaskRepository } from "@modules/task/infra/database/repository/ITaskRepository";
import { ITaskResponseDTO } from "@modules/task/dtos/ITaskResponseDTO";
import AppError from "@shared/infra/error/AppError";

@injectable()
class TaskService implements ITaskService {
    
    constructor(
        @inject('TaskRepository')
        private taskRepository: ITaskRepository,
    ) {}


    public async create(taskDto: ITaskDTO): Promise<ITaskResponseDTO> {
        return await this.taskRepository.create(taskDto);
    }
    
    public async update(taskDto: ITaskUpdateDTO): Promise<ITaskResponseDTO | undefined> {
        const task = await this.taskRepository.findById(taskDto.id);

        if (!task) throw new AppError('Task not found!', 404);

        return await this.taskRepository.update(taskDto);
    }
    
    public async delete(id: number): Promise<boolean> {
        return await this.taskRepository.delete(id);
    }

}

export default TaskService;
