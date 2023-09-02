import { Column, Entity, OneToMany } from "typeorm";
import BaseEntity from "@shared/infra/database/entity/BaseEntity";
import Task from "@modules/task/infra/database/entity/Task";

@Entity()
class Board extends BaseEntity {
    @Column()
    name: string;

    @OneToMany(() => Task, (task) => task.board)
    tasks: Task[];
}

export default Board;
