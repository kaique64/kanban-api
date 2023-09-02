import { container } from "tsyringe";
import { Request, Response } from "express";
import BoardService from "@modules/board/service/implementation/BoardService";

class BoardController {
    private boardService = container.resolve(BoardService);

    public async create(req: Request, res: Response): Promise<Response> {
        const { name } = req.body;

        const board = await this.boardService.create({ name });

        return res.status(200).json(board);
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { name } = req.body;

        const board = await this.boardService.update({ id: Number(id), name });

        return res.status(200).json(board);
    }
}

export default BoardController;