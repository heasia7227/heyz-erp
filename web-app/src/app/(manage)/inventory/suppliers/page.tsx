import { Tabs } from "antd";

const Suppliers = () => {
    return (
        <>
            <Tabs
                size="small"
                defaultActiveKey="1"
                items={[
                    {
                        label: "供应商档案",
                        key: "1",
                        children: "供应商档案",
                    },
                    {
                        label: "供应商评估",
                        key: "2",
                        children: "供应商评估",
                    },
                    {
                        label: "供应商合同管理",
                        key: "3",
                        children: "供应商合同管理",
                    },
                    {
                        label: "供应商付款",
                        key: "4",
                        children: "供应商付款",
                    },
                ]}
            />
        </>
    );
};

export default Suppliers;
