import { getDataSource } from "@/@server/datasource";
import { IKeyword } from "@/interfaces";
import flat2tree from "@/utils/flat2tree";

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
