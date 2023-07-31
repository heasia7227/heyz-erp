import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { BaseController } from "src/base.controller";
import { CreateMaterialCommand } from "src/inventory/commands/material/material/create-material-command";
import { DisableMaterialCommand } from "src/inventory/commands/material/material/disable-material-command";
import { EnableMaterialCommand } from "src/inventory/commands/material/material/enable-material-command";
import { RemoveMaterialCommand } from "src/inventory/commands/material/material/remove-material-command";
import { UpdateMaterialCommand } from "src/inventory/commands/material/material/update-material-command";
import { CreateMaterialDto } from "src/inventory/dtos/material/create-material-dto";
import { UpdateMaterialDto } from "src/inventory/dtos/material/update-material-dto";
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

    @Put()
    async update(@Body() updateCategoryDto: UpdateMaterialDto) {
        const result = this.commandBus.execute(
            new UpdateMaterialCommand(
                updateCategoryDto.id,
                updateCategoryDto.code,
                updateCategoryDto.name,
                updateCategoryDto.categoryId,
                updateCategoryDto.departmentId,
                updateCategoryDto.regularMaintenanceFrequency,
                updateCategoryDto.status
            )
        );

        const resultData = await result;
        if (resultData.code === 200) {
            updateCategoryDto.status === "Enable"
                ? await this.commandBus.execute(new EnableMaterialCommand(updateCategoryDto.id))
                : await this.commandBus.execute(new DisableMaterialCommand(updateCategoryDto.id));
        }

        return result;
    }

    @Delete(":id")
    async remove(@Param("id") id: string) {
        return this.commandBus.execute(new RemoveMaterialCommand(id));
    }

    @Put("enable/:id")
    async enable(@Param("id") id: string) {
        return this.commandBus.execute(new EnableMaterialCommand(id));
    }

    @Put("disable/:id")
    async disable(@Param("id") id: string) {
        return this.commandBus.execute(new DisableMaterialCommand(id));
    }
}
