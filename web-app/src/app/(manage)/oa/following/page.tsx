import { Tabs } from "antd";

const Following = () => {
    return (
        <>
            <Tabs
                size="small"
                defaultActiveKey="1"
                items={[
                    {
                        label: "流程模板",
                        key: "1",
                        children: "流程模板（仅管理员可以操作）",
                    },
                    {
                        label: "我发起的",
                        key: "2",
                        children: "我发起的",
                    },
                    {
                        label: "待审批的",
                        key: "3",
                        children: "待审批的（仅领导可以操作）",
                    },
                    {
                        label: "已审批的",
                        key: "4",
                        children: "已审批的（仅领导可以操作）",
                    },
                ]}
            />
        </>
    );
};

export default Following;
