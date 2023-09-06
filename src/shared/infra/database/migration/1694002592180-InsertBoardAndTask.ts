import { MigrationInterface, QueryRunner } from "typeorm"

export class InsertBoardAndTask1694002592180 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO board(id, name)
                VALUES (1, 'Backlog'),
                (2, 'In Development'),
                (3, 'Test'),
                (4, 'Finished');
        `);
        await queryRunner.query(`
            INSERT INTO task(id, name, description, boardId)
                VALUES (1, 'Register user account', 'As a user I want to be able to create a new account', 1),
                (2, 'Edit user account', 'As a user I want to be able to edit my account informations', 1),
                (3, 'Sign in user account', 'As a user I want to be able to sign in my account informations using my e-mail and password', 1),
                (4, 'Sign out user account', 'As a user I want to be able to sign out my account', 1);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
