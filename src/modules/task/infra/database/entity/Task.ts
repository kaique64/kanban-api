import Board from "@modules/board/infra/database/entity/Board";
import BaseEntity from "@shared/infra/database/entity/BaseEntity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity()
class Task extends BaseEntity {
    @Column()
    name: string;

    @Column({ nullable: true, type: 'longtext' })
    description?: string;

    @ManyToOne(() => Board, (board) => board.tasks)
    board: Board;
}

export default Task;
