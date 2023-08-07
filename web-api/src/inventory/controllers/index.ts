import { InventoryController } from "./inventory/inventory.controller";
import { CategoryController } from "./material/category.controller";
import { MaterialController } from "./material/material.controller";
import { SupplierContractController } from "./supplier/contract.controller";
import { SupplierEvaluationController } from "./supplier/evaluation.controller";
import { SupplierPaymentController } from "./supplier/payment.controller";
import { SupplierController } from "./supplier/supplier.controller";
import { WarehouseController } from "./warehouse/warehouse.controller";

export const controllers = [
    SupplierController,
    SupplierContractController,
    SupplierEvaluationController,
    SupplierPaymentController,
    InventoryController,
    MaterialController,
    CategoryController,
    WarehouseController,
];
