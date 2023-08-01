import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Supplier } from "./supplier";

@Entity({ name: "t_supplier_evaluation" })
export class SupplierEvaluation {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    notes: string;

    @Column()
    score: number;

    @ManyToOne(() => Supplier)
    @JoinColumn({ name: "supplier_id" })
    supplier: Supplier;
}
