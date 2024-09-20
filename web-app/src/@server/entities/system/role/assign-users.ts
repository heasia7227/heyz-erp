import "reflect-metadata";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { EmployeeFiles } from "../../hr/employee-files";

@Entity("t_sys_role_user")
export class AssignUsers extends BaseEntity {
    constructor(assiginUsers?: any) {
        super();
        this.id = assiginUsers?.id;
        this.roleId = assiginUsers?.roleId;
        this.userId = assiginUsers?.userId;
        this.createUser = assiginUsers?.createUser;
        this.createDate = assiginUsers?.createDate;
    }
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ name: "role_id" })
    roleId!: number;

    @Column({ name: "user_id" })
    userId!: number;

    @ManyToOne(() => EmployeeFiles)
    @JoinColumn({ name: "create_by", foreignKeyConstraintName: "id" })
    createUser?: EmployeeFiles;

    @Column({ name: "create_date" })
    createDate!: string;
}
