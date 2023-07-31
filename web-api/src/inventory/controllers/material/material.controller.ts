import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { BaseController } from "src/base.controller";
import { CreateMaterialCommand } from "src/inventory/commands/material/material/create-material-command";
import { CreateMaterialDto } from "src/inventory/dtos/material/create-material-dto";
import { GetMaterialsQuery } from "src/inventory/queries/material/material/get-materials-query";

@ApiTags("inventory/material")
@Controller("inventory/material")
export class MaterialController extends BaseController {
    @Get("list")
    async list() {
        return this.queryBus.execute(new GetMaterialsQuery());
    }

    @Post()
    async create(@Body() createMaterialDto: CreateMaterialDto) {
        return this.commandBus.execute(
            new CreateMaterialCommand(
                createMaterialDto.code,
                createMaterialDto.name,
                createMaterialDto.categoryId,
                createMaterialDto.departmentId,
                createMaterialDto.regularMaintenanceFrequency,
                createMaterialDto.status
            )
        );
    }
}
