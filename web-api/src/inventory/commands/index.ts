import { CreateCategoryCommandHandler } from "./material/category/create-category-command";
import { DisableCategoryCommandHandler } from "./material/category/disable-category-command";
import { EnableCategoryCommandHandler } from "./material/category/enable-category-command";
import { RemoveCategoryCommandHandler } from "./material/category/remove-category-command";
import { UpdateCategoryCommandHandler } from "./material/category/update-category-command";
import { CreateMaterialCommandHandler } from "./material/material/create-material-command";
import { DisableMaterialCommandHandler } from "./material/material/disable-material-command";
import { EnableMaterialCommandHandler } from "./material/material/enable-material-command";
import { RemoveMaterialCommandHandler } from "./material/material/remove-material-command";
import { UpdateMaterialCommandHandler } from "./material/material/update-material-command";

export const commands = [
    CreateCategoryCommandHandler,
    UpdateCategoryCommandHandler,
    RemoveCategoryCommandHandler,
    EnableCategoryCommandHandler,
    DisableCategoryCommandHandler,
    CreateMaterialCommandHandler,
    UpdateMaterialCommandHandler,
    RemoveMaterialCommandHandler,
    EnableMaterialCommandHandler,
    DisableMaterialCommandHandler,
];
