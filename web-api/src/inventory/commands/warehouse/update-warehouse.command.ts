import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { Warehouse } from "src/inventory/domains/warehouse/warehouse";
import { ResultData } from "src/utils/result-data";

export class UpdateWarehouseCommand {
    constructor(
        public readonly id: string,
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

@CommandHandler(UpdateWarehouseCommand)
export class UpdateWarehouseCommandHandler implements ICommandHandler<UpdateWarehouseCommand> {
    constructor(@InjectRepository(Warehouse) private readonly warehouseRepository: Repository<Warehouse>) {}

    async execute(command: UpdateWarehouseCommand) {
        const temporary = await this.warehouseRepository.findOne({ where: { id: command.id } });
        temporary.id = command.id;
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
        return ResultData.ok<Warehouse>(warehouse, "Updated success.");
    }
}
