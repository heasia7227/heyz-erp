import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetPageQuery } from "src/base.query";
import { Inventory } from "src/inventory/domains/inventory/inventory";
import { ResultData } from "src/utils/result-data";

export class GetInventoriesQuery extends GetPageQuery {}

@QueryHandler(GetInventoriesQuery)
export class GetInventoriesQueryHandler implements IQueryHandler<GetInventoriesQuery> {
    constructor(@InjectRepository(Inventory) private readonly inventoryRepository: Repository<Inventory>) {}

    async execute(query: GetInventoriesQuery) {
        const [inventories, total] = await this.inventoryRepository.findAndCount({
            skip: query.skip,
            take: query.pageSize,
        });

        return ResultData.okList<{ data: Array<Inventory> }>(
            { data: inventories },
            {
                total,
                current: query.current,
                pageSize: query.pageSize,
            }
        );
    }
}
