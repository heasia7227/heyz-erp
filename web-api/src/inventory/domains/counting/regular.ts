import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from "typeorm";
import { Warehouse } from "../warehouse/warehouse";

@Entity({ name: "t_inventory_counting_regular" })
export class CountingRegular {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ManyToOne(() => Warehouse)
    @JoinColumn({ name: "warehouse_id" })
    warehouse: Warehouse;

    @Column({ type: "date", name: "counting_date" })
    countingDate: string;

    @Column({ name: "counting_responsible_person" })
    countingResponsiblePerson: string;

    @Column({ name: "scene_responsible_person" })
    sceneResponsiblePerson: string;

    @Column()
    status: string;
}
