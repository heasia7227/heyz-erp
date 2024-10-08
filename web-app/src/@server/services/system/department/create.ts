import { getDataSource } from "@/@server/datasource";
import { EmployeeFiles } from "@/@server/entities/hr/employee-files";
import { Department } from "@/@server/entities/system/department";
import dayjs from "dayjs";

const create = async (params?: any): Promise<any> => {
    const appDataSource = await getDataSource();

    params.createDate = dayjs().format("YYYY-MM-DD HH:mm:ss");
    params.createUser = await appDataSource.getRepository(EmployeeFiles).findOne({ where: { id: params.createBy } });

    const result = await appDataSource.getRepository(Department).save(new Department(params));
    return result;
};

export default create;
