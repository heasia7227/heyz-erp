import { getDataSource } from "@/@server/datasource";

const list = async (params?: any): Promise<any> => {
    const appDataSource = await getDataSource();

    const users = await appDataSource.manager.query(`
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
			left join t_hr_employee_files t5 on t1.employee_id = t5.id
            LEFT JOIN t_hr_employee_files t2 ON t2.id = t1.create_by
            LEFT JOIN t_hr_employee_files t3 ON t3.id = t1.update_by
            LEFT JOIN t_sys_departments t4 ON t4.id = t5.department_id
        `);

    return { items: users, totalCount: users?.length };
};

export default list;
