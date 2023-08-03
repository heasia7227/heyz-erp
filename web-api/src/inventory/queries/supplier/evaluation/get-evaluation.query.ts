import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { InjectRepository } from "@nestjs/typeorm";
import { GetPageQuery } from "src/base.query";
import { SupplierEvaluation } from "src/inventory/domains/supplier/evaluation";
import { Supplier } from "src/inventory/domains/supplier/supplier";
import { ResultData } from "src/utils/result-data";
import { Repository } from "typeorm";

export class GetSupplierEvaluationsQuery extends GetPageQuery {
    constructor(current: number, pageSize: number, supplierId: string) {
        super(current, pageSize);
        this.supplierId = supplierId;
    }

    supplierId: string;
}

@QueryHandler(GetSupplierEvaluationsQuery)
export class GetSupplierEvaluationsQueryHandler implements IQueryHandler<GetSupplierEvaluationsQuery> {
    constructor(
        @InjectRepository(SupplierEvaluation)
        private readonly supplierEvaluationRepository: Repository<SupplierEvaluation>,
        @InjectRepository(Supplier) private readonly supplierRepository: Repository<Supplier>
    ) {}

    async execute(query: GetSupplierEvaluationsQuery) {
        const supplier = await this.supplierRepository.findOne({ where: { id: query.supplierId } });

        const averageScore = await this.supplierEvaluationRepository.average("score", { supplier });
        const [evaluations, total] = await this.supplierEvaluationRepository.findAndCount({
            where: { supplier },
            skip: query.skip,
            take: query.pageSize,
        });

        return ResultData.okList<{ data: Array<SupplierEvaluation>; averageScore: number }>(
            { data: evaluations, averageScore },
            {
                total,
                current: query.current,
                pageSize: query.pageSize,
            }
        );
    }
}
