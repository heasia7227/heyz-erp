import { Body, Controller, Get, Post, Put, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { BaseController } from "src/base.controller";
import { GetPageDto } from "src/base.query.dto";
import { CreateSupplierCommand } from "src/inventory/commands/supplier/supplier/create-supplier-command";
import { UpdateSupplierCommand } from "src/inventory/commands/supplier/supplier/update-supplier-command";
import { CreateSupplierDto } from "src/inventory/dtos/supplier/supplier/create-supplier-dto";
import { UpdateSupplierDto } from "src/inventory/dtos/supplier/supplier/update-supplier-dto";
import { GetSuppliersQuery } from "src/inventory/queries/supplier/supplier/get-suppliers-query";

@ApiTags("supplier")
@Controller("supplier")
export class SupplierController extends BaseController {
    @Get("list")
    async list(@Query() getPageDto: GetPageDto) {
        return this.queryBus.execute(new GetSuppliersQuery(getPageDto.current, getPageDto.pageSize));
    }

    @Post()
    async create(@Body() createSupplierDto: CreateSupplierDto) {
        return this.commandBus.execute(
            new CreateSupplierCommand(
                createSupplierDto.title,
                createSupplierDto.responsiblePerson,
                createSupplierDto.gender,
                createSupplierDto.contactNumber,
                createSupplierDto.address,
                createSupplierDto.remarks,
                createSupplierDto.webUrl
            )
        );
    }

    @Put()
    async update(@Body() updateSupplierDto: UpdateSupplierDto) {
        return this.commandBus.execute(
            new UpdateSupplierCommand(
                updateSupplierDto.id,
                updateSupplierDto.title,
                updateSupplierDto.responsiblePerson,
                updateSupplierDto.gender,
                updateSupplierDto.contactNumber,
                updateSupplierDto.address,
                updateSupplierDto.remarks,
                updateSupplierDto.webUrl
            )
        );
    }
}
