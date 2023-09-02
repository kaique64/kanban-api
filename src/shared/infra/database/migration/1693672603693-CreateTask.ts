import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateTask1693672603693 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE task(
                id INT(11) PRIMARY KEY NOT NULL,
                name VARCHAR(255) NOT NULL,
                description LONGTEXT,
                created_at TIMESTAMP DEFAULT NOW(),
                updated_at TIMESTAMP DEFAULT NOW(),
                boardId INT(11) NOT NULL,
                FOREIGN KEY (boardId) REFERENCES board(id)
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('task');
    }

}
