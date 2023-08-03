import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { InjectRepository } from "@nestjs/typeorm";
import { Warehouse } from "src/inventory/domains/warehouse/warehouse";
import { ResultData } from "src/utils/result-data";
import { uuid } from "src/utils/uuid";
import { Repository } from "typeorm";

export class CreateWarehouseCommand {
    constructor(
        public readonly title: string,
        public readonly departmentId: string,
        public readonly address: string,
        public readonly position: string,
        public readonly level: string,
        public readonly administrator: string,
        public readonly contactNumber: string,
        public readonly status: string
    ) {}
}

@CommandHandler(CreateWarehouseCommand)
export class CreateWarehouseCommandHandler implements ICommandHandler<CreateWarehouseCommand> {
    constructor(@InjectRepository(Warehouse) private readonly warehouseRepository: Repository<Warehouse>) {}

    async execute(command: CreateWarehouseCommand) {
        const temporary = new Warehouse();
        temporary.id = uuid();
        temporary.title = command.title;
        temporary.address = command.address;
        temporary.position = command.position;
        temporary.level = command.level;
        temporary.administrator = command.administrator;
        temporary.contactNumber = command.contactNumber;
        temporary.status = command.status;
        // TODO Department Table
        // temporary.department =

        const warehouse = await this.warehouseRepository.save(temporary);
        return ResultData.ok<Warehouse>(warehouse, "Created success.");
    }
}
