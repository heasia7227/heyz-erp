import { IPage } from "../ICommon";

export interface IInventory {
    id: string;
    code: string;
    name: string;
    category: string;
    department: string;
    warehouse: string;
    suplierTitle: string;
    warehouseTitle: string;
    materialCount: number;
}

export interface IInventories extends IPage {
    inventories: Array<IInventory>;
}
