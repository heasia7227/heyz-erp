import dayjs from "dayjs";
import { getDataSource } from "@/@server/datasource";
import { EmployeeFiles } from "@/@server/entities/hr/employee-files";
import { RecruitingPlanning } from "@/@server/entities/hr/recruiting/planning";

/**
 * 获取招聘计划列表
 */
export const getPlannings = async (params: any) => {
    const appDataSource = await getDataSource();
    const plannings = await appDataSource.manager.query(`
            SELECT
                t1.id,
                t1.department_id departmentId,
                t5.title departmentTitle,
                t1.post_title postTitle,
                t1.post_info postInfo,
                t1.education,
                t6.title educationTitle,
                t1.experience,
                t1.salaries_range salariesRange,
                t1.technology,
                t1.status,
                t1.reason,
                t1.recruiting_num recruitingNum,
                t1.hr_attache_id hrattacheId,
                t4.name hrAttacheName,
                t2.name createUserName,
                t1.create_by createBy,
                t1.create_date createDate,
                t3.name updateUserName,
                t1.update_by updateBy,
                t1.update_date updateDate, 
                t1.close_date closeDate 
            FROM
                t_hr_recruiting_planning t1
                LEFT JOIN t_hr_employee_files t2 ON t1.create_by = t2.id
                LEFT JOIN t_hr_employee_files t3 ON t1.update_by = t3.id
                LEFT JOIN t_hr_employee_files t4 ON t1.hr_attache_id = t4.id
                LEFT JOIN t_sys_departments t5 ON t1.department_id = t5.id
                LEFT JOIN t_common_dictionaries t6 on t1.education = t6.id
        `);

    return { items: plannings, totalCount: plannings?.length };
};

/**
 * 新增计划
 * @param params
 */
export const createPlanning = async (params: any) => {
    const appDataSource = await getDataSource();

    params.createDate = dayjs().format("YYYY-MM-DD HH:mm:ss");
    params.createUser = await appDataSource.getRepository(EmployeeFiles).findOne({ where: { id: params.createBy } });

    const result = await appDataSource.getRepository(RecruitingPlanning).save(new RecruitingPlanning(params));
    return result;
};
