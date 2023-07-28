import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { InventoryModule } from "./inventory/inventory.module";

@Module({
    imports: [
        // TypeOrmModule.forRoot({
        //     type: "mysql",
        //     host: "192.168.1.211",
        //     port: 3306,
        //     username: "arthur",
        //     password: "arthur2023",
        //     database: "erp",
        //     entities: [],
        //     synchronize: true,
        //     logging: true,
        // }),
        InventoryModule,
    ],
})
export class AppModule {}
