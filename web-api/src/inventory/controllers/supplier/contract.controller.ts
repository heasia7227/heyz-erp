import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { BaseController } from "src/base.controller";
import { CreateSupplierContractCommand } from "src/inventory/commands/supplier/contract/create-contract.command";
import { CreateSupplierContractDto } from "src/inventory/dtos/supplier/contract/create-contract.dto";
import { GetSupplierContractsDto } from "src/inventory/dtos/supplier/contract/get-contracts.dto";
import { GetSupplierContractsQuery } from "src/inventory/queries/supplier/contract/get-contracts.query";

@ApiTags("supplier/contract")
@Controller("supplier/contract")
export class SupplierContractController extends BaseController {
    @Get("list")
    async list(@Query() getSupplierContractsDto: GetSupplierContractsDto) {
        return this.queryBus.execute(
            new GetSupplierContractsQuery(
                getSupplierContractsDto.current,
                getSupplierContractsDto.pageSize,
                getSupplierContractsDto.supplierId
            )
        );
    }

    @Post()
    async create(@Body() createSupplierContractDto: CreateSupplierContractDto) {
        return this.commandBus.execute(
            new CreateSupplierContractCommand(
                createSupplierContractDto.title,
                createSupplierContractDto.totalPrice,
                "",
                createSupplierContractDto.supplierId
            )
        );
    }
}
