import { Tabs } from "antd";

const Recruiting = () => {
    return (
        <>
            <Tabs
                size="small"
                defaultActiveKey="1"
                items={[
                    {
                        label: "招聘计划指定",
                        key: "1",
                        children: "招聘计划指定",
                    },
                    {
                        label: "简历筛选",
                        key: "2",
                        children: "简历筛选",
                    },
                    {
                        label: "面试安排",
                        key: "3",
                        children: "面试安排",
                    },
                    {
                        label: "录用决策",
                        key: "4",
                        children: "录用决策",
                    },
                ]}
            />
        </>
    );
};

export default Recruiting;
