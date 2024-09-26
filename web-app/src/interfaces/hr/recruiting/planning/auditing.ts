export interface IRecruitingPlanningAuditing {
    planningId: number;
    auditorId: number;
    auditorName: string;
    auditLevel: number;
    status: string;
    opinion: string;
    auditDate: string;
}

export interface ISaveRecruitingPlanningAuditingParams {
    planningId: number;
    auditorIds: Array<number>;
    createBy?: number;
}