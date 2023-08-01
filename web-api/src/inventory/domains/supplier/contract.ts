import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Supplier } from "./supplier";

@Entity({ name: "t_supplier_contract" })
export class SupplierContract {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    title: string;

    @Column({ name: "total_price" })
    totalPrice: number;

    @Column()
    attachment: string;

    @ManyToOne(() => Supplier)
    @JoinColumn({ name: "supplier_id" })
    supplier: Supplier;
}
