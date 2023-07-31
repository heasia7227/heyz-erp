import { Repository } from "typeorm";
import { ICommandHandler } from "@nestjs/cqrs";
import { ResultData } from "src/utils/result-data";
import { Category } from "src/inventory/domains/material/category";
export declare class CreateCategoryCommand {
    readonly code: string;
    readonly title: string;
    readonly parentId: string;
    readonly status: string;
    constructor(code: string, title: string, parentId: string, status: string);
}
export declare class CreateCategoryCommandHandler implements ICommandHandler<CreateCategoryCommand> {
    private readonly categoryRepository;
    constructor(categoryRepository: Repository<Category>);
    execute(command: CreateCategoryCommand): Promise<ResultData<Category>>;
}
