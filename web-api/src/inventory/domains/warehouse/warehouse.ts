import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "t_inventory_warehouse" })
export class Warehouse {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    title: string;

    //TODO Department Table
    @Column()
    department: string;

    @Column()
    address: string;

    @Column()
    position: string;

    @Column()
    level: string;

    @Column()
    administrator: string;

    @Column({ name: "contact_number" })
    contactNumber: string;
}
