import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "t_category" })
export class Category {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    code: string;

    @Column()
    title: string;

    @Column({ name: "parent_id" })
    parentId: string;

    @Column({ default: "Enable" })
    status: string;
}
