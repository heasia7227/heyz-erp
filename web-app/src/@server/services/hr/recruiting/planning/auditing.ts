import { getDataSource } from "@/@server/datasource";

export const getRecruitingPlanningAuditing = async (planningId: number) => {
    const appDataSource = await getDataSource();
    const config = await appDataSource.manager.query(
        `
            SELECT
                t1.planning_id planningId,
                t1.auditor_id auditorId,
                t2.NAME auditorName,
                t1.audit_level auditLevel,
                t1.status,
                t1.opinion,
                t1.audit_date auditDate
            FROM
                t_hr_recruiting_planning_auditing t1
                LEFT JOIN t_hr_employee_files t2 ON t1.auditor_id = t2.id 
            WHERE t1.planning_id = ? 
            ORDER BY t1.audit_level
        `,
        [planningId]
    );
    return config;
};
