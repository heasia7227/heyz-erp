import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ResultData } from "src/utils/result-data";
import { MaterialCategory } from "src/inventory/domains/material/category";
import { Material } from "src/inventory/domains/material/material";

export class RemoveCategoryCommand {
    constructor(public readonly id: string) {}
}

@CommandHandler(RemoveCategoryCommand)
export class RemoveCategoryCommandHandler implements ICommandHandler<RemoveCategoryCommand> {
    constructor(
        @InjectRepository(MaterialCategory) private readonly categoryRepository: Repository<MaterialCategory>,
        @InjectRepository(Material) private readonly materialRepository: Repository<Material>
    ) {}

    async execute(command: RemoveCategoryCommand) {
        const category = await this.categoryRepository.findOne({ where: { id: command.id } });
        // find materials by category id
        const materials = await this.materialRepository.find({ where: { category } });
        if (materials.length > 0) {
            return ResultData.failure<MaterialCategory>(
                null,
                "Removed failure, Has children materials that cannot be remove."
            );
        }

        //find category children by category id
        const categories = await this.categoryRepository.find({ where: { parentId: command.id } });
        if (categories.length > 0) {
            return ResultData.failure<MaterialCategory>(
                null,
                "Removed failure, Has children categories that cannot be remove."
            );
        }

        await this.categoryRepository.delete(category);
        return ResultData.ok<MaterialCategory>(category, "Removed success.");
    }
}
