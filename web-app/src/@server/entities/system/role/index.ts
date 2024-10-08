import "reflect-metadata";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { EmployeeFiles } from "../../hr/employee-files";

@Entity({ name: "t_sys_roles" })
export class Role extends BaseEntity {
    constructor(role?: any) {
        super();
        this.id = role?.id;
        this.title = role?.title;
        this.description = role?.description;
        this.status = role?.status ? "enable" : "disable";
        this.createUser = role?.createUser;
        this.createDate = role?.createDate;
        this.updateUser = role?.updateUser;
        this.updateDate = role?.updateDate;
    }

    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ name: "title" })
    title!: string;

    @Column({ name: "description" })
    description?: string;

    @Column({ name: "status" })
    status!: string;

    @ManyToOne(() => EmployeeFiles)
    @JoinColumn({ name: "create_by", foreignKeyConstraintName: "id" })
    createUser?: EmployeeFiles;

    @Column({ name: "create_date" })
    createDate?: string;

    @ManyToOne(() => EmployeeFiles)
    @JoinColumn({ name: "update_by", foreignKeyConstraintName: "id" })
    updateUser?: EmployeeFiles;

    @Column({ name: "update_date" })
    updateDate?: string;
}
