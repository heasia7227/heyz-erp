import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { BaseController } from "src/base.controller";
import { CreateCategoryDto } from "src/inventory/dtos/material/create-category-dto";
import { UpdateCategoryDto } from "src/inventory/dtos/material/update-category-dto";
import { CreateCategoryCommand } from "src/inventory/commands/material/category/create-category-command";
import { UpdateCategoryCommand } from "src/inventory/commands/material/category/update-category-command";
import { GetCategoriesQuery } from "src/inventory/queries/material/category/get-categories-query";
import { RemoveCategoryCommand } from "src/inventory/commands/material/category/remove-category-command";

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
            new CreateCategoryCommand(createCategoryDto.code, createCategoryDto.title, createCategoryDto.parentId)
        );
    }

    @Put()
    async update(@Body() updateCategoryDto: UpdateCategoryDto) {
        return this.commandBus.execute(
            new UpdateCategoryCommand(
                updateCategoryDto.id,
                updateCategoryDto.code,
                updateCategoryDto.title,
                updateCategoryDto.parentId
            )
        );
    }

    @Delete(":id")
    async remove(@Param("id") id: string) {
        return this.commandBus.execute(new RemoveCategoryCommand(id));
    }
}
