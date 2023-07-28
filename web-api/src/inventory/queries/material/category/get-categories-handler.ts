import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { ResultData } from "src/utils/result-data";
import { Category } from "src/inventory/domains/material/category";
import { GetCategories } from "./get-categories";

@QueryHandler(GetCategories)
export class GetCategoriesHandler implements IQueryHandler<GetCategories> {
    // constructor(@InjectRepository(Category) private readonly categoryRepository: Repository<Category>) {}

    async execute(query: GetCategories) {
        // const categories = await this.categoryRepository.find();
        // return ResultData.ok<Array<Category>>(categories);
        return ResultData.ok<Array<Category>>([]);
    }
}
