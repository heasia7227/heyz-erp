import { getDataSource } from "@/@server/datasource";
import { Department } from "@/@server/entities/system/department";
import flat2tree from "@/utils/flat2tree";
import { Like } from "typeorm";

const trees = async (params?: any): Promise<any> => {
    const keyword = params?.keyword;
    const wheres = keyword ? [{ title: Like(`%${keyword}%`) }, { description: Like(`%${keyword}%`) }] : [];

    const appDataSource = await getDataSource();
    const departments = await appDataSource.getRepository(Department).find({
        where: wheres,
        relations: {
            createUser: true,
            updateUser: true,
        },
    });
    const trees = flat2tree(departments, {
        parentKeyColumnName: "parentId",
        keyColumnName: "id",
        titleColumnName: "title",
    });
    return trees;
};

export default trees;
