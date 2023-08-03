import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetPageQuery } from "src/base.query";
import { SupplierContract } from "src/inventory/domains/supplier/contract";
import { ResultData } from "src/utils/result-data";

export class GetSupplierContractsQuery extends GetPageQuery {
    constructor(current: number, pageSize: number, supplierId: string) {
        super(current, pageSize);
        this.supplierId = supplierId;
    }

    supplierId: string;
}

@QueryHandler(GetSupplierContractsQuery)
export class GetSupplierContractsQueryHandler implements IQueryHandler<GetSupplierContractsQuery> {
    constructor(
        @InjectRepository(SupplierContract) private readonly supplierContractRepository: Repository<SupplierContract>
    ) {}

    async execute(query: GetSupplierContractsQuery) {
        const [contracts, total] = await this.supplierContractRepository.findAndCount({
            skip: query.skip,
            take: query.pageSize,
        });

        return ResultData.okList<{ data: Array<SupplierContract> }>(
            { data: contracts },
            {
                total,
                current: query.current,
                pageSize: query.pageSize,
            }
        );
    }
}
