import { Router } from "express";
import BoardController from "../controllers/BoardController";

const boardRoute = Router();
const boardController = new BoardController();

boardRoute.post('/', boardController.create);

export default boardRoute;
