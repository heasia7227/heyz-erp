import { getDataSource } from "@/@server/datasource";
import { Department } from "@/@server/entities/department";
import flat2tree from "@/utils/flat2tree";

const trees = async (params?: any): Promise<any> => {
    const appDataSource = await getDataSource();
    const departments = await appDataSource.getRepository(Department).find();
    const trees = flat2tree(departments, {
        parentKeyColumnName: "parentId",
        keyColumnName: "id",
        titleColumnName: "title",
    });
    return trees;
};

export default trees;
