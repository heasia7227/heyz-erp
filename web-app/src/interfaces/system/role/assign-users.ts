export interface ISaveAssignUserParams {
    roleId: number;
    userIds: number[];
    createBy?: number;
}

export interface IGetAssignUsersParams {
    roleId: number;
    departmentId?: number;
    userName?: string;
}

export interface IGetUnassignUsersParams extends IGetAssignUsersParams {}

export interface IAssignUser {
    userId: number;
    name: string;
    departmentId: number;
    departmentTitle: string;
    createUserName: string;
    createBy: number;
    createDate: string;
}

export interface IUnassignUser {
    id: number;
    name: string;
    status: string;
}
