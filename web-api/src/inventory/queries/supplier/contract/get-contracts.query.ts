import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetPageQuery } from "src/base.query";
import { SupplierContract } from "src/inventory/domains/supplier/contract";
import { ResultData } from "src/utils/result-data";
import { Supplier } from "src/inventory/domains/supplier/supplier";

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
        @InjectRepository(SupplierContract) private readonly supplierContractRepository: Repository<SupplierContract>,
        @InjectRepository(Supplier) private readonly supplierRepository: Repository<Supplier>
    ) {}

    async execute(query: GetSupplierContractsQuery) {
        const supplier = await this.supplierRepository.findOne({ where: { id: query.supplierId } });

        const [contracts, total] = await this.supplierContractRepository.findAndCount({
            where: { supplier },
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
