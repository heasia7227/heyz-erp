import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { InjectRepository } from "@nestjs/typeorm";
import { Material } from "src/inventory/domains/material/material";
import { ResultData } from "src/utils/result-data";
import { Repository } from "typeorm";

export class DisableMaterialCommand {
    constructor(public readonly id: string) {}
}

@CommandHandler(DisableMaterialCommand)
export class DisableMaterialCommandHandler implements ICommandHandler<DisableMaterialCommand> {
    constructor(@InjectRepository(Material) private readonly materialRepository: Repository<Material>) {}

    async execute(command: DisableMaterialCommand) {
        const temporary = await this.materialRepository.findOne({ where: { id: command.id } });
        temporary.status = "Disable";
        await this.materialRepository.save(temporary);
        return ResultData.ok<Material>(null, "Disable success.");
    }
}
