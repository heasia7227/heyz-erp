import "reflect-metadata";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { EmployeeFiles } from "../../hr/employee-files";

@Entity({ name: "t_sys_departments" })
export class Department extends BaseEntity {
    constructor(department?: any) {
        super();
        this.id = department?.id;
        this.title = department?.title;
        this.parentId = department?.parentId;
        this.description = department?.description;
        this.status = department?.status ? "enable" : "disable";
        this.createUser = department?.createUser;
        this.createDate = department?.createDate;
        this.updateUser = department?.updateUser;
        this.updateDate = department?.updateDate;
    }

    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ name: "title" })
    title!: string;

    @Column({ name: "parent_id" })
    parentId?: number;

    @Column({ name: "description" })
    description?: string;

    @Column({ name: "status" })
    status!: string;

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
