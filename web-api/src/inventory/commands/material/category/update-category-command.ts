import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ResultData } from "src/utils/result-data";
import { MaterialCategory } from "src/inventory/domains/material/category";

export class UpdateCategoryCommand {
    constructor(
        public readonly id: string,
        public readonly code: string,
        public readonly title: string,
        public readonly parentId: string,
        public readonly status: string
    ) {}
}

@CommandHandler(UpdateCategoryCommand)
export class UpdateCategoryCommandHandler implements ICommandHandler<UpdateCategoryCommand> {
    constructor(
        @InjectRepository(MaterialCategory) private readonly categoryRepository: Repository<MaterialCategory>
    ) {}

    async execute(command: UpdateCategoryCommand) {
        const temporary = await this.categoryRepository.findOne({ where: { id: command.id } });
        temporary.id = command.id;
        temporary.title = command.title;
        temporary.code = command.code;
        temporary.parentId = command.parentId || "";
        temporary.status = command.status;

        const category = await this.categoryRepository.save(temporary);
        return ResultData.ok<MaterialCategory>(category, "Updated success.");
    }
}
