import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { MaterialCategory } from "./category";

@Entity({ name: "t_inventory_material" })
export class Material {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    code: string;

    @Column()
    name: string;

    @ManyToOne(() => MaterialCategory)
    @JoinColumn({ name: "category_id" })
    category: MaterialCategory;

    //TODO Department Table
    @Column()
    department: string;

    @Column({ name: "regular_maintenance_frequency" })
    regularMaintenanceFrequency: string;

    @Column({ default: "Enable" })
    status: string;
}
