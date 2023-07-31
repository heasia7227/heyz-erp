import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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
}
