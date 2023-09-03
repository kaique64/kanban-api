import Board from "@modules/board/infra/database/entity/Board";
import BaseEntity from "@shared/infra/database/entity/BaseEntity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity()
class Task extends BaseEntity {
    @Column()
    name: string;

    @Column({ nullable: true, type: 'longtext' })
    description?: string;

    @Column()
    boardId: number;
    
    @ManyToOne(() => Board, (board) => board.tasks, { cascade: true, onDelete: 'CASCADE' })
    @JoinColumn({ name: 'boardId' })
    board: Board;
}

export default Task;
