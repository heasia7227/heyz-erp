import dayjs from "dayjs";
import { getDataSource } from "@/@server/datasource";
import { EmployeeFiles } from "@/@server/entities/hr/employee-files";
import { Role } from "@/@server/entities/system/role";
import { IGetRolesParams, ISaveRoleParams } from "@/interfaces/system/role";

/**
 * 创建角色
 * @param params
 * @returns
 */
export const createRole = async (params: ISaveRoleParams): Promise<any> => {
    const appDataSource = await getDataSource();

    const roleEntity: any = { ...params };
    roleEntity.createDate = dayjs().format("YYYY-MM-DD HH:mm:ss");
    roleEntity.createUser = await appDataSource
        .getRepository(EmployeeFiles)
        .findOne({ where: { id: params.createBy } });

    const result = await appDataSource.getRepository(Role).save(new Role(roleEntity));
    return result;
};

/**
 * 查询角色
 * @param params
 * @returns
 */
export const getRoles = async (params: IGetRolesParams): Promise<any> => {
    const appDataSource = await getDataSource();
    const roles = await appDataSource.manager.query(`
            SELECT
                t1.id,
                t1.title,
                t1.description,
                t1.status,
                t2.name createUserName,
                t1.create_by createBy,
                t1.create_date createDate,
                t3.name updateUserName,
                t1.update_by updateBy,
                t1.update_date updateDate
            FROM
                t_sys_roles t1
                LEFT JOIN t_hr_employee_files t2 ON t1.create_by = t2.id
                LEFT JOIN t_hr_employee_files t3 ON t1.update_by = t3.id
        `);
    return roles;
};
