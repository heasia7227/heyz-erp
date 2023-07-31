import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { ResultData } from "src/utils/result-data";
import { Category } from "src/inventory/domains/material/category";
import { GetCategoriesQuery } from "./get-categories-query";

@QueryHandler(GetCategoriesQuery)
export class GetCategoriesQueryHandler implements IQueryHandler<GetCategoriesQuery> {
    constructor(@InjectRepository(Category) private readonly categoryRepository: Repository<Category>) {}

    async execute(query: GetCategoriesQuery) {
        const categories = await this.categoryRepository.find({ where: { status: "Enable" } });
        return ResultData.ok<Array<Category>>(categories);
    }
}
