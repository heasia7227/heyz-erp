import { Tabs } from "antd";

const Salaries = () => {
    return (
        <>
            <Tabs
                size="small"
                defaultActiveKey="1"
                items={[
                    {
                        label: "工资计算",
                        key: "1",
                        children: "工资计算",
                    },
                    {
                        label: "福利发放",
                        key: "2",
                        children: "福利发放",
                    },
                ]}
            />
        </>
    );
};

export default Salaries;
