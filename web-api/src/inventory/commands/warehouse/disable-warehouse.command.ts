import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { InjectRepository } from "@nestjs/typeorm";
import { Warehouse } from "src/inventory/domains/warehouse/warehouse";
import { ResultData } from "src/utils/result-data";
import { Repository } from "typeorm";

export class DisableWarehouseCommand {
    constructor(public readonly id: string) {}
}

@CommandHandler(DisableWarehouseCommand)
export class DisableWarehouseCommandHandler implements ICommandHandler<DisableWarehouseCommand> {
    constructor(@InjectRepository(Warehouse) private readonly warehouseRepository: Repository<Warehouse>) {}

    async execute(command: DisableWarehouseCommand) {
        const warehouse = await this.warehouseRepository.findOne({ where: { id: command.id } });
        warehouse.status = "Disable";

        await this.warehouseRepository.save(warehouse);
        return ResultData.ok<Warehouse>(warehouse, "Disable success.");
    }
}
