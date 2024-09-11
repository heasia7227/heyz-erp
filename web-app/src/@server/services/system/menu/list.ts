import { getDataSource } from "@/@server/datasource";
import { Menu } from "@/@server/entities/system/menu";

const list = async (params?: any): Promise<any> => {
    const appDataSource = await getDataSource();
    const menus = await appDataSource.getRepository(Menu).find({
        relations: {
            createUser: true,
            updateUser: true,
        },
        order: {
            parentId: "ASC",
            ranking: "ASC",
        },
    });
    return menus;
};

export default list;
