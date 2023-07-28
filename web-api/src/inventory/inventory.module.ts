import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { commands } from "./commands";
import { queries } from "./queries";
import { controllers } from "./controllers";

@Module({
    imports: [CqrsModule],
    controllers: [...controllers],
    providers: [...commands, ...queries],
})
export class InventoryModule {}
