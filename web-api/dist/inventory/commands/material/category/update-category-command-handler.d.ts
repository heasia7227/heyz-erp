import { Repository } from "typeorm";
import { ICommandHandler } from "@nestjs/cqrs";
import { ResultData } from "src/utils/result-data";
import { Category } from "src/inventory/domains/material/category";
import { UpdateCategoryCommand } from "./update-category-command";
export declare class UpdateCategoryCommandHandler implements ICommandHandler<UpdateCategoryCommand> {
    private readonly categoryRepository;
    constructor(categoryRepository: Repository<Category>);
    execute(command: UpdateCategoryCommand): Promise<ResultData<Category>>;
}
