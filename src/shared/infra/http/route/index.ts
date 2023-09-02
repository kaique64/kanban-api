import boardRoute from "@modules/board/infra/http/route/board.routes";
import taskRoute from "@modules/task/infra/http/route/task.routes";
import { Router } from "express";

const router = Router();

router.use('/board', boardRoute);
router.use('/task', taskRoute);

export default router;