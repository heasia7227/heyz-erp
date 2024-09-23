export interface IGetUsersParams {
    departmentId?: number;
    userName?: string;
}

export interface IUser {
    id: number;
    employeeId: number;
    name: string;
    departmentId: number;
    departmentTitle: string;
    phoneNumber: string;
    email: string;
    status: string;
    account: string;
    createBy: number;
    createUserName: string;
    createDate: string;
    updateBy: number;
    updateUserName: string;
    updateDate: string;
}

export interface IAssignAccountResult extends IUser {
    error: string;
    message: string;
}

export interface ILoginResult {
    token: string;
    user: {
        id: number;
        employeeId: number;
        name: string;
    };
}
