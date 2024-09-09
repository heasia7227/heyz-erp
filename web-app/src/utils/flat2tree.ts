export interface IDataExplain {
    parentKeyColumnName: string;
    keyColumnName: string;
    titleColumnName: string;
}

export default function flat2tree(data: Array<any>, dataExplain: IDataExplain) {
    const tree: Array<any> = [];

    const transposeData = (tree: Array<any>, data: Array<any>, dataExplain: IDataExplain) => {
        if (data && data.length > 0) {
            data.forEach((item) => {
                item.key = item[dataExplain.keyColumnName];
                item.value = item[dataExplain.keyColumnName];
                item.title = item[dataExplain.titleColumnName];
                item.label = item[dataExplain.titleColumnName];
                item.originTitle = item[dataExplain.titleColumnName];
                const firstData = getFirstData(item[dataExplain.parentKeyColumnName], data, dataExplain, item);
                const index = tree.findIndex((item) => item.key === firstData.key);
                if (index < 0) tree.push(firstData);
            });

            getChildrenData(tree, data, dataExplain);
        }
    };

    const getFirstData = (parentKey: any, data: Array<any>, dataExplain: IDataExplain, currentItem: any): any => {
        const parent = data.find(
            (item) =>
                item[dataExplain.keyColumnName] === parentKey &&
                item[dataExplain.keyColumnName] !== currentItem[dataExplain.keyColumnName]
        );

        if (parent) {
            return getFirstData(parent[dataExplain.parentKeyColumnName], data, dataExplain, parent);
        } else {
            return currentItem;
        }
    };

    const getChildrenData = (tree: Array<any>, data: Array<any>, dataExplain: IDataExplain) => {
        tree.forEach((node) => {
            const children = data.filter(
                (item) =>
                    item[dataExplain.parentKeyColumnName] === node.key && item[dataExplain.keyColumnName] !== node.key
            );
            if (children && children.length > 0) {
                node.children = children;
                getChildrenData(node.children, data, dataExplain);
            }
        });
    };

    transposeData(tree, data, dataExplain);

    return tree;
}
