import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { InventoryModule } from "./inventory/inventory.module";
import { InventoryEntities } from "./inventory/domains";
import { SystemModule } from "./system/system.module";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "arthur2023",
            database: "erp",
            entities: [...InventoryEntities],
            synchronize: true,
            logging: false,
        }),
        InventoryModule,
        SystemModule,
    ],
})
export class AppModule {}
