import { Repository } from "typeorm";
import { IQueryHandler } from "@nestjs/cqrs";
import { ResultData } from "src/utils/result-data";
import { Category } from "src/inventory/domains/material/category";
export declare class GetCategoriesQuery {
}
export declare class GetCategoriesQueryHandler implements IQueryHandler<GetCategoriesQuery> {
    private readonly categoryRepository;
    constructor(categoryRepository: Repository<Category>);
    execute(query: GetCategoriesQuery): Promise<ResultData<Category[]>>;
}
