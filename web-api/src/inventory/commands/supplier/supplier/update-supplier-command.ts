import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { InjectRepository } from "@nestjs/typeorm";
import { Supplier } from "src/inventory/domains/supplier/supplier";
import { ResultData } from "src/utils/result-data";
import { Repository } from "typeorm";

export class UpdateSupplierCommand {
    constructor(
        public readonly id: string,
        public readonly title: string,
        public readonly responsiblePerson: string,
        public readonly gender: string,
        public readonly contactNumber: string,
        public readonly address: string,
        public readonly remarks: string,
        public readonly webUrl: string
    ) {}
}

@CommandHandler(UpdateSupplierCommand)
export class UpdateSupplierCommandHandler implements ICommandHandler<UpdateSupplierCommand> {
    constructor(@InjectRepository(Supplier) private readonly supplierRepository: Repository<Supplier>) {}

    async execute(command: UpdateSupplierCommand) {
        const temporary = await this.supplierRepository.findOne({ where: { id: command.id } });
        temporary.id = command.id;
        temporary.title = command.title;
        temporary.responsiblePerson = command.responsiblePerson;
        temporary.gender = command.gender;
        temporary.contactNumber = command.contactNumber;
        temporary.address = command.address;
        temporary.remarks = command.remarks;
        temporary.webUrl = command.webUrl;

        const supplier = await this.supplierRepository.save(temporary);
        return ResultData.ok<Supplier>(supplier, "Updated success.");
    }
}
