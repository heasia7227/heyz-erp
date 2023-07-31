import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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
}
