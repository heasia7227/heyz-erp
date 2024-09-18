import "reflect-metadata";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Department } from "../../system/department";

@Entity({ name: "t_hr_employee_files" })
export class EmployeeFiles extends BaseEntity {
    constructor(employeeFiles?: any) {
        super();
        this.id = employeeFiles?.id;
        this.name = employeeFiles?.name;
        this.gender = employeeFiles?.gender;
        this.birthday = employeeFiles?.birthday;
        this.idCard = employeeFiles?.idCard;
        this.phoneNumber = employeeFiles?.phoneNumber;
        this.email = employeeFiles?.email;
        this.education = employeeFiles?.education;
        this.salary = employeeFiles?.salary;
        // this.department = employeeFiles?.department;
        this.departmentId = employeeFiles?.departmentId;
        this.status = employeeFiles?.status ? "enable" : "disable";
        this.createUser = employeeFiles?.createUser;
        this.createDate = employeeFiles?.createDate;
        this.updateUser = employeeFiles?.updateUser;
        this.updateDate = employeeFiles?.updateDate;
    }

    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ name: "name" })
    name!: string;

    @Column({ name: "gender" })
    gender?: string;

    @Column({ name: "birthday" })
    birthday?: string;

    @Column({ name: "id_card" })
    idCard?: string;

    @Column({ name: "phone_number" })
    phoneNumber!: string;

    @Column({ name: "email" })
    email!: string;

    @Column({ name: "education" })
    education?: string;

    @Column({ name: "salary" })
    salary?: number;

    @Column({ name: "department_id" })
    departmentId!: number;

    // @ManyToOne(() => Department)
    // @JoinColumn({ name: "department_id", foreignKeyConstraintName: "id" })
    // department?: Department;

    @Column({ name: "status" })
    status!: string;
    // `resume_id` int(0) NULL DEFAULT NULL COMMENT '简历编号',

    @ManyToOne(() => EmployeeFiles)
    @JoinColumn({ name: "create_by", foreignKeyConstraintName: "id" })
    createUser?: EmployeeFiles;

    @Column({ name: "create_date" })
    createDate!: string;

    @ManyToOne(() => EmployeeFiles)
    @JoinColumn({ name: "update_by", foreignKeyConstraintName: "id" })
    updateUser?: EmployeeFiles;

    @Column({ name: "update_date" })
    updateDate!: string;
}
