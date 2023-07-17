import { IPage } from "../ICommon";

export interface IMaterialsCategory {
    key: string;
    title: string;
    children: Array<IMaterialsCategory>;
}

export interface IMaterials extends IPage {
    materials: Array<IMaterial>;
}

export interface IMaterial {
    id: string;
    code: string;
    name: string;
    category: string;
    department: string;
    warehouse: string;
    inventoryNumber: number;
    usedNumber: number;
    regularMaintenanceFrequency: string;
    scrapDateTime: string;
}
