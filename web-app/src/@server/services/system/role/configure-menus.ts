import { getDataSource } from "@/@server/datasource";
import { EmployeeFiles } from "@/@server/entities/hr/employee-files";
import { ConfigureMenus } from "@/@server/entities/system/role/configure-menus";
import dayjs from "dayjs";

const configureMenus = async (params?: any): Promise<any> => {
    const appDataSource = await getDataSource();

    const createDate = dayjs().format("YYYY-MM-DD HH:mm:ss");
    const createUser = await appDataSource.getRepository(EmployeeFiles).findOne({ where: { id: params.createBy } });

    const configureMenus = new Array<ConfigureMenus>();
    params?.menuIds.forEach((menuId: string) => {
        const configureMenu = new ConfigureMenus({
            roleId: params?.roleId,
            menuId,
            createUser,
            createDate,
        });
        configureMenus.push(configureMenu);
    });

    try {
        await appDataSource.manager.transaction(async (transactionalEntityManager) => {
            await transactionalEntityManager.delete(ConfigureMenus, { roleId: params?.roleId });
            await transactionalEntityManager.save<ConfigureMenus>(configureMenus);
        });
        return true;
    } catch (error) {
        return false;
    }
};

export default configureMenus;
