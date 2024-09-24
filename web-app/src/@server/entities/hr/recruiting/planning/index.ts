import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Department } from "@/@server/entities/system/department";
import { EmployeeFiles } from "@/@server/entities/hr/employee-files";

@Entity({ name: "t_hr_recruiting_planning" })
export class RecruitingPlanning extends BaseEntity {
    constructor(recruitingPlanning?: any) {
        super();
        this.id = recruitingPlanning?.id;
        this.postTitle = recruitingPlanning?.postTitle;
        this.postInfo = recruitingPlanning?.postInfo;
        this.education = recruitingPlanning?.education;
        this.experience = recruitingPlanning?.experience;
        this.salariesRange = recruitingPlanning?.salariesRange;
        this.technology = recruitingPlanning?.technology;
        this.reason = recruitingPlanning?.reason;
        this.hrAttache = recruitingPlanning?.hrAttache;
        // this.department = recruitingPlanning?.department;
        this.departmentId = recruitingPlanning?.departmentId;
        this.status = recruitingPlanning?.status;
        this.createUser = recruitingPlanning?.createUser;
        this.createDate = recruitingPlanning?.createDate;
        this.updateUser = recruitingPlanning?.updateUser;
        this.updateDate = recruitingPlanning?.updateDate;
    }

    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ name: "department_id" })
    departmentId!: number;
    // @ManyToOne(() => Department)
    // @JoinColumn({ name: "department_id", foreignKeyConstraintName: "id" })
    // department?: Department;

    @Column({ name: "post_title" })
    postTitle!: string;

    @Column({ name: "post_info" })
    postInfo!: string;

    @Column({ name: "education" })
    education?: number;

    @Column({ name: "experience" })
    experience?: string;

    @Column({ name: "salaries_range" })
    salariesRange?: string;

    @Column({ name: "technology" })
    technology?: string;

    /**
     * 草稿/审核中/待招聘/招聘中/已关闭
     */
    @Column({ name: "status" })
    status!: string;

    @Column({ name: "reason" })
    reason?: string;

    @Column({ name: "recruiting_num" })
    recruitingNum?: number;

    // @Column({ name: "hr_attache_id" })
    // hrAttacheId?: number;
    @ManyToOne(() => EmployeeFiles)
    @JoinColumn({ name: "hr_attache_id", foreignKeyConstraintName: "id" })
    hrAttache?: EmployeeFiles;

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
