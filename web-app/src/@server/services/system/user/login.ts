import { generateToken } from "@/utils/jwt";
import aes from "@/utils/aes";
import { getDataSource } from "@/@server/datasource";

const login = async (params: any): Promise<any> => {
    params.password = aes.encrypt(params.password);

    const appDataSource = await getDataSource();

    const users = await appDataSource.manager.query(
        `SELECT
            t1.id,
            t1.name,
            t2.employee_id employeeId,
            t1.department_id departmentId,
            t3.title departmentTitle 
        FROM t_hr_employee_files t1
            INNER JOIN t_sys_users t2 ON t1.id = t2.employee_id
            LEFT JOIN t_sys_departments t3 ON t1.department_id = t3.id 
        WHERE t1.STATUS = 'enable'
            AND t2.password = ?
            AND t2.account = ?`,
        [params.password, params.username]
    );

    if (!users || typeof users?.[0] === "undefined") {
        return null;
    }

    // TODO: 判断用户有没有可操作的菜单，如果没有不允许登录

    const token = generateToken({ ...users[0] });
    return { token, user: users[0] };
};

export default login;
