import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import styled from "styled-components";

interface IProps {
    breadcrumbs?: Array<string | React.ReactNode>;
    children?: React.ReactNode;
}

const PageCard = ({ breadcrumbs, children }: IProps) => {
    return (
        <>
            {breadcrumbs && (
                <Breadcrumb
                    style={{ marginBottom: "8px" }}
                    items={[
                        {
                            title: <HomeOutlined />,
                        },
                        ...breadcrumbs.map((breadcrumb) => {
                            return { title: breadcrumb };
                        }),
                    ]}
                />
            )}
            <Card style={{ height: breadcrumbs ? "calc(100% - 36px)" : "100%" }}>{children}</Card>
        </>
    );
};

export default PageCard;

const Card = styled.div`
    background-color: #ffffff;
    padding: 16px;
    border-radius: 4px;
    overflow: auto;
`;
