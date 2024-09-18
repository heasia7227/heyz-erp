import { getDataSource } from "@/@server/datasource";
import { EmployeeFiles } from "@/@server/entities/hr/employee-files";
import { User } from "@/@server/entities/system/user";
import dayjs from "dayjs";

const create = async (params?: any): Promise<any> => {
    const appDataSource = await getDataSource();
    const userRepository = appDataSource.getRepository(User);

    const users = await userRepository.find({ where: { account: params.account } });
    if (users?.length > 0) {
        return { error: true, message: `【${params.account}】账号已存在` };
    }

    params.createDate = dayjs().format("YYYY-MM-DD HH:mm:ss");
    params.createUser = await appDataSource.getRepository(EmployeeFiles).findOne({ where: { id: params.createBy } });

    const result = await userRepository.save(new User(params));
    return result;
};

export default create;
