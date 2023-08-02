import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { InjectRepository } from "@nestjs/typeorm";
import { Supplier } from "src/inventory/domains/supplier/supplier";
import { ResultData } from "src/utils/result-data";
import { uuid } from "src/utils/uuid";
import { Repository } from "typeorm";

export class CreateSupplierCommand {
    constructor(
        public readonly title: string,
        public readonly responsiblePerson: string,
        public readonly gender: string,
        public readonly contactNumber: string,
        public readonly address: string,
        public readonly remarks: string,
        public readonly webUrl: string
    ) {}
}

@CommandHandler(CreateSupplierCommand)
export class CreateSupplierCommandHandler implements ICommandHandler<CreateSupplierCommand> {
    constructor(@InjectRepository(Supplier) private readonly spplierRepository: Repository<Supplier>) {}

    async execute(command: CreateSupplierCommand) {
        const temporary = new Supplier();
        temporary.id = uuid();
        temporary.title = command.title;
        temporary.responsiblePerson = command.responsiblePerson;
        temporary.gender = command.gender;
        temporary.contactNumber = command.contactNumber;
        temporary.address = command.address;
        temporary.remarks = command.remarks;
        temporary.webUrl = command.webUrl;

        const supplier = await this.spplierRepository.save(temporary);
        return ResultData.ok<Supplier>(supplier, "Created success.");
    }
}
