import { IPage } from "../ICommon";

export interface ICountingTemporary {
    id: string;
    warehouseTitle: string;
    countingDate: string;
    countingResponsiblePerson: string;
    sceneResponsiblePerson: string;
    status: string;
}

export interface ICountingTemporaries extends IPage {
    temporaries: Array<ICountingTemporary>;
}

export interface ICountingRegular {
    id: string;
    warehouseTitle: string;
    countingDate: string;
    countingResponsiblePerson: string;
    sceneResponsiblePerson: string;
    status: string;
}

export interface ICountingRegulars extends IPage {
    regulars: Array<ICountingRegular>;
}
