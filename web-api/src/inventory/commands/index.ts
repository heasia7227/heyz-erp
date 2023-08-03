import { CreateCategoryCommandHandler } from "./material/category/create-category.command";
import { DisableCategoryCommandHandler } from "./material/category/disable-category.command";
import { EnableCategoryCommandHandler } from "./material/category/enable-category.command";
import { RemoveCategoryCommandHandler } from "./material/category/remove-category.command";
import { UpdateCategoryCommandHandler } from "./material/category/update-category.command";
import { CreateMaterialCommandHandler } from "./material/material/create-material.command";
import { DisableMaterialCommandHandler } from "./material/material/disable-material.command";
import { EnableMaterialCommandHandler } from "./material/material/enable-material.command";
import { RemoveMaterialCommandHandler } from "./material/material/remove-material.command";
import { UpdateMaterialCommandHandler } from "./material/material/update-material.command";
import { CreateSupplierContractCommandHandler } from "./supplier/contract/create-contract.command";
import { CreateSupplierEvaluationCommandHandler } from "./supplier/evaluation/create-evaluation.command";
import { CreateSupplierCommandHandler } from "./supplier/supplier/create-supplier.command";
import { UpdateSupplierCommandHandler } from "./supplier/supplier/update-supplier.command";

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
    CreateSupplierCommandHandler,
    UpdateSupplierCommandHandler,
    CreateSupplierContractCommandHandler,
    CreateSupplierEvaluationCommandHandler,
];
