import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ResultData } from "src/utils/result-data";
import { MaterialCategory } from "src/inventory/domains/material/category";
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
    constructor(
        @InjectRepository(MaterialCategory) private readonly categoryRepository: Repository<MaterialCategory>
    ) {}

    async execute(command: CreateCategoryCommand) {
        const temporary = new MaterialCategory();
        temporary.id = uuid();
        temporary.title = command.title;
        temporary.code = command.code;
        temporary.parentId = command.parentId || "";
        temporary.status = command.status;

        const category = await this.categoryRepository.save(temporary);
        return ResultData.ok<MaterialCategory>(category, "Created success.");
    }
}
