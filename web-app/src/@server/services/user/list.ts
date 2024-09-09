import { getDataSource } from "@/@server/datasource";

const list = async (params?: any): Promise<any> => {
    const appDataSource = await getDataSource();

    const users = await appDataSource.manager.query(`
        SELECT
            t1.id,
            t1.name,
            t1.department_id departmentId,
            t4.title departmentTitle,
            t1.birthday,
            t1.gender,
            t1.phone_number phoneNumber,
            t1.email,
            t1.status,
            t1.create_by createBy,
            t2.name createUserName,
            t1.create_date createDate,
            t1.update_by updateBy,
            t3.name updateUserName,
            t1.update_date updateDate
        FROM
            t_sys_users t1
            LEFT JOIN t_sys_users t2 ON t2.id = t1.create_by
            LEFT JOIN t_sys_users t3 ON t3.id = t1.update_by
            LEFT JOIN t_sys_departments t4 ON t4.id = t1.department_id
        `);

    return { items: users, totalCount: users?.length };
};

export default list;
