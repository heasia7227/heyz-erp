import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ResultData } from "src/utils/result-data";
import { Category } from "src/inventory/domains/material/category";
import { UpdateCategoryCommand } from "./update-category-command";

@CommandHandler(UpdateCategoryCommand)
export class UpdateCategoryCommandHandler implements ICommandHandler<UpdateCategoryCommand> {
    constructor(@InjectRepository(Category) private readonly categoryRepository: Repository<Category>) {}

    async execute(command: UpdateCategoryCommand) {
        const temporary = await this.categoryRepository.findOne({ where: { id: command.id } });
        temporary.id = command.id;
        temporary.title = command.title;
        temporary.code = command.code;
        temporary.parentId = command.parentId || "";
        temporary.status = command.status;

        const category = await this.categoryRepository.save(temporary);
        return ResultData.ok<Category>(category, "Updated success.");
    }
}
