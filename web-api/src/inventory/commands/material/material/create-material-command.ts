import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { Material } from "src/inventory/domains/material/material";
import { uuid } from "src/utils/uuid";
import { Category } from "src/inventory/domains/material/category";
import { ResultData } from "src/utils/result-data";

export class CreateMaterialCommand {
    constructor(
        public readonly code: string,
        public readonly name: string,
        public readonly categoryId: string,
        public readonly departmentId: string,
        public readonly regularMaintenanceFrequency: string,
        public readonly status: string
    ) {}
}

@CommandHandler(CreateMaterialCommand)
export class CreateMaterialCommandHandler implements ICommandHandler<CreateMaterialCommand> {
    constructor(
        @InjectRepository(Material) private readonly materialRepository: Repository<Material>,
        @InjectRepository(Category) private readonly categoryRepository: Repository<Category>
    ) {}

    async execute(command: CreateMaterialCommand) {
        const temporary = new Material();
        temporary.id = uuid();
        temporary.name = command.name;
        temporary.code = command.code;
        temporary.category = await this.categoryRepository.findOne({ where: { id: command.categoryId } });
        temporary.department = command.departmentId;
        temporary.status = command.status;

        const material = await this.materialRepository.save(temporary);
        return ResultData.ok<Material>(material, "Created success.");
    }
}
