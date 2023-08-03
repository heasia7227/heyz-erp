import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SystemEntities } from "./domains";
import { commands } from "./commands";

@Module({
    imports: [TypeOrmModule.forFeature([...SystemEntities]), CqrsModule],
    controllers: [],
    providers: [...commands],
})
export class SystemModule {}
