import dayjs from "dayjs";
import { getDataSource } from "@/@server/datasource";
import { EmployeeFiles } from "@/@server/entities/hr/employee-files";
import { ConfigureMenus } from "@/@server/entities/system/role/configure-menus";
import { ISaveConfigureMenuParams } from "@/interfaces/system/role/configure-menus";

export const saveConfigureMenus = async (params: ISaveConfigureMenuParams): Promise<any> => {
    const appDataSource = await getDataSource();

    const createDate = dayjs().format("YYYY-MM-DD HH:mm:ss");
    const createUser = await appDataSource.getRepository(EmployeeFiles).findOne({ where: { id: params.createBy } });

    const _configureMenus = new Array<ConfigureMenus>();
    params?.menuIds.forEach((menuId) => {
        const configureMenu = new ConfigureMenus({
            roleId: params?.roleId,
            menuId,
            createUser,
            createDate,
        });
        _configureMenus.push(configureMenu);
    });

    try {
        await appDataSource.manager.transaction(async (transactionalEntityManager) => {
            await transactionalEntityManager.delete(ConfigureMenus, { roleId: params?.roleId });
            await transactionalEntityManager.save<ConfigureMenus>(_configureMenus);
        });
        return true;
    } catch (error) {
        return false;
    }
};

/**
 * 查询已配置菜单
 * @param roleId
 * @returns
 */
export const getConfigureMenus = async (roleId: number): Promise<any> => {
    const appDataSource = await getDataSource();
    const menuIds = await appDataSource.getRepository(ConfigureMenus).find({
        select: { menuId: true },
        where: { roleId },
    });
    return menuIds?.map((menu) => menu.menuId);
};
