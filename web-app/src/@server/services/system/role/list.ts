import { getDataSource } from "@/@server/datasource";
import { Role } from "@/@server/entities/system/role";

const list = async (params?: any): Promise<any> => {
    const appDataSource = await getDataSource();
    const roles = await appDataSource.getRepository(Role).find({
        relations: {
            createUser: true,
            updateUser: true,
        },
    });
    return roles;
};

export default list;
