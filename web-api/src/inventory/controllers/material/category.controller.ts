import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { BaseController } from "src/base.controller";
import { GetCategories } from "src/inventory/queries/material/category/get-categories";

@ApiTags("material/category")
@Controller("material/category")
export class CategoryController extends BaseController {
    @Get()
    async findAll() {
        return this.queryBus.execute(new GetCategories());
    }
}
