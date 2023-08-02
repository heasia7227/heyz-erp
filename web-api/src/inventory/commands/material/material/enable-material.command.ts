import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { InjectRepository } from "@nestjs/typeorm";
import { Material } from "src/inventory/domains/material/material";
import { ResultData } from "src/utils/result-data";
import { Repository } from "typeorm";

export class EnableMaterialCommand {
    constructor(public readonly id: string) {}
}

@CommandHandler(EnableMaterialCommand)
export class EnableMaterialCommandHandler implements ICommandHandler<EnableMaterialCommand> {
    constructor(@InjectRepository(Material) private readonly materialRepository: Repository<Material>) {}

    async execute(command: EnableMaterialCommand) {
        const temporary = await this.materialRepository.findOne({ where: { id: command.id } });
        temporary.status = "Enable";
        await this.materialRepository.save(temporary);
        return ResultData.ok<Material>(null, "Enabled success.");
    }
}
