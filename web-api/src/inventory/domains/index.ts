import { CountingRegular } from "./counting/regular";
import { CountingTemporary } from "./counting/temporary";
import { Inventory } from "./inventory/inventory";
import { MaterialCategory } from "./material/category";
import { Material } from "./material/material";
import { SupplierContract } from "./supplier/contract";
import { SupplierEvaluation } from "./supplier/evaluation";
import { SupplierPayment } from "./supplier/payment";
import { Supplier } from "./supplier/supplier";
import { Warehouse } from "./warehouse/warehouse";

export const InventoryEntities = [
    MaterialCategory,
    Material,
    Supplier,
    SupplierContract,
    SupplierEvaluation,
    SupplierPayment,
    Warehouse,
    Inventory,
    CountingTemporary,
    CountingRegular,
];
