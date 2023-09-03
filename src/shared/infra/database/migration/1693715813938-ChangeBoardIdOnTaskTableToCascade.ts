import { MigrationInterface, QueryRunner } from "typeorm"

export class ChangeBoardIdOnTaskTableToCascade1693715813938 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE task
            ADD CONSTRAINT FK_Board
                FOREIGN KEY (boardId)
                REFERENCES board (id)
                ON DELETE CASCADE 
                ON UPDATE NO ACTION;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
