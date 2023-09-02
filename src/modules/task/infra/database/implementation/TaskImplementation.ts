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

    public async create(taskDTO: ITaskDTO): Promise<ITaskResponseDTO> {
        const task = this.ormRepository.create(taskDTO);
        const results = await this.ormRepository.save(task);

        return results;
    }

    public async update(taskDTO: ITaskUpdateDTO): Promise<ITaskResponseDTO | undefined> {
        const task = await this.ormRepository.findOneBy({ id: taskDTO.id });

        if (task) {
            this.ormRepository.merge(task, taskDTO);
            const results = await this.ormRepository.save(task);
            
            return results;
        }
    }
    
    public async findById(id: number): Promise<ITaskResponseDTO | null> {
        const task = await this.ormRepository.findOneBy({ id });
        
        return task;
    }
    
    public async delete(id: number): Promise<boolean> {
        const task = await this.ormRepository.delete(id)

        return task.affected ? task.affected > 0 : false;
    }
    
}

export default TaskImplementation;