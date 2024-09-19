import { getDataSource } from "@/@server/datasource";
import { EmployeeFiles } from "@/@server/entities/hr/employee-files";
import { Role } from "@/@server/entities/system/role";
import dayjs from "dayjs";

const create = async (params?: any): Promise<any> => {
    const appDataSource = await getDataSource();

    params.createDate = dayjs().format("YYYY-MM-DD HH:mm:ss");
    params.createUser = await appDataSource.getRepository(EmployeeFiles).findOne({ where: { id: params.createBy } });

    const result = await appDataSource.getRepository(Role).save(new Role(params));
    return result;
};

export default create;
