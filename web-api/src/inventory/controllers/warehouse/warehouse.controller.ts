import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { BaseController } from "src/base.controller";
import { GetPageDto } from "src/base.query.dto";
import { CreateWarehouseCommand } from "src/inventory/commands/warehouse/create-warehouse.command";
import { DisableWarehouseCommand } from "src/inventory/commands/warehouse/disable-warehouse.command";
import { EnableWarehouseCommand } from "src/inventory/commands/warehouse/enable-warehouse.command";
import { RemoveWarehouseCommand } from "src/inventory/commands/warehouse/remove-warehouse.command";
import { UpdateWarehouseCommand } from "src/inventory/commands/warehouse/update-warehouse.command";
import { CreateWarehouseDto } from "src/inventory/dtos/warehouse/create-warehouse.dto";
import { UpdateWarehouseDto } from "src/inventory/dtos/warehouse/update-warehouse.dto";
import { GetWarehousesQuery } from "src/inventory/queries/warehouse/get-warehouses.query";

@ApiTags("inventory/warehouse")
@Controller("inventory/warehouse")
export class WarehouseController extends BaseController {
    @Get("list")
    async list(@Query() getPageDto: GetPageDto) {
        return this.queryBus.execute(new GetWarehousesQuery(getPageDto.current, getPageDto.pageSize));
    }

    @Post()
    async create(@Body() createWarehouseDto: CreateWarehouseDto) {
        return this.commandBus.execute(
            new CreateWarehouseCommand(
                createWarehouseDto.title,
                createWarehouseDto.departmentId,
                createWarehouseDto.address,
                createWarehouseDto.position,
                createWarehouseDto.level,
                createWarehouseDto.administrator,
                createWarehouseDto.contactNumber,
                createWarehouseDto.status
            )
        );
    }

    @Put()
    async update(@Body() updateWarehouseDto: UpdateWarehouseDto) {
        const result = this.commandBus.execute(
            new UpdateWarehouseCommand(
                updateWarehouseDto.id,
                updateWarehouseDto.title,
                updateWarehouseDto.departmentId,
                updateWarehouseDto.address,
                updateWarehouseDto.position,
                updateWarehouseDto.level,
                updateWarehouseDto.administrator,
                updateWarehouseDto.contactNumber,
                updateWarehouseDto.status
            )
        );

        const resultData = await result;
        if (resultData.code === 200) {
            updateWarehouseDto.status === "Enable"
                ? await this.commandBus.execute(new EnableWarehouseCommand(updateWarehouseDto.id))
                : await this.commandBus.execute(new DisableWarehouseCommand(updateWarehouseDto.id));
        }

        return result;
    }

    @Delete(":id")
    async remove(@Param("id") id: string) {
        return this.commandBus.execute(new RemoveWarehouseCommand(id));
    }

    @Put("enable/:id")
    async enable(@Param("id") id: string) {
        return this.commandBus.execute(new EnableWarehouseCommand(id));
    }

    @Put("disable/:id")
    async disable(@Param("id") id: string) {
        return this.commandBus.execute(new DisableWarehouseCommand(id));
    }
}
