import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { Supplier } from "src/inventory/domains/supplier/supplier";
import { ResultData } from "src/utils/result-data";
import { GetPageQuery } from "src/base.query";

export class GetSuppliersQuery extends GetPageQuery {}

@QueryHandler(GetSuppliersQuery)
export class GetSuppliersQueryHandler implements IQueryHandler<GetSuppliersQuery> {
    constructor(@InjectRepository(Supplier) private readonly supplierRepository: Repository<Supplier>) {}

    async execute(query: GetSuppliersQuery) {
        const [suppliers, total] = await this.supplierRepository.findAndCount({
            skip: query.skip,
            take: query.pageSize,
        });

        return ResultData.okList<Array<Supplier>>(suppliers, {
            total,
            current: query.current,
            pageSize: query.pageSize,
        });
    }
}
