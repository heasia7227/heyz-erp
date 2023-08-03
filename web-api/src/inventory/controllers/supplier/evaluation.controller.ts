import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { BaseController } from "src/base.controller";
import { CreateSupplierEvaluationCommand } from "src/inventory/commands/supplier/evaluation/create-evaluation.command";
import { CreateSupplierEvaluationDto } from "src/inventory/dtos/supplier/evaluation/create-evaluation.dto";
import { GetSupplierEvaluationsDto } from "src/inventory/dtos/supplier/evaluation/get-evaluation.dto";
import { GetSupplierEvaluationsQuery } from "src/inventory/queries/supplier/evaluation/get-evaluation.query";

@ApiTags("supplier/evaluation")
@Controller("supplier/evaluation")
export class SupplierEvaluationController extends BaseController {
    @Get("list")
    async list(@Query() getSupplierEvaluationsDto: GetSupplierEvaluationsDto) {
        return this.queryBus.execute(
            new GetSupplierEvaluationsQuery(
                getSupplierEvaluationsDto.current,
                getSupplierEvaluationsDto.pageSize,
                getSupplierEvaluationsDto.supplierId
            )
        );
    }

    @Post()
    async create(@Body() createSupplierEvaluationDto: CreateSupplierEvaluationDto) {
        return this.commandBus.execute(
            new CreateSupplierEvaluationCommand(
                createSupplierEvaluationDto.notes,
                createSupplierEvaluationDto.score,
                createSupplierEvaluationDto.supplierId
            )
        );
    }
}
