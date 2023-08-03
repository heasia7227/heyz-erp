import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { InjectRepository } from "@nestjs/typeorm";
import { GetPageQuery } from "src/base.query";
import { SupplierContract } from "src/inventory/domains/supplier/contract";
import { SupplierPayment } from "src/inventory/domains/supplier/payment";
import { Supplier } from "src/inventory/domains/supplier/supplier";
import { ResultData } from "src/utils/result-data";
import { Repository } from "typeorm";

export class GetSupplierPaymentsQuery extends GetPageQuery {
    constructor(current: number, pageSize: number, supplierId: string) {
        super(current, pageSize);
        this.supplierId = supplierId;
    }

    supplierId: string;
}

@QueryHandler(GetSupplierPaymentsQuery)
export class GetSupplierPaymentsQueryHandler implements IQueryHandler<GetSupplierPaymentsQuery> {
    constructor(
        @InjectRepository(SupplierPayment) private readonly supplierPaymentRepository: Repository<SupplierPayment>,
        @InjectRepository(SupplierContract) private readonly supplierContractRepository: Repository<SupplierContract>,
        @InjectRepository(Supplier) private readonly supplierRepository: Repository<Supplier>
    ) {}

    async execute(query: GetSupplierPaymentsQuery) {
        const supplier = await this.supplierRepository.findOne({ where: { id: query.supplierId } });

        const contractTotalPrice = await this.supplierContractRepository.sum("totalPrice", { supplier });
        const paidTotalAmount = await this.supplierPaymentRepository.sum("paidAmount", { supplier });
        const [payments, total] = await this.supplierPaymentRepository.findAndCount({
            where: { supplier },
            skip: query.skip,
            take: query.pageSize,
        });

        return ResultData.okList<{ data: Array<SupplierPayment>; paidTotalAmount: number; contractTotalPrice: number }>(
            { data: payments, paidTotalAmount, contractTotalPrice },
            {
                total,
                current: query.current,
                pageSize: query.pageSize,
            }
        );
    }
}
