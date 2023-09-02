import { ITaskDTO } from "@modules/task/dtos/ITaskDTO";
import { ITaskResponseDTO } from "@modules/task/dtos/ITaskResponseDTO";
import { ITaskUpdateDTO } from "@modules/task/dtos/ITaskUpdateDTO";
import { ITaskRepository } from "../repository/ITaskRepository";
import { Repository } from "typeorm";
import Task from "../entity/Task";
import databaseConnection from "@shared/infra/database";

class TaskImplementation implements ITaskRepository {
    private ormRepository: Repository<Task>;

    constructor() {
        this.ormRepository = databaseConnection.getRepository(Task);
    }

    public async create(taskDTO: ITaskDTO): Promise<Task> {
        const board = this.ormRepository.create(taskDTO);
        const results = await this.ormRepository.save(board);

        return results;
    }

    public async update(taskDTO: ITaskUpdateDTO): Promise<ITaskResponseDTO | undefined> {
        throw new Error("Method not implemented.");
    }
    
    public async findById(id: number): Promise<ITaskResponseDTO | null> {
        throw new Error("Method not implemented.");
    }
    
    public async delete(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    
}

export default TaskImplementation;