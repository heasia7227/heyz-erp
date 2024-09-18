import { Tabs } from "antd";
import Planning from "@/views/hr/recruiting/planning";
import Resume from "@/views/hr/recruiting/resume";
import Interview from "@/views/hr/recruiting/interview";
import Decision from "@/views/hr/recruiting/decision";
import PlanningAuditing from "@/views/hr/recruiting/planning-auditing";
import DecisionAuditing from "@/views/hr/recruiting/decision-auditing";

const Recruiting = () => {
    return (
        <>
            <Tabs
                size="small"
                defaultActiveKey="1"
                items={[
                    {
                        label: "招聘计划制定",
                        key: "1",
                        children: <Planning />,
                    },
                    {
                        label: "招聘计划审批",
                        key: "2",
                        children: <PlanningAuditing />,
                    },
                    {
                        label: "简历筛选",
                        key: "3",
                        children: <Resume />,
                    },
                    {
                        label: "面试安排",
                        key: "4",
                        children: <Interview />,
                    },
                    {
                        label: "录用决策",
                        key: "5",
                        children: <Decision />,
                    },
                    {
                        label: "录用审批",
                        key: "6",
                        children: <DecisionAuditing />,
                    },
                ]}
            />
        </>
    );
};

export default Recruiting;
