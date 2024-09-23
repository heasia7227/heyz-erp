import dayjs from "dayjs";
import { getDataSource } from "@/@server/datasource";
import { EmployeeFiles } from "@/@server/entities/hr/employee-files";
import { AssignUsers } from "@/@server/entities/system/role/assign-users";
import {
    IAssignUser,
    IGetAssignUsersParams,
    IGetUnassignUsersParams,
    ISaveAssignUserParams,
    IUnassignUser,
} from "@/interfaces/system/role/assign-users";

/**
 * 保存分配用户
 * @param params
 * @returns
 */
export const saveAssignUsers = async (params: ISaveAssignUserParams): Promise<any> => {
    const appDataSource = await getDataSource();

    const createDate = dayjs().format("YYYY-MM-DD HH:mm:ss");
    const createUser = await appDataSource.getRepository(EmployeeFiles).findOne({ where: { id: params.createBy } });

    const _assignUsers = new Array<AssignUsers>();
    params.userIds.forEach((userId) => {
        const _assignUser = new AssignUsers({
            roleId: params.roleId,
            userId,
            createUser,
            createDate,
        });
        _assignUsers.push(_assignUser);
    });

    try {
        await appDataSource.manager.transaction(async (transactionalEntityManager) => {
            await transactionalEntityManager.save<AssignUsers>(_assignUsers);
        });
        return true;
    } catch (error) {
        return false;
    }
};

/**
 * 获取已分配用户
 * @param params
 * @returns
 */
export const getAssignUsers = async (params: IGetAssignUsersParams): Promise<IAssignUser> => {
    const appDataSource = await getDataSource();

    let _sql = `
            SELECT
                t3.id userId,
                t3.name,
                t3.department_id departmentId,
                t4.title departmentTitle,
                t5.name createUserName,
                t1.create_by createBy,
                t1.create_date createDate 
            FROM
                t_sys_role_user t1
                LEFT JOIN t_sys_roles t2 ON t1.role_id = t2.id
                LEFT JOIN t_hr_employee_files t3 ON t1.user_id = t3.id
                LEFT JOIN t_sys_departments t4 ON t3.department_id = t4.id
                LEFT JOIN t_hr_employee_files t5 ON t1.create_by = t5.id 
            WHERE t1.role_id = ? 
        `;

    const _params: any = [params.roleId];

    if (params?.departmentId) {
        _sql = `${_sql} AND t3.department_id = ? `;
        _params.push(params?.departmentId);
    }

    if (params?.userName) {
        _sql = `${_sql} AND t3.name like ? `;
        _params.push(`%${params?.userName}%`);
    }

    _sql = `${_sql} ORDER BY t4.id`;

    const users = await appDataSource.manager.query(_sql, _params);
    return users;
};

/**
 * 获取未分配用户
 * @param params
 * @returns
 */
export const getUnassignUsers = async (params: IGetUnassignUsersParams): Promise<IUnassignUser[]> => {
    const appDataSource = await getDataSource();

    let _sql = `
                SELECT t.id, t.name, case when t.role_id is null then 'enable' else 'disable' end status
                FROM (
                    SELECT
                        t1.id,
                        t1.name,
                        t1.department_id,
                        t2.title departmentTitle,
                        t3.role_id 
                    FROM
                        t_hr_employee_files t1
                        LEFT JOIN t_sys_departments t2 ON t1.department_id = t2.id
                        LEFT JOIN t_sys_role_user t3 ON t1.id = t3.user_id 
                        AND t3.role_id = ? 
                ) t WHERE 1=1
            `;
    const _params: any = [params.roleId];

    if (params?.departmentId) {
        _sql = `${_sql} AND t.department_id = ? `;
        _params.push(params?.departmentId);
    }

    if (params?.userName) {
        _sql = `${_sql} AND t.name like ? `;
        _params.push(`%${params?.userName}%`);
    }

    const users = await appDataSource.manager.query(_sql, _params);
    return users;
};
