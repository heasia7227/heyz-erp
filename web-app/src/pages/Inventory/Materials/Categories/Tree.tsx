import { useEffect, useState } from "react";
import styled from "styled-components";
import { Col, Tree } from "antd";
import { DataNode } from "antd/es/tree";
import { DirectoryTreeProps } from "antd/es/tree/DirectoryTree";
import { materialsService } from "@/services/inventory/materialsService";

const { DirectoryTree } = Tree;

const CategoriesTree = () => {
    const [treeData, setTreeData] = useState<DataNode[]>([]);

    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = async () => {
        const result = await materialsService.getCategories();
        setTreeData(result);
    };

    const onSelect: DirectoryTreeProps["onSelect"] = (keys, info) => {
        console.log("Trigger Select", keys, info);
    };

    const onExpand: DirectoryTreeProps["onExpand"] = (keys, info) => {
        console.log("Trigger Expand", keys, info);
    };

    return (
        <>
            {treeData?.length > 0 && (
                <DirectoryTree
                    defaultExpandAll
                    showIcon={false}
                    onSelect={onSelect}
                    onExpand={onExpand}
                    treeData={treeData}
                />
            )}
        </>
    );
};

export default CategoriesTree;

export const ColumnCategories = styled(Col)`
    width: 280px;
    border: 1px solid #eeeeee;
    overflow-y: auto;
    height: 100%;
    padding: 8px;
    &::-webkit-scrollbar {
        display: none;
    }
`;
