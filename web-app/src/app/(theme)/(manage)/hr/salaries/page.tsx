import { Tabs } from "antd";

const Salaries = () => {
    return (
        <>
            <Tabs
                size="small"
                defaultActiveKey="1"
                items={[
                    {
                        label: "薪资管理",
                        key: "1",
                        children: "薪资管理",
                    },
                    {
                        label: "福利管理",
                        key: "2",
                        children: "福利管理",
                    },
                ]}
            />
        </>
    );
};

export default Salaries;
