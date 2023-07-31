import { Repository } from "typeorm";
import { ICommandHandler } from "@nestjs/cqrs";
import { ResultData } from "src/utils/result-data";
import { Category } from "src/inventory/domains/material/category";
import { CreateCategoryCommand } from "./create-category-command";
export declare class CreateCategoryCommandHandler implements ICommandHandler<CreateCategoryCommand> {
    private readonly categoryRepository;
    constructor(categoryRepository: Repository<Category>);
    execute(command: CreateCategoryCommand): Promise<ResultData<Category>>;
}
