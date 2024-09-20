import { getDataSource } from "@/@server/datasource";

const getUsers = async (params: any): Promise<any> => {
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
            WHERE t1.id = ? 
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

export default getUsers;
