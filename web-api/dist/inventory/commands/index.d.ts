import { CreateCategoryCommandHandler } from "./material/category/create-category-command-handler";
import { RemoveCategoryCommandHandler } from "./material/category/remove-category-command-handler";
import { UpdateCategoryCommandHandler } from "./material/category/update-category-command-handler";
export declare const commands: (typeof CreateCategoryCommandHandler | typeof UpdateCategoryCommandHandler | typeof RemoveCategoryCommandHandler)[];
