import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { Category } from "src/inventory/domains/material/category";
import { Material } from "src/inventory/domains/material/material";
import { ResultData } from "src/utils/result-data";

export class UpdateMaterialCommand {
    constructor(
        public readonly id: string,
        public readonly code: string,
        public readonly name: string,
        public readonly categoryId: string,
        public readonly departmentId: string,
        public readonly regularMaintenanceFrequency: string,
        public readonly status: string
    ) {}
}

@CommandHandler(UpdateMaterialCommand)
export class UpdateMaterialCommandHandler implements ICommandHandler<UpdateMaterialCommand> {
    constructor(
        @InjectRepository(Material) private readonly materialRepository: Repository<Material>,
        @InjectRepository(Category) private readonly categoryRepository: Repository<Category>
    ) {}

    async execute(command: UpdateMaterialCommand) {
        const temporary = await this.materialRepository.findOne({ where: { id: command.id } });
        temporary.id = command.id;
        temporary.name = command.name;
        temporary.code = command.code;
        temporary.category = await this.categoryRepository.findOne({ where: { id: command.categoryId } });
        temporary.department = command.departmentId;
        temporary.status = command.status;

        const material = await this.materialRepository.save(temporary);
        return ResultData.ok<Material>(material, "Updated success.");
    }
}
