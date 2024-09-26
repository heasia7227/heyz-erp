import { IRecruitingPlanning } from "..";

export interface IRecruitingPlanningPendingAuditing extends IRecruitingPlanning {
    id: number;
    planningId: number;
    auditorId: number;
    auditLevel: number;
    auditDate: string;
    auditStatus: string;
    opinion: string;
    isActive: string;
}
