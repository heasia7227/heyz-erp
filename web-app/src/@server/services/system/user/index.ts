import dayjs from "dayjs";
import { getDataSource } from "@/@server/datasource";
import { EmployeeFiles } from "@/@server/entities/hr/employee-files";
import { User } from "@/@server/entities/system/user";
import aes from "@/utils/aes";
import { IGetUsersParams } from "@/interfaces/system/user";

/**
 * 创建账号
 * @param params
 * @returns
 */
export const createAccount = async (params?: any): Promise<any> => {
    const appDataSource = await getDataSource();
    const userRepository = appDataSource.getRepository(User);

    const users = await userRepository.find({ where: { account: params.account } });
    if (users?.length > 0) {
        return { error: true, message: `【${params.account}】账号已存在` };
    }

    params.createDate = dayjs().format("YYYY-MM-DD HH:mm:ss");
    params.createUser = await appDataSource.getRepository(EmployeeFiles).findOne({ where: { id: params.createBy } });

    params.password = aes.encrypt(aes.encrypt(process.env.NEXT_PUBLIC_DEFAULT_PASSWORD));

    const result = await userRepository.save(new User(params));
    return result;
};

/**
 * 查询用户列表
 * @param params
 * @returns
 */
export const getUsers = async (params?: IGetUsersParams): Promise<any> => {
    const appDataSource = await getDataSource();

    let _sql = `
        SELECT
            t1.id,
            t1.employee_id employeeId,
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
