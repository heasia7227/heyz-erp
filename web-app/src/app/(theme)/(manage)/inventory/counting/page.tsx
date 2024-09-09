import { Tabs } from "antd";

const Counting = () => {
    return (
        <>
            <Tabs
                size="small"
                defaultActiveKey="1"
                items={[
                    {
                        label: "定期盘点",
                        key: "1",
                        children: "定期盘点",
                    },
                    {
                        label: "临时盘点",
                        key: "2",
                        children: "临时盘点",
                    },
                ]}
            />
        </>
    );
};

export default Counting;
