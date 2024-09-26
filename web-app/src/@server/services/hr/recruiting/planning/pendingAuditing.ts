import { getDataSource } from "@/@server/datasource";

export const getRecruitingPlanningPendingAuditing = async (employeeId: number) => {
    const appDataSource = await getDataSource();
    const auditings = await appDataSource.manager.query(
        `
            SELECT
                t1.id,
                t1.planning_id planningId,
                t1.auditor_id auditorId,
                t1.audit_level auditLevel,
                t1.audit_date auditDate,
                t1.status auditStatus,
                t1.opinion,
                CASE WHEN t2.planning_id IS NULL THEN 'inactive' ELSE 'active' END isActive,
                t3.department_id departmentId,
                t4.title departmentTitle,
                t3.post_title postTitle,
                t3.post_info postInfo,
                t3.education,
                t5.title educationTitle,
                t3.experience,
                t3.salaries_range salariesRange,
                t3.technology,
                t3.reason,
                t3.status,
                t3.recruiting_num recruitingNum,
                t3.hr_attache_id hrattacheId,
                t8.name hrAttacheName,
                t6.name createUserName,
                t3.create_by createBy,
                t3.create_date createDate,
                t7.name updateUserName,
                t3.update_by updateBy,
                t3.update_date updateDate, 
                t3.close_date closeDate  
            FROM t_hr_recruiting_planning_auditing t1
                LEFT JOIN ( SELECT t.planning_id, min(t.audit_level) audit_level FROM t_hr_recruiting_planning_auditing t WHERE t.audit_date IS NULL GROUP BY t.planning_id ) t2 ON t1.planning_id = t2.planning_id AND t1.audit_level = t2.audit_level
                LEFT JOIN t_hr_recruiting_planning t3 ON t1.planning_id = t3.id
                LEFT JOIN t_sys_departments t4 ON t3.department_id = t4.id
                LEFT JOIN t_common_dictionaries t5 ON t3.education = t5.id
                LEFT JOIN t_hr_employee_files t6 ON t3.create_by = t6.id
                LEFT JOIN t_hr_employee_files t7 ON t3.update_by = t7.id
                LEFT JOIN t_hr_employee_files t8 ON t3.hr_attache_id = t8.id
            WHERE (t2.planning_id IS NOT NULL OR t1.status IS NOT NULL) and t1.auditor_id = ?
        `,
        [employeeId]
    );
    return { items: auditings, totalCount: auditings?.length };
};
