import { generateToken } from "@/utils/jwt";
import aes from "@/utils/aes";
import { getDataSource } from "@/@server/datasource";
import { User } from "@/@server/entities/system/user";

const login = async (params: any): Promise<any> => {
    params.password = aes.encrypt(params.password);

    const AppDataSource = await getDataSource();
    const userRepo = AppDataSource.getRepository(User);
    const user = await userRepo.findOne({
        select: ["id", "name", "departmentId"],
        where: [
            { phoneNumber: params.username, password: params.password, status: "enable" },
            { email: params.username, password: params.password, status: "enable" },
        ],
    });
    if (!user) {
        return null;
    }

    // TODO: 判断用户有没有可操作的菜单，如果没有不允许登录

    const token = generateToken({ ...user });
    return { token, user };
};

export default login;
