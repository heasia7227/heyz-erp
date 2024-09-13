import { getDataSource } from "@/@server/datasource";
import { Department } from "@/@server/entities/system/department";

const create = async (params?: any): Promise<any> => {
    const appDataSource = await getDataSource();
    const result = await appDataSource.getRepository(Department).save(new Department(params));
    return result;
};

export default create;
