import { getDataSource } from "@/@server/datasource";

const list = async (params?: any): Promise<any> => {
    const appDataSource = await getDataSource();

    let _sql = `
        SELECT
            t1.id,
            t5.name,
            t5.department_id departmentId,
            t4.title departmentTitle,
            t5.phone_number phoneNumber,
            t5.email,
            t5.status,
            t1.account,
            t1.create_by createBy,
            t2.name createUserName,
            t1.create_date createDate,
            t1.update_by updateBy,
            t3.name updateUserName,
            t1.update_date updateDate
        FROM
            t_sys_users t1
			LEFT JOIN t_hr_employee_files t5 on t1.employee_id = t5.id
            LEFT JOIN t_hr_employee_files t2 ON t2.id = t1.create_by
            LEFT JOIN t_hr_employee_files t3 ON t3.id = t1.update_by
            LEFT JOIN t_sys_departments t4 ON t4.id = t5.department_id
        WHERE 1=1
        `;
    const _params: any = [];

    if (params?.departmentId) {
        _sql = `${_sql} AND t4.id = ? `;
        _params.push(params?.departmentId);
    }

    if (params?.userName) {
        _sql = `${_sql} AND t5.name like ? `;
        _params.push(`%${params?.userName}%`);
    }

    const users = await appDataSource.manager.query(_sql, _params);

    return { items: users, totalCount: users?.length };
};

export default list;
