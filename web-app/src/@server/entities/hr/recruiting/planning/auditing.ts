import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { EmployeeFiles } from "@/@server/entities/hr/employee-files";
import { RecruitingPlanning } from ".";

@Entity({ name: "t_hr_recruiting_planning_auditing" })
export class RecruitingPlanningAuditing extends BaseEntity {
    constructor(auditing?: any) {
        super();
        this.id = auditing?.id;
        this.planning = auditing?.planning;
        this.auditor = auditing?.auditor;
        this.auditLevel = auditing?.auditLevel;
        this.status = auditing?.status;
        this.opinion = auditing?.opinion;
        this.auditDate = auditing?.auditDate;
        this.createUser = auditing?.createUser;
        this.createDate = auditing?.createDate;
        this.updateUser = auditing?.updateUser;
        this.updateDate = auditing?.updateDate;
    }

    @PrimaryGeneratedColumn()
    id?: number;

    @ManyToOne(() => RecruitingPlanning)
    @JoinColumn({ name: "planning_id", foreignKeyConstraintName: "id" })
    planning?: RecruitingPlanning;

    @ManyToOne(() => EmployeeFiles)
    @JoinColumn({ name: "auditor_id", foreignKeyConstraintName: "id" })
    auditor?: EmployeeFiles;

    @Column({ name: "audit_level" })
    auditLevel!: string;

    @Column({ name: "status" })
    status!: string;

    @Column({ name: "opinion" })
    opinion!: string;

    @Column({ name: "audit_date" })
    auditDate!: string;

    @ManyToOne(() => EmployeeFiles)
    @JoinColumn({ name: "create_by", foreignKeyConstraintName: "id" })
    createUser?: EmployeeFiles;

    @Column({ name: "create_date" })
    createDate!: string;

    @ManyToOne(() => EmployeeFiles)
    @JoinColumn({ name: "update_by", foreignKeyConstraintName: "id" })
    updateUser?: EmployeeFiles;

    @Column({ name: "update_date" })
    updateDate!: string;
}
