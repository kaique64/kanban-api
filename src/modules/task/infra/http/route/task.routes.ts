import { Router } from "express";
import { celebrate, Joi, Segments } from 'celebrate';
import TaskController from "../controllers/TaskController";

const boardRoute = Router();
const taskController = new TaskController();

boardRoute.post(
    '/',
    celebrate({
        [Segments.QUERY]: {
            boardId: Joi.number().required(),
        },
        [Segments.BODY]: {
            name: Joi.string().required(),
            description: Joi.string(),
        },
    }),
    taskController.create
);

boardRoute.put(
    '/:id',
    celebrate({
        [Segments.QUERY]: {
            boardId: Joi.number().required(),
        },
        [Segments.PARAMS]: {
            id: Joi.number().required(),
        },
        [Segments.BODY]: {
            name: Joi.string().required(),
            description: Joi.string(),
        },
    }),
    taskController.update
);

boardRoute.delete(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.number().required(),
        },
    }),
    taskController.delete
);

export default boardRoute;
