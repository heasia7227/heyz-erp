import { Tabs } from "antd";

const Training = () => {
    return (
        <>
            <Tabs
                size="small"
                defaultActiveKey="1"
                items={[
                    {
                        label: "培训需求分析",
                        key: "1",
                        children: "培训需求分析",
                    },
                    {
                        label: "课程设计",
                        key: "2",
                        children: "课程设计",
                    },
                    {
                        label: "培训实施",
                        key: "3",
                        children: "培训实施",
                    },
                    {
                        label: "效果评估",
                        key: "4",
                        children: "效果评估",
                    },
                ]}
            />
        </>
    );
};

export default Training;
