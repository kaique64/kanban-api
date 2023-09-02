import TaskService from "@modules/task/service/implementation/TaskService";
import { Request, Response } from "express";
import { container } from "tsyringe";

class TaskController {

    public async create(req: Request, res: Response): Promise<Response> {
        const { boardId } = req.query;
        const { name, description } = req.body;

        const taskService = container.resolve(TaskService)
        const board = await taskService.create({ name, description, boardId: Number(boardId) });

        return res.status(200).json(board);
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { boardId } = req.query;
        const { name, description } = req.body;

        const taskService = container.resolve(TaskService)
        const board = await taskService.update({ id: Number(id), boardId: Number(boardId), name, description });

        return res.status(200).json(board);
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        const taskService = container.resolve(TaskService)
        const board = await taskService.delete(Number(id));

        return res.status(200).json({ success: board });
    }

}

export default TaskController;
