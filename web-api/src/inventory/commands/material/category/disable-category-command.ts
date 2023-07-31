import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ResultData } from "src/utils/result-data";
import { MaterialCategory } from "src/inventory/domains/material/category";

export class DisableCategoryCommand {
    constructor(public readonly id: string) {}
}

@CommandHandler(DisableCategoryCommand)
export class DisableCategoryCommandHandler implements ICommandHandler<DisableCategoryCommand> {
    constructor(
        @InjectRepository(MaterialCategory) private readonly categoryRepository: Repository<MaterialCategory>
    ) {}

    async execute(command: DisableCategoryCommand) {
        await this.categoryRepository.manager.transaction(async () => {
            await this.disable(command.id);
        });
        return ResultData.ok<MaterialCategory>(null, "Disable success.");
    }

    async disable(id: string) {
        const category = await this.categoryRepository.findOne({ where: { id } });
        category.status = "Disable";
        await this.categoryRepository.save(category);

        const children = await this.categoryRepository.find({ where: { parentId: id } });
        children.length > 0 && children.forEach((child) => this.disable(child.id));
    }
}
