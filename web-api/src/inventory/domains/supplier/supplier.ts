import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "t_supplier" })
export class Supplier {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    title: string;

    @Column({ name: "responsible_person" })
    responsiblePerson: string;

    @Column()
    gender: string;

    @Column({ name: "contact_number" })
    contactNumber: string;

    @Column()
    address: string;

    @Column()
    remarks: string;

    @Column({ name: "web_url" })
    webUrl: string;

    @Column({ type: "datetime", name: "create_date_time", default: () => "CURRENT_TIMESTAMP" })
    createDateTime: string;
}
