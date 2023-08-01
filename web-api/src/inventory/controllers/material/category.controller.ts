import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { BaseController } from "src/base.controller";
import { CreateCategoryDto } from "src/inventory/dtos/material/category/create-category-dto";
import { UpdateCategoryDto } from "src/inventory/dtos/material/category/update-category-dto";
import { CreateCategoryCommand } from "src/inventory/commands/material/category/create-category-command";
import { UpdateCategoryCommand } from "src/inventory/commands/material/category/update-category-command";
import { GetCategoriesQuery } from "src/inventory/queries/material/category/get-categories-query";
import { RemoveCategoryCommand } from "src/inventory/commands/material/category/remove-category-command";
import { EnableCategoryCommand } from "src/inventory/commands/material/category/enable-category-command";
import { DisableCategoryCommand } from "src/inventory/commands/material/category/disable-category-command";

@ApiTags("inventory/material/category")
@Controller("inventory/material/category")
export class CategoryController extends BaseController {
    @Get("list")
    async list() {
        return this.queryBus.execute(new GetCategoriesQuery());
    }

    @Post()
    async create(@Body() createCategoryDto: CreateCategoryDto) {
        return this.commandBus.execute(
            new CreateCategoryCommand(
                createCategoryDto.code,
                createCategoryDto.title,
                createCategoryDto.parentId,
                createCategoryDto.status
            )
        );
    }

    @Put()
    async update(@Body() updateCategoryDto: UpdateCategoryDto) {
        const result = this.commandBus.execute(
            new UpdateCategoryCommand(
                updateCategoryDto.id,
                updateCategoryDto.code,
                updateCategoryDto.title,
                updateCategoryDto.parentId,
                updateCategoryDto.status
            )
        );

        const resultData = await result;
        if (resultData.code === 200) {
            updateCategoryDto.status === "Enable"
                ? await this.commandBus.execute(new EnableCategoryCommand(updateCategoryDto.id))
                : await this.commandBus.execute(new DisableCategoryCommand(updateCategoryDto.id));
        }

        return result;
    }

    @Delete(":id")
    async remove(@Param("id") id: string) {
        return this.commandBus.execute(new RemoveCategoryCommand(id));
    }

    @Put("enable/:id")
    async enable(@Param("id") id: string) {
        return this.commandBus.execute(new EnableCategoryCommand(id));
    }

    @Put("disable/:id")
    async disable(@Param("id") id: string) {
        return this.commandBus.execute(new DisableCategoryCommand(id));
    }
}
