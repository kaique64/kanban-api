import boardRoute from "@modules/board/infra/http/route/board.routes";
import { Router } from "express";

const router = Router();

router.use('/board', boardRoute);

export default router;