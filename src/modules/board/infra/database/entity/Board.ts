import { Column, Entity } from "typeorm";
import BaseEntity from "@shared/infra/database/entity/BaseEntity";

@Entity()
class Board extends BaseEntity {
    @Column()
    name: string;
}

export default Board;
