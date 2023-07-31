import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { Material } from "../material/material";
import { Warehouse } from "../warehouse/warehouse";
import { Supplier } from "../supplier/supplier";

@Entity({ name: "t_inventory" })
export class Inventory {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @OneToOne(() => Material)
    @JoinColumn({ name: "material_id" })
    material: Material;

    @ManyToOne(() => Warehouse)
    @JoinColumn({ name: "warehouse_id" })
    warehouse: Warehouse;

    @ManyToOne(() => Supplier)
    @JoinColumn({ name: "supplier_id" })
    supplier: Supplier;

    @Column({ name: "material_count" })
    materialCount: number;
}
