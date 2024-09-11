import "reflect-metadata";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "../user";

@Entity({ name: "t_sys_menus" })
export class Menu extends BaseEntity {
    constructor(menu?: any) {
        super();
        this.id = menu?.id;
        this.title = menu?.title;
        this.icon = menu?.icon;
        this.parentId = menu?.parentId;
        this.path = menu?.path;
        this.ranking = menu?.ranking;
        this.status = menu?.status;
        this.createUser = menu?.createUser;
        this.createDate = menu?.createDate;
        this.updateUser = menu?.updateUser;
        this.updateDate = menu?.updateDate;
    }

    @PrimaryColumn()
    id?: string;

    @Column({ name: "title" })
    title!: string;

    @Column({ name: "icon" })
    icon?: string;

    @Column({ name: "parent_id" })
    parentId?: string;

    @Column({ name: "path" })
    path?: string;

    @Column({ name: "ranking" })
    ranking?: number;

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
