import { container } from "tsyringe";
import { Request, Response } from "express";
import BoardService from "@modules/board/service/implementation/BoardService";

class BoardController {

    public async create(req: Request, res: Response): Promise<Response> {
        const { name } = req.body;

        const boardService = container.resolve(BoardService)
        const board = await boardService.create({ name });

        return res.status(200).json(board);
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { name } = req.body;

        const boardService = container.resolve(BoardService)
        const board = await boardService.update({ id: Number(id), name });

        return res.status(200).json(board);
    }
}

export default BoardController;