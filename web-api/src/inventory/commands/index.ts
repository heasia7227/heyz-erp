import { CreateCategoryCommandHandler } from "./material/category/create-category-command-handler";
import { DisableCategoryCommandHandler } from "./material/category/disable-category-command-handler";
import { EnableCategoryCommandHandler } from "./material/category/enable-category-command-handler";
import { RemoveCategoryCommandHandler } from "./material/category/remove-category-command-handler";
import { UpdateCategoryCommandHandler } from "./material/category/update-category-command-handler";

export const commands = [
    CreateCategoryCommandHandler,
    UpdateCategoryCommandHandler,
    RemoveCategoryCommandHandler,
    EnableCategoryCommandHandler,
    DisableCategoryCommandHandler,
];
