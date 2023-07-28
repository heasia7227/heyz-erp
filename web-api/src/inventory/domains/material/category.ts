import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    code: string;

    @Column()
    title: string;

    @Column({ name: "parent_id" })
    parentId: string;
}
