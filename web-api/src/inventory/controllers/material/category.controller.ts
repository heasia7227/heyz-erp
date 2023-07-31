import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { BaseController } from "src/base.controller";
import { CreateCategoryDto } from "src/inventory/dtos/material/create-category-dto";
import { CreateCategoryCommand } from "src/inventory/commands/material/category/create-category-command";
import { GetCategoriesQuery } from "src/inventory/queries/material/category/get-categories-query";

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
}
