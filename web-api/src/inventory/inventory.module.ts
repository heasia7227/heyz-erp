import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { TypeOrmModule } from "@nestjs/typeorm";
import { commands } from "./commands";
import { queries } from "./queries";
import { controllers } from "./controllers";
import { InventoryEntities } from "./domains";

@Module({
    imports: [TypeOrmModule.forFeature([...InventoryEntities]), CqrsModule],
    controllers: [...controllers],
    providers: [...commands, ...queries],
})
export class InventoryModule {}
