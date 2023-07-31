import { Repository } from "typeorm";
import { ICommandHandler } from "@nestjs/cqrs";
import { ResultData } from "src/utils/result-data";
import { Category } from "src/inventory/domains/material/category";
export declare class RemoveCategoryCommand {
    readonly id: string;
    constructor(id: string);
}
export declare class RemoveCategoryCommandHandler implements ICommandHandler<RemoveCategoryCommand> {
    private readonly categoryRepository;
    constructor(categoryRepository: Repository<Category>);
    execute(command: RemoveCategoryCommand): Promise<ResultData<Category>>;
}
