import dayjs from "dayjs";
import { getDataSource } from "@/@server/datasource";
import { EmployeeFiles } from "@/@server/entities/hr/employee-files";
import { Department } from "@/@server/entities/system/department";
import { IKeyword } from "@/interfaces";
import flat2tree from "@/utils/flat2tree";

/**
 * 部门树
 * @param params
 * @returns
 */
export const getDempartmentTrees = async (params?: IKeyword): Promise<any> => {
    const keyword = params?.keyword;

    const appDataSource = await getDataSource();
    let _sql = `
        SELECT
            t1.id,
            t1.title,
            t1.parent_id parentId,
            t1.description,
            t1.status,
            t2.name createUserName,
            t1.create_by createBy,
            t1.create_date createDate,
            t3.name updateUserName,
            t1.update_by updateBy,
            t1.update_date updateDate
        FROM
            t_sys_departments t1
            LEFT JOIN t_hr_employee_files t2 ON t1.create_by = t2.id
            LEFT JOIN t_hr_employee_files t3 ON t1.update_by = t3.id
        WHERE 1=1 
    `;
    const _params = [];

    if (keyword) {
        _sql = `${_sql} and t1.title like ? and t1.description like ?`;
        _params.push(`%${keyword}%`, `%${keyword}%`);
    }

    const departments = await appDataSource.manager.query(_sql, _params);

    const trees = flat2tree(departments, {
        parentKeyColumnName: "parentId",
        keyColumnName: "id",
        titleColumnName: "title",
    });
    return trees;
};

/**
 * 创建部门
 * @param params
 * @returns
 */
export const createDepartment = async (params?: any): Promise<any> => {
    const appDataSource = await getDataSource();

    params.createDate = dayjs().format("YYYY-MM-DD HH:mm:ss");
    params.createUser = await appDataSource.getRepository(EmployeeFiles).findOne({ where: { id: params.createBy } });

    const result = await appDataSource.getRepository(Department).save(new Department(params));
    return result;
};
