import { Repository } from "typeorm";
import { ICommandHandler } from "@nestjs/cqrs";
import { ResultData } from "src/utils/result-data";
import { Category } from "src/inventory/domains/material/category";
export declare class UpdateCategoryCommand {
    readonly id: string;
    readonly code: string;
    readonly title: string;
    readonly parentId: string;
    readonly status: string;
    constructor(id: string, code: string, title: string, parentId: string, status: string);
}
export declare class UpdateCategoryCommandHandler implements ICommandHandler<UpdateCategoryCommand> {
    private readonly categoryRepository;
    constructor(categoryRepository: Repository<Category>);
    execute(command: UpdateCategoryCommand): Promise<ResultData<Category>>;
}
