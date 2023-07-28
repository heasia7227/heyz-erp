import { IQueryHandler } from "@nestjs/cqrs";
import { ResultData } from "src/utils/result-data";
import { Category } from "src/inventory/domains/material/category";
import { GetCategories } from "./get-categories";
export declare class GetCategoriesHandler implements IQueryHandler<GetCategories> {
    execute(query: GetCategories): Promise<ResultData<Category[]>>;
}
