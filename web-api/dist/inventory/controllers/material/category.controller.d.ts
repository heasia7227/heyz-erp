import { BaseController } from "src/base.controller";
import { CreateCategoryDto } from "src/inventory/dtos/material/create-category-dto";
import { UpdateCategoryDto } from "src/inventory/dtos/material/update-category-dto";
export declare class CategoryController extends BaseController {
    list(): Promise<any>;
    create(createCategoryDto: CreateCategoryDto): Promise<any>;
    update(updateCategoryDto: UpdateCategoryDto): Promise<any>;
    remove(id: string): Promise<any>;
}
