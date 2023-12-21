import { IPage, IPageQuery } from "../ICommon";

export interface IMaterialsCategory {
    key: string;
    code: string;
    title: string;
    parentId: string;
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
}

export interface IMaterialQuery extends IPageQuery {
    keyWord: string;
}

export interface IMaterialCategoryCreateCommand {
    code: string;
    title: string;
    parentId: string;
    status: string;
}

export interface IMaterialCategoryUpdateCommand extends IMaterialCategoryCreateCommand {
    id: string;
}
