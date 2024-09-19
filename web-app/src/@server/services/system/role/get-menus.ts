import { getDataSource } from "@/@server/datasource";
import { ConfigureMenus } from "@/@server/entities/system/role/configure-menus";

const getMenus = async (roleId: number): Promise<any> => {
    const appDataSource = await getDataSource();
    const menuIds = await appDataSource.getRepository(ConfigureMenus).find({
        select: { menuId: true },
        where: { roleId },
    });
    return menuIds?.map((menu) => menu.menuId);
};

export default getMenus;
