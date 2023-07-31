import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "t_supplier_evaluation" })
export class SupplierEvaluation {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    notes: string;

    @Column()
    score: number;
}
