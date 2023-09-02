import { container } from 'tsyringe';
import BoardImplementation from '@modules/board/infra/database/implementation/BoardImplementation';
import { IBoardRepository } from '@modules/board/infra/database/repository/IBoardRepository';
import TaskImplementation from '@modules/task/infra/database/implementation/TaskImplementation';
import { ITaskRepository } from '@modules/task/infra/database/repository/ITaskRepository';

container.registerSingleton<IBoardRepository>(
    'BoardRepository',
    BoardImplementation,
);

container.registerSingleton<ITaskRepository>(
    'TaskRepository',
    TaskImplementation,
);
