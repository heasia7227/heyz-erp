import { Tabs } from "antd";

const OfficialDocument = () => {
    return (
        <>
            <Tabs
                size="small"
                defaultActiveKey="1"
                items={[
                    {
                        label: "我发出的",
                        key: "1",
                        children: "我发出的（上级向下级发出）",
                    },
                    {
                        label: "我收到的",
                        key: "2",
                        children: "我收到的（上级给我发的）",
                    },
                ]}
            />
        </>
    );
};

export default OfficialDocument;
