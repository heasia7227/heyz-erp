import { Repository } from "typeorm";
import { ICommandHandler } from "@nestjs/cqrs";
import { ResultData } from "src/utils/result-data";
import { Category } from "src/inventory/domains/material/category";
export declare class EnableCategoryCommand {
    readonly id: string;
    constructor(id: string);
}
export declare class EnableCategoryCommandHandler implements ICommandHandler<EnableCategoryCommand> {
    private readonly categoryRepository;
    constructor(categoryRepository: Repository<Category>);
    execute(command: EnableCategoryCommand): Promise<ResultData<Category>>;
    enable(id: string): Promise<void>;
}
