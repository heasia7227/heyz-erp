/* eslint-disable import/no-unresolved */
import { DataSource } from "typeorm";
import entities from "../entities";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "heyz_erp",
    synchronize: false,
    logging: true,
    entities: entities,
    subscribers: [],
    migrations: [],
});

AppDataSource.initialize()
    .then(async () => {
        console.log("Connection initialized with database...");
    })
    .catch((error) => console.log(error));

export const getDataSource = (delay = 3000): Promise<DataSource> => {
    if (AppDataSource.isInitialized) return Promise.resolve(AppDataSource);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (AppDataSource.isInitialized) resolve(AppDataSource);
            else reject("Failed to create connection with database");
        }, delay);
    });
};
