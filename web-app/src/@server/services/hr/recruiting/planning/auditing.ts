import dayjs from "dayjs";
import { getDataSource } from "@/@server/datasource";
import { EmployeeFiles } from "@/@server/entities/hr/employee-files";
import { RecruitingPlanning } from "@/@server/entities/hr/recruiting/planning";
import { RecruitingPlanningAuditing } from "@/@server/entities/hr/recruiting/planning/auditing";
import { ISaveRecruitingPlanningAuditingParams } from "@/interfaces/hr/recruiting/planning/auditing";

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

export const createRecruitingPlanningAuditing = async (params: ISaveRecruitingPlanningAuditingParams) => {
    const appDataSource = await getDataSource();
    const planning = await appDataSource
        .getRepository(RecruitingPlanning)
        .findOne({ where: { id: params.planningId } });
    if (planning) {
        const _params: any = {};

        _params.planning = planning;
        _params.createDate = dayjs().format("YYYY-MM-DD HH:mm:ss");
        _params.createUser = await appDataSource
            .getRepository(EmployeeFiles)
            .findOne({ where: { id: params.createBy } });

        const _auditings = new Array<RecruitingPlanningAuditing>();
        for (let index = 0; index < params.auditorIds.length; index++) {
            const _auditorId = params.auditorIds[index];
            const auditor = await appDataSource.getRepository(EmployeeFiles).findOne({ where: { id: _auditorId } });

            const _auditing = new RecruitingPlanningAuditing({
                ..._params,
                auditor,
                auditLevel: index + 1,
            });
            _auditings.push(_auditing);
        }

        try {
            await appDataSource.manager.transaction(async (transactionalEntityManager) => {
                await transactionalEntityManager.save<RecruitingPlanningAuditing>(_auditings);
                planning.status = "auditing";
                await transactionalEntityManager.save<RecruitingPlanning>(planning);
            });
            return true;
        } catch (error) {
            return false;
        }
    }
    return false;
};
