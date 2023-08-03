import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { InjectRepository } from "@nestjs/typeorm";
import { GetPageQuery } from "src/base.query";
import { SupplierEvaluation } from "src/inventory/domains/supplier/evaluation";
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
        private readonly supplierEvaluationRepository: Repository<SupplierEvaluation>
    ) {}

    async execute(query: GetSupplierEvaluationsQuery) {
        const averageScore = await this.supplierEvaluationRepository.average("score");
        const [evaluations, total] = await this.supplierEvaluationRepository.findAndCount({
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
