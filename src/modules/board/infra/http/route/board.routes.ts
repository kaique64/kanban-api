import { Router } from "express";
import { celebrate, Joi, Segments } from 'celebrate';
import BoardController from "../controllers/BoardController";

const boardRoute = Router();
const boardController = new BoardController();

boardRoute.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
        },
    }),
    boardController.create
);

export default boardRoute;
