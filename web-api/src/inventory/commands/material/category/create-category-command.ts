import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ResultData } from "src/utils/result-data";
import { Category } from "src/inventory/domains/material/category";
import { uuid } from "src/utils/uuid";

export class CreateCategoryCommand {
    constructor(
        public readonly code: string,
        public readonly title: string,
        public readonly parentId: string,
        public readonly status: string
    ) {}
}

@CommandHandler(CreateCategoryCommand)
export class CreateCategoryCommandHandler implements ICommandHandler<CreateCategoryCommand> {
    constructor(@InjectRepository(Category) private readonly categoryRepository: Repository<Category>) {}

    async execute(command: CreateCategoryCommand) {
        const temporary = new Category();
        temporary.id = uuid();
        temporary.title = command.title;
        temporary.code = command.code;
        temporary.parentId = command.parentId || "";
        temporary.status = command.status;

        const category = await this.categoryRepository.save(temporary);
        return ResultData.ok<Category>(category, "Created success.");
    }
}
