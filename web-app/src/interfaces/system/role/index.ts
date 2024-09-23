import { IKeyword } from "@/interfaces";

export interface ISaveRoleParams {
    title: string;
    description?: string;
    status: boolean;
    createBy?: number;
}

export interface IGetRolesParams extends IKeyword {}

export interface IRole {
    id: number;
    title: string;
    description: string;
    status: string;
    createUserName: string;
    createBy: number;
    createDate: string;
    updateUserName: string;
    updateBy: number;
    updateDate: string;
}
