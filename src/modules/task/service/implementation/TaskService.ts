import { ITaskDTO } from "@modules/task/dtos/ITaskDTO";
import { ITaskUpdateDTO } from "@modules/task/dtos/ITaskUpdateDTO";
import { ITaskService } from "../interface/ITaskService";
import { inject, injectable } from "tsyringe";
import { ITaskRepository } from "@modules/task/infra/database/repository/ITaskRepository";
import { ITaskResponseDTO } from "@modules/task/dtos/ITaskResponseDTO";
import AppError from "@shared/infra/error/AppError";
import { IBoardRepository } from "@modules/board/infra/database/repository/IBoardRepository";

@injectable()
class TaskService implements ITaskService {
    
    constructor(
        @inject('BoardRepository')
        private boardRepository: IBoardRepository,
        @inject('TaskRepository')
        private taskRepository: ITaskRepository,
    ) {}

    public async updateBoard(id: number, boardId: number): Promise<ITaskResponseDTO | undefined> {
        const board = await this.boardRepository.findById(boardId);

        if (!board) throw new AppError('Board not found!', 404);
        
        const task = await this.taskRepository.findById(id);

        if (!task) throw new AppError('Task not found!', 404);
    
        return await this.taskRepository.updateBoard(id, boardId);
    }


    public async create(taskDto: ITaskDTO): Promise<ITaskResponseDTO> {
        const board = await this.boardRepository.findById(taskDto.boardId);

        if (!board) throw new AppError('Board not found!', 404);

        return await this.taskRepository.create(taskDto);
    }
    
    public async update(taskDto: ITaskUpdateDTO): Promise<ITaskResponseDTO | undefined> {
        const board = await this.boardRepository.findById(taskDto.boardId);

        if (!board) throw new AppError('Board not found!', 404);

        const task = await this.taskRepository.findById(taskDto.id);

        if (!task) throw new AppError('Task not found!', 404);

        return await this.taskRepository.update(taskDto);
    }
    
    public async delete(id: number): Promise<boolean> {
        const task = await this.taskRepository.findById(id);

        if (!task) throw new AppError('Task not found!', 404);

        return await this.taskRepository.delete(id);
    }

}

export default TaskService;
