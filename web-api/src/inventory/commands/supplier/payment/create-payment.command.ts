import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { InjectRepository } from "@nestjs/typeorm";
import { SupplierPayment } from "src/inventory/domains/supplier/payment";
import { Supplier } from "src/inventory/domains/supplier/supplier";
import { ResultData } from "src/utils/result-data";
import { uuid } from "src/utils/uuid";
import { Repository } from "typeorm";

export class CreateSupplierPaymentCommand {
    constructor(
        public readonly notes: string,
        public readonly paidAmount: number,
        public readonly attachment: string,
        public readonly supplierId: string
    ) {}
}

@CommandHandler(CreateSupplierPaymentCommand)
export class CreateSupplierPaymentCommandHandler implements ICommandHandler<CreateSupplierPaymentCommand> {
    constructor(
        @InjectRepository(SupplierPayment) private readonly spplierPaymentRepository: Repository<SupplierPayment>,
        @InjectRepository(Supplier) private readonly spplierRepository: Repository<Supplier>
    ) {}

    async execute(command: CreateSupplierPaymentCommand) {
        const temporary = new SupplierPayment();
        temporary.id = uuid();
        temporary.notes = command.notes;
        temporary.paidAmount = command.paidAmount;
        temporary.attachment = command.attachment;
        temporary.supplier = await this.spplierRepository.findOne({ where: { id: command.supplierId } });

        const payment = await this.spplierPaymentRepository.save(temporary);
        return ResultData.ok<SupplierPayment>(payment, "Created success.");
    }
}
