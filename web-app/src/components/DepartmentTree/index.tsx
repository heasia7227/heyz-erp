import { useEffect, useState } from "react";
import { TreeSelect, TreeSelectProps } from "antd";
import httpFetch from "@/utils/http-fetch";

const DepartmentTree = (props: TreeSelectProps) => {
    const [departmentTrees, setDepartmentTress] = useState<any>();

    useEffect(() => {
        getDepartments();
    }, []);

    const getDepartments = async () => {
        const result = await httpFetch("/system/departments/trees");
        setDepartmentTress(result);
    };

    return (
        <>
            <TreeSelect
                style={{ width: "180px" }}
                dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
                placeholder="请选择部门"
                allowClear
                treeDefaultExpandAll
                treeData={departmentTrees}
                {...props}
            />
        </>
    );
};

export default DepartmentTree;
