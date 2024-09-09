import "reflect-metadata";
import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../user";

@Entity({ name: "t_sys_departments" })
export class Department extends BaseEntity {
    constructor(department?: any) {
        super();
        this.id = department?.id;
        this.title = department?.title;
        this.parentId = department?.parentId;
        this.description = department?.description;
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

    @OneToOne(() => User)
    @JoinColumn({ name: "create_by", foreignKeyConstraintName: "id" })
    createUser?: User;

    @Column({ name: "create_date" })
    createDate!: string;

    @OneToOne(() => User)
    @JoinColumn({ name: "update_by", foreignKeyConstraintName: "id" })
    updateUser?: User;

    @Column({ name: "update_date" })
    updateDate!: string;
}
