import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ResultData } from "src/utils/result-data";
import { MaterialCategory } from "src/inventory/domains/material/category";

export class RemoveCategoryCommand {
    constructor(public readonly id: string) {}
}

@CommandHandler(RemoveCategoryCommand)
export class RemoveCategoryCommandHandler implements ICommandHandler<RemoveCategoryCommand> {
    constructor(
        @InjectRepository(MaterialCategory) private readonly categoryRepository: Repository<MaterialCategory>
    ) {}

    async execute(command: RemoveCategoryCommand) {
        // TODO find materials by category id

        //find category children by category id
        const categories = await this.categoryRepository.find({ where: { parentId: command.id } });
        if (categories.length > 0) {
            return ResultData.failure<MaterialCategory>(
                null,
                "Removed failure, Has children categories that cannot be remove."
            );
        }

        const temporary = await this.categoryRepository.findOne({ where: { id: command.id } });
        await this.categoryRepository.delete(temporary);
        return ResultData.ok<MaterialCategory>(temporary, "Removed success.");
    }
}
