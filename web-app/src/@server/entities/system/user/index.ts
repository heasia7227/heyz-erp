import "reflect-metadata";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, JoinColumn, ManyToOne } from "typeorm";

@Entity({ name: "t_sys_users" })
export class User extends BaseEntity {
    constructor(user?: any) {
        super();
        this.id = user?.id;
        this.name = user?.name;
        this.departmentId = user?.departmentId;
        this.birthday = user?.birthday;
        this.gender = user?.gender;
        this.phoneNumber = user?.phoneNumber;
        this.email = user?.email;
        this.status = user?.status;
        this.createUser = user?.createUser;
        this.createDate = user?.createDate;
        this.updateUser = user?.updateUser;
        this.updateDate = user?.updateDate;
    }

    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ name: "name" })
    name!: string;

    @Column({ name: "department_id" })
    departmentId?: number;

    @Column({ name: "birthday" })
    birthday?: string;

    @Column({ name: "gender" })
    gender?: string;

    @Column({ name: "phone_number" })
    phoneNumber!: string;

    @Column({ name: "password" })
    password!: string;

    @Column({ name: "email" })
    email!: string;

    @Column({ name: "status" })
    status!: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: "create_by", foreignKeyConstraintName: "id" })
    createUser?: User;

    @Column({ name: "create_date" })
    createDate!: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: "update_by", foreignKeyConstraintName: "id" })
    updateUser?: User;

    @Column({ name: "update_date" })
    updateDate!: string;
}
