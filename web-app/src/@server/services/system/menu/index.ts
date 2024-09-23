import { getDataSource } from "@/@server/datasource";
import { IMenu } from "@/interfaces/system/menu";

export const getMenus = async (): Promise<IMenu> => {
    const appDataSource = await getDataSource();
    const menus = await appDataSource.manager.query(`
                    SELECT
                        t1.id,
                        t1.title,
                        t1.icon,
                        t1.parent_id parentId,
                        t1.path,
                        t1.ranking,
                        t1.status,
                        t2.name createUserName,
                        t1.create_by createBy,
                        t1.create_date createDate,
                        t3.name updateUserName,
                        t1.update_by updateBy,
                        t1.update_date updateDate
                    FROM
                        t_sys_menus t1
                        LEFT JOIN t_hr_employee_files t2 ON t1.create_by = t2.id
                        LEFT JOIN t_hr_employee_files t3 on t1.update_by = t3.id
                    ORDER BY t1.parent_id, t1.ranking
                `);
    return menus;
};
