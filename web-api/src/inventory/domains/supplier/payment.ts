import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Supplier } from "./supplier";

@Entity({ name: "t_supplier_payment" })
export class SupplierPayment {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    notes: string;

    @Column({ name: "paid_amount" })
    paidAmount: number;

    @Column()
    attachment: string;

    @ManyToOne(() => Supplier)
    @JoinColumn({ name: "supplier_id" })
    supplier: Supplier;
}
