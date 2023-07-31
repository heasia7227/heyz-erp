import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ResultData } from "src/utils/result-data";
import { MaterialCategory } from "src/inventory/domains/material/category";

export class EnableCategoryCommand {
    constructor(public readonly id: string) {}
}

@CommandHandler(EnableCategoryCommand)
export class EnableCategoryCommandHandler implements ICommandHandler<EnableCategoryCommand> {
    constructor(
        @InjectRepository(MaterialCategory) private readonly categoryRepository: Repository<MaterialCategory>
    ) {}

    async execute(command: EnableCategoryCommand) {
        await this.categoryRepository.manager.transaction(async () => {
            await this.enable(command.id);
        });
        return ResultData.ok<MaterialCategory>(null, "Enabled success.");
    }

    async enable(id: string) {
        const category = await this.categoryRepository.findOne({ where: { id } });
        category.status = "Enable";
        await this.categoryRepository.save(category);

        const children = await this.categoryRepository.find({ where: { parentId: id } });
        children.length > 0 && children.forEach((child) => this.enable(child.id));
    }
}
