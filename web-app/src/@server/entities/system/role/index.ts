import "reflect-metadata";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../user";

@Entity({ name: "t_sys_roles" })
export class Role extends BaseEntity {
    constructor(role?: any) {
        super();
        this.id = role?.id;
        this.title = role?.title;
        this.description = role?.description;
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
