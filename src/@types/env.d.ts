declare namespace NodeJS {
    export interface ProcessEnv {
        PORT?: number;
        MYSQL_HOST?: string;
        MYSQL_DATABASE?: string;
        MYSQL_USER?: string;
        MYSQL_PASS?: string;
        MYSQL_PORT?: number;
        NODE_ENV?: string;
    }
}