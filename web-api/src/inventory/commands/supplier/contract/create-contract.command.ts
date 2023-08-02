import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { SupplierContract } from "src/inventory/domains/supplier/contract";
import { uuid } from "src/utils/uuid";
import { Supplier } from "src/inventory/domains/supplier/supplier";
import { ResultData } from "src/utils/result-data";

export class CreateSupplierContractCommand {
    constructor(
        public readonly title: string,
        public readonly totalPrice: number,
        public readonly attachment: string,
        public readonly supplierId: string
    ) {}
}

@CommandHandler(CreateSupplierContractCommand)
export class CreateSupplierContractCommandHandler implements ICommandHandler<CreateSupplierContractCommand> {
    constructor(
        @InjectRepository(SupplierContract) private readonly spplierContractRepository: Repository<SupplierContract>,
        @InjectRepository(Supplier) private readonly spplierRepository: Repository<Supplier>
    ) {}

    async execute(command: CreateSupplierContractCommand) {
        const temporary = new SupplierContract();
        temporary.id = uuid();
        temporary.title = command.title;
        temporary.totalPrice = command.totalPrice;
        temporary.attachment = command.attachment;
        temporary.supplier = await this.spplierRepository.findOne({ where: { id: command.supplierId } });

        const contract = await this.spplierContractRepository.save(temporary);
        return ResultData.ok<SupplierContract>(contract, "Created success.");
    }
}
