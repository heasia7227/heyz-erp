import { CategoryController } from "./material/category.controller";
import { MaterialController } from "./material/material.controller";
import { SupplierContractController } from "./supplier/contract.controller";
import { SupplierEvaluationController } from "./supplier/evaluation.controller";
import { SupplierPaymentController } from "./supplier/payment.controller";
import { SupplierController } from "./supplier/supplier.controller";

export const controllers = [
    MaterialController,
    CategoryController,
    SupplierController,
    SupplierContractController,
    SupplierEvaluationController,
    SupplierPaymentController,
];
