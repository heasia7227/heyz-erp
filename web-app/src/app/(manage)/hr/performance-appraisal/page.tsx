import { Tabs } from "antd";

const PerformanceAppraisal = () => {
    return (
        <>
            <Tabs
                size="small"
                defaultActiveKey="1"
                items={[
                    {
                        label: "目标设定",
                        key: "1",
                        children: "目标设定",
                    },
                    {
                        label: "过程监控",
                        key: "2",
                        children: "过程监控",
                    },
                    {
                        label: "成绩评定",
                        key: "3",
                        children: "成绩评定",
                    },
                ]}
            />
        </>
    );
};

export default PerformanceAppraisal;
