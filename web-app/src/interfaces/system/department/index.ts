import { IBaseTree } from "@/interfaces";

export interface IDepartment {
    id: number;
    title: string;
    parentId: number;
    description: string;
    status: string;
    createUserName: string;
    createBy: number;
    createDate: string;
    updateUserName: string;
    updateBy: number;
    updateDate: string;
}

export interface IDepartmentTree extends IBaseTree, IDepartment {
    children: IDepartmentTree[];
}
