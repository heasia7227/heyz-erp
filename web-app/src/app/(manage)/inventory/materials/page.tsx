import { Tabs } from "antd";

const Materials = () => {
    return (
        <>
            <Tabs
                size="small"
                defaultActiveKey="1"
                items={[
                    {
                        label: "物资分类",
                        key: "1",
                        children: "物资分类",
                    },
                    {
                        label: "物资",
                        key: "2",
                        children: "物资",
                    },
                ]}
            />
        </>
    );
};

export default Materials;
