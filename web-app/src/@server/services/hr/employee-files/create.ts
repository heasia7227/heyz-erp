import { getDataSource } from "@/@server/datasource";
import { EmployeeFiles } from "@/@server/entities/hr/employee-files";
import { getBirthdayByIdCard, getGenderByIdCard } from "@/utils/id-card";
import dayjs from "dayjs";

const create = async (params?: any): Promise<any> => {
    const appDataSource = await getDataSource();

    params.birthday = getBirthdayByIdCard(params.idCard);
    params.gender = getGenderByIdCard(params.idCard);
    params.createDate = dayjs().format("YYYY-MM-DD HH:mm:ss");
    params.createUser = await appDataSource.getRepository(EmployeeFiles).findOne({ where: { id: params.createBy } });

    const result = await appDataSource.getRepository(EmployeeFiles).save(new EmployeeFiles(params));
    return result;
};

export default create;
