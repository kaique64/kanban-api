import { DataSource } from "typeorm"

const filePath = 'src';

const databaseConnection = new DataSource({
    type: "mysql",
    host: process.env.MYSQL_HOST,
    port: 3306,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DATABASE,
    entities: [
        `./${filePath}/modules/**/infra/database/entities/*.ts`,
    ],
    migrations: [
        `./${filePath}/shared/infra/database/migrations/*.ts`,
    ],
    subscribers: [
        `${filePath}/subscriber/**/*.ts`,
    ],
    migrationsTableName: "kanboard_migrations",

})

databaseConnection.initialize()
.then(() => {
    console.log("Data Source has been initialized!")
})
.catch((err) => {
    console.error("Error during Data Source initialization", err)
})
