import { BaseController } from "src/base.controller";
import { CreateCategoryDto } from "src/inventory/dtos/material/create-category-dto";
export declare class CategoryController extends BaseController {
    list(): Promise<any>;
    create(createCategoryDto: CreateCategoryDto): Promise<any>;
}
