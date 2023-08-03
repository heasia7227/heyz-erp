import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { Warehouse } from "src/inventory/domains/warehouse/warehouse";
import { ResultData } from "src/utils/result-data";

export class RemoveWarehouseCommand {
    constructor(public readonly id: string) {}
}

@CommandHandler(RemoveWarehouseCommand)
export class RemoveWarehouseCommandHandler implements ICommandHandler<RemoveWarehouseCommand> {
    constructor(@InjectRepository(Warehouse) private readonly warehouseRepository: Repository<Warehouse>) {}

    async execute(command: RemoveWarehouseCommand) {
        const warehouse = await this.warehouseRepository.findOne({ where: { id: command.id } });

        //TODO find inventory by warehouse id

        await this.warehouseRepository.delete(warehouse);
        return ResultData.ok<Warehouse>(warehouse, "Removed success.");
    }
}
