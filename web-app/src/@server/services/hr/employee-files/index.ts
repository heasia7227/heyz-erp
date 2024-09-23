import dayjs from "dayjs";
import { getDataSource } from "@/@server/datasource";
import { EmployeeFiles } from "@/@server/entities/hr/employee-files";
import { getBirthdayByIdCard, getGenderByIdCard } from "@/utils/id-card";

/**
 * 查询员工档案列表
 * @param params
 * @returns
 */
export const getEmployeeFiles = async (params?: any): Promise<any> => {
    const appDataSource = await getDataSource();
    const employees = await appDataSource.manager.query(`
            SELECT
                t1.id,
                t1.name,
                t1.gender,
                t1.birthday,
                t1.id_card idCard,
                t1.phone_number phoneNumber,
                t1.email,
                t1.education,
                t1.salary,
                t1.department_id departmentId,
                t1.status,
                t1.resume_id resumeId,
                t1.create_by createBy,
                t1.create_date createDate,
                t1.update_by updateBy,
                t1.update_date updateDate,
                CASE WHEN t2.id IS NULL THEN 0 ELSE 1 END assigned,
                t2.account,
                t3.title departmentTitle,
                t4.NAME createUserName,
                t5.NAME updateUserName 
            FROM
                t_hr_employee_files t1
                LEFT JOIN t_sys_users t2 ON t1.id = t2.employee_id
                LEFT JOIN t_sys_departments t3 ON t1.department_id = t3.id
                LEFT JOIN t_hr_employee_files t4 ON t1.create_by = t4.id
                LEFT JOIN t_hr_employee_files t5 ON t1.update_by = t5.id
        `);
    return { items: employees, totalCount: employees?.length };
};

/**
 * 创建员工档案
 * @param params
 * @returns
 */
export const createEmployeeFile = async (params?: any): Promise<any> => {
    const appDataSource = await getDataSource();

    params.birthday = getBirthdayByIdCard(params.idCard);
    params.gender = getGenderByIdCard(params.idCard);
    params.createDate = dayjs().format("YYYY-MM-DD HH:mm:ss");
    params.createUser = await appDataSource.getRepository(EmployeeFiles).findOne({ where: { id: params.createBy } });

    const result = await appDataSource.getRepository(EmployeeFiles).save(new EmployeeFiles(params));
    return result;
};
