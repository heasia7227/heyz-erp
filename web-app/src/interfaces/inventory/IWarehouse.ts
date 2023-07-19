import { IPage } from "../ICommon";

export interface IWarehouse {
    id: string;
    title: string;
    department: string;
    address: string;
    position: string;
    level: string;
    administrator: string;
    contactNumber: string;
}

export interface IWarehouses extends IPage {
    warehouses: Array<IWarehouse>;
}
