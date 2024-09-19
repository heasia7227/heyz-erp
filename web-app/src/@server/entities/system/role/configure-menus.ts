import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { EmployeeFiles } from "../../hr/employee-files";

@Entity("t_sys_role_menu")
export class ConfigureMenus extends BaseEntity {
    constructor(configureMenus?: any) {
        super();
        this.id = configureMenus?.id;
        this.roleId = configureMenus?.roleId;
        this.menuId = configureMenus?.menuId;
        this.createUser = configureMenus?.createUser;
        this.createDate = configureMenus?.createDate;
    }
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ name: "role_id" })
    roleId!: number;

    @Column({ name: "menu_id" })
    menuId!: string;

    @ManyToOne(() => EmployeeFiles)
    @JoinColumn({ name: "create_by", foreignKeyConstraintName: "id" })
    createUser?: EmployeeFiles;

    @Column({ name: "create_date" })
    createDate!: string;
}
