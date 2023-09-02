import { MigrationInterface, QueryRunner } from "typeorm"

export class ChangeTaskIdToAutoIncrement1693674877371 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE task CHANGE id id INT(11) AUTO_INCREMENT;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
