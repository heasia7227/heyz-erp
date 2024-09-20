import { getDataSource } from "@/@server/datasource";

const getUnassignUsers = async (params: any): Promise<any> => {
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

export default getUnassignUsers;
