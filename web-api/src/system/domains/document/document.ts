import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "t_document" })
export class Document {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ name: "original_name" })
    originalName: string;

    @Column({ name: "store_name" })
    storeName: string;

    @Column({ name: "mime_type" })
    mimetype: string;

    @Column()
    destination: string;

    @Column()
    size: number;

    @Column({ name: "module_name" })
    moduleName: string;

    //TODO Department Table
    @Column({ name: "create_department_id" })
    createDepartment: string;

    //TODO User Table
    @Column({ name: "create_user_id" })
    createUser: string;

    @Column({ name: "create_date_time" })
    createDateTime: string;
}
