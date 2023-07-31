import { Repository } from "typeorm";
import { ICommandHandler } from "@nestjs/cqrs";
import { ResultData } from "src/utils/result-data";
import { Category } from "src/inventory/domains/material/category";
export declare class DisableCategoryCommand {
    readonly id: string;
    constructor(id: string);
}
export declare class DisableCategoryCommandHandler implements ICommandHandler<DisableCategoryCommand> {
    private readonly categoryRepository;
    constructor(categoryRepository: Repository<Category>);
    execute(command: DisableCategoryCommand): Promise<ResultData<Category>>;
    disable(id: string): Promise<void>;
}
