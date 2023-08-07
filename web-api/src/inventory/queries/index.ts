import { GetCountingTemporariesQueryHandler } from "./counting/temporary/get-temporaries.query";
import { GetInventoriesQueryHandler } from "./inventory/get-inventories.query";
import { GetCategoriesQueryHandler } from "./material/category/get-categories.query";
import { GetMaterialsQueryHandler } from "./material/material/get-materials.query";
import { GetSupplierContractsQueryHandler } from "./supplier/contract/get-contracts.query";
import { GetSupplierEvaluationsQueryHandler } from "./supplier/evaluation/get-evaluation.query";
import { GetSupplierPaymentsQueryHandler } from "./supplier/payment/get-payment.query";
import { GetSuppliersQueryHandler } from "./supplier/supplier/get-suppliers.query";
import { GetWarehousesQueryHandler } from "./warehouse/get-warehouses.query";

export const queries = [
    GetCategoriesQueryHandler,
    GetMaterialsQueryHandler,
    GetSuppliersQueryHandler,
    GetSupplierContractsQueryHandler,
    GetSupplierEvaluationsQueryHandler,
    GetSupplierPaymentsQueryHandler,
    GetWarehousesQueryHandler,
    GetInventoriesQueryHandler,
    GetCountingTemporariesQueryHandler,
];
