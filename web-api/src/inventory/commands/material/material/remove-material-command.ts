import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { InjectRepository } from "@nestjs/typeorm";
import { Material } from "src/inventory/domains/material/material";
import { ResultData } from "src/utils/result-data";
import { Repository } from "typeorm";

export class RemoveMaterialCommand {
    constructor(public readonly id: string) {}
}

@CommandHandler(RemoveMaterialCommand)
export class RemoveMaterialCommandHandler implements ICommandHandler<RemoveMaterialCommand> {
    constructor(@InjectRepository(Material) private readonly materialRepository: Repository<Material>) {}

    async execute(command: RemoveMaterialCommand) {
        // TODO find inventories by material id

        const temporary = await this.materialRepository.findOne({ where: { id: command.id } });
        await this.materialRepository.delete(temporary);
        return ResultData.ok<Material>(temporary, "Removed success.");
    }
}
