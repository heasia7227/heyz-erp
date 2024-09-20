import dayjs from "dayjs";
import { getDataSource } from "@/@server/datasource";
import { EmployeeFiles } from "@/@server/entities/hr/employee-files";
import { AssignUsers } from "@/@server/entities/system/role/assign-users";

const assignUsers = async (params?: any): Promise<any> => {
    const appDataSource = await getDataSource();

    const createDate = dayjs().format("YYYY-MM-DD HH:mm:ss");
    const createUser = await appDataSource.getRepository(EmployeeFiles).findOne({ where: { id: params.createBy } });

    const _assignUsers = new Array<AssignUsers>();
    params?.userIds.forEach((userId: string) => {
        const _assignUser = new AssignUsers({
            roleId: params?.roleId,
            userId,
            createUser,
            createDate,
        });
        _assignUsers.push(_assignUser);
    });

    try {
        await appDataSource.manager.transaction(async (transactionalEntityManager) => {
            await transactionalEntityManager.save<AssignUsers>(_assignUsers);
        });
        return true;
    } catch (error) {
        return false;
    }
};

export default assignUsers;
