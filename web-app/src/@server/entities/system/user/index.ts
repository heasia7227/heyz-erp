import "reflect-metadata";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, JoinColumn, ManyToOne } from "typeorm";
import { EmployeeFiles } from "../../hr/employee-files";

@Entity({ name: "t_sys_users" })
export class User extends BaseEntity {
    constructor(user?: any) {
        super();
        this.id = user?.id;
        this.employeeId = user?.employeeId;
        this.account = user?.account;
        this.password = user?.password;
        this.createUser = user?.createUser;
        this.createDate = user?.createDate;
        this.updateUser = user?.updateUser;
        this.updateDate = user?.updateDate;
    }

    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ name: "employee_id" })
    employeeId?: number;

    @Column({ name: "account" })
    account!: string;

    @Column({ name: "password" })
    password!: string;

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
