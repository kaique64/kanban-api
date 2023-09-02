import { container } from "tsyringe";
import { Request, Response } from "express";
import BoardService from "@modules/board/service/implementation/BoardService";

class BoardController {
    public async create(req: Request, res: Response): Promise<Response> {
        const { name } = req.body;
        const boardService = container.resolve(BoardService);
        const board = await boardService.create({ name });

        return res.status(200).json(board);
    }
}

export default BoardController;