import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ResultData } from "src/utils/result-data";
import { Category } from "src/inventory/domains/material/category";
import { EnableCategoryCommand } from "./enable-category-command";

@CommandHandler(EnableCategoryCommand)
export class EnableCategoryCommandHandler implements ICommandHandler<EnableCategoryCommand> {
    constructor(@InjectRepository(Category) private readonly categoryRepository: Repository<Category>) {}

    async execute(command: EnableCategoryCommand) {
        await this.categoryRepository.manager.transaction(async () => {
            await this.enable(command.id);
        });
        return ResultData.ok<Category>(null, "Enabled success.");
    }

    async enable(id: string) {
        const category = await this.categoryRepository.findOne({ where: { id } });
        category.status = "Enable";
        await this.categoryRepository.save(category);

        const children = await this.categoryRepository.find({ where: { parentId: id } });
        children.length > 0 && children.forEach((child) => this.enable(child.id));
    }
}
