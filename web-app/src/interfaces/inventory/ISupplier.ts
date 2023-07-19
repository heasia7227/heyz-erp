import { IPage } from "../ICommon";

export interface ISupplierArchive {
    id: string;
    title: string;
    responsiblePerson: string;
    gender: string;
    contactNumber: string;
    address: string;
    remarks: string;
    webUrl: string;
    createDateTime: string;
}

export interface ISupplierArchives extends IPage {
    archives: Array<ISupplierArchive>;
}
