import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetPageQuery } from "src/base.query";
import { Warehouse } from "src/inventory/domains/warehouse/warehouse";
import { ResultData } from "src/utils/result-data";

export class GetWarehousesQuery extends GetPageQuery {}

@QueryHandler(GetWarehousesQuery)
export class GetWarehousesQueryHandler implements IQueryHandler<GetWarehousesQuery> {
    constructor(@InjectRepository(Warehouse) private readonly warehouseRepository: Repository<Warehouse>) {}

    async execute(query: GetWarehousesQuery) {
        const [warehouses, total] = await this.warehouseRepository.findAndCount({
            skip: query.skip,
            take: query.pageSize,
        });

        return ResultData.okList<{ data: Array<Warehouse> }>(
            { data: warehouses },
            {
                total,
                current: query.current,
                pageSize: query.pageSize,
            }
        );
    }
}
