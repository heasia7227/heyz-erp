import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { InjectRepository } from "@nestjs/typeorm";
import { Warehouse } from "src/inventory/domains/warehouse/warehouse";
import { ResultData } from "src/utils/result-data";
import { Repository } from "typeorm";

export class EnableWarehouseCommand {
    constructor(public readonly id: string) {}
}

@CommandHandler(EnableWarehouseCommand)
export class EnableWarehouseCommandHandler implements ICommandHandler<EnableWarehouseCommand> {
    constructor(@InjectRepository(Warehouse) private readonly warehouseRepository: Repository<Warehouse>) {}

    async execute(command: EnableWarehouseCommand) {
        const warehouse = await this.warehouseRepository.findOne({ where: { id: command.id } });
        warehouse.status = "Enable";

        await this.warehouseRepository.save(warehouse);
        return ResultData.ok<Warehouse>(warehouse, "Enable success.");
    }
}
