import { container } from 'tsyringe';
import BoardImplementation from '@modules/board/infra/database/implementation/BoardImplementation';
import { IBoardRepository } from '@modules/board/infra/database/repository/IBoardRepository';

container.registerSingleton<IBoardRepository>(
    'BoardRepository',
    BoardImplementation,
);
