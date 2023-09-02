import { Router } from "express";
import { celebrate, Joi, Segments } from 'celebrate';
import TaskController from "../controllers/TaskController";

const taskRoute = Router();
const taskController = new TaskController();

taskRoute.post(
    '/',
    celebrate({
        [Segments.QUERY]: {
            boardId: Joi.number().required(),
        },
        [Segments.BODY]: {
            name: Joi.string().required(),
            description: Joi.string().allow('', null),
        },
    }),
    taskController.create
);

taskRoute.patch(
    '/:id',
    celebrate({
        [Segments.QUERY]: {
            boardId: Joi.number().required(),
        },
        [Segments.PARAMS]: {
            id: Joi.number().required(),
        }
    }),
    taskController.updateBoard
);

taskRoute.put(
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
            description: Joi.string().allow('', null),
        },
    }),
    taskController.update
);

taskRoute.delete(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.number().required(),
        },
    }),
    taskController.delete
);

export default taskRoute;
