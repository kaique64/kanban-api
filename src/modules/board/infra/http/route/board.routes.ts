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

boardRoute.put(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.number().required(),
        },
        [Segments.BODY]: {
            name: Joi.string().required(),
        },
    }),
    boardController.update
);

boardRoute.delete(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.number().required(),
        },
    }),
    boardController.delete
);

boardRoute.get('/', boardController.list);

export default boardRoute;
