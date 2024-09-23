import { generateToken } from "@/utils/jwt";
import aes from "@/utils/aes";
import { getDataSource } from "@/@server/datasource";

const login = async (params: any): Promise<any> => {
    params.password = aes.encrypt(params.password);

    const appDataSource = await getDataSource();

    const users = await appDataSource.manager.query(
        `select 
            t1.id, t1.name, t2.employee_id employeeId
        from t_hr_employee_files t1 
        inner join t_sys_users t2 on t1.id = t2.employee_id 
        where t1.status='enable'
            and t2.password = ?
            and t2.account = ?`,
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
