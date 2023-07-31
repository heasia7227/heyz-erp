import { CreateCategoryCommandHandler } from "./material/category/create-category-command";
import { DisableCategoryCommandHandler } from "./material/category/disable-category-command";
import { EnableCategoryCommandHandler } from "./material/category/enable-category-command";
import { RemoveCategoryCommandHandler } from "./material/category/remove-category-command";
import { UpdateCategoryCommandHandler } from "./material/category/update-category-command";
import { CreateMaterialCommandHandler } from "./material/material/create-material-command";

export const commands = [
    CreateCategoryCommandHandler,
    UpdateCategoryCommandHandler,
    RemoveCategoryCommandHandler,
    EnableCategoryCommandHandler,
    DisableCategoryCommandHandler,
    CreateMaterialCommandHandler,
];
