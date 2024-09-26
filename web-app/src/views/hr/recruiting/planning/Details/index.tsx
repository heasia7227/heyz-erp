"use client";

import { useState } from "react";
import { Button, Modal, Steps, Timeline } from "antd";
import dayjs from "dayjs";
import { IRecruitingPlanning } from "@/interfaces/hr/recruiting/planning";
import { IRecruitingPlanningAuditing } from "@/interfaces/hr/recruiting/planning/auditing";
import httpFetch from "@/utils/http-fetch";
import AuditingConfig from "../AuditingConfig";

interface IProps {
    planning: IRecruitingPlanning;
}

const Details = ({ planning }: IProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [stepItems, setStepItems] = useState<any[]>([]);
    const [stepNum, setStepNum] = useState<number>(0);
    const [logs, setLogs] = useState<any[]>([]);

    const showModal = () => {
        setIsModalOpen(true);

        getSteps();
    };

    const getSteps = async () => {
        setLoading(true);

        let _stepNum = 0;
        let _hrAttacheDate = "";
        const _stepItems: any[] = [{ title: "草稿" }];
        const _logs: any[] = [
            {
                color: "#1677ff",
                children: (
                    <>
                        <p>
                            创建计划<span className="text-gray-300">（{planning?.createUserName}）</span>
                        </p>
                        <p>{planning?.createDate ? dayjs(planning?.createDate).format("YYYY-MM-DD HH:mm:ss") : "-"}</p>
                    </>
                ),
            },
        ];

        if (planning?.status === "draft") {
            _stepItems.push({
                title: "审批",
                subTitle: "(未指定)",
                description: (
                    <AuditingConfig
                        planning={planning}
                        button={<Button size="small">配置</Button>}
                        refresh={getSteps}
                    />
                ),
            });
            _logs.push({
                color: "#cbd5e1",
                children: (
                    <p className="text-slate-300">
                        审批<span className="text-gray-300">（未指定）</span>
                    </p>
                ),
            });
        } else {
            const auditings = await getAuditings();
            if (auditings?.length > 0) {
                _stepNum++;
                _hrAttacheDate = auditings.at(-1)?.auditDate || "";
                auditings.forEach((item, index) => {
                    _stepItems.push({ title: "审批", subTitle: `(${item.auditorName})` });

                    let _color = "";
                    let _textColor = "";
                    if (item.auditDate) {
                        _color = "#1677ff";
                    } else if (index === 0) {
                        _color = "#52c41a";
                    } else if (auditings[index - 1]?.auditDate) {
                        _color = "#52c41a";
                        _stepNum++;
                    } else {
                        _color = "#cbd5e1";
                        _textColor = "text-slate-300";
                    }
                    _logs.push({
                        color: _color,
                        children: (
                            <>
                                <p className={_textColor}>
                                    审批<span className="text-gray-300">（{item.auditorName}）</span>
                                </p>
                                {item.auditDate && <p>{dayjs(item.auditDate).format("YYYY-MM-DD HH:mm:ss")}</p>}
                            </>
                        ),
                    });
                });
            }
        }

        if (planning?.hrattacheId) {
            _stepNum++;
            _stepItems.push({ title: "招聘", subTitle: `(${planning.hrAttacheName})` });
            _logs.push({
                color: planning?.closeDate ? "#1677ff" : "#52c41a",
                children: (
                    <>
                        <p>
                            招聘<span className="text-gray-300">（{planning.hrAttacheName}）</span>
                        </p>
                        <p>{_hrAttacheDate ? dayjs(_hrAttacheDate).format("YYYY-MM-DD HH:mm:ss") : "-"}</p>
                    </>
                ),
            });
        } else {
            _stepItems.push({ title: "招聘", subTitle: `(未指定)` });
            _logs.push({
                color: "#cbd5e1",
                children: (
                    <p className="text-slate-300">
                        招聘<span className="text-gray-300">（未指定）</span>
                    </p>
                ),
            });
        }

        _stepItems.push({ title: "完成" });
        if (planning?.status === "completed") {
            _stepNum++;
            _logs.push({
                children: (
                    <>
                        <p>完成</p>
                        <p>{planning?.closeDate ? dayjs(planning?.closeDate).format("YYYY-MM-DD HH:mm:ss") : "-"}</p>
                    </>
                ),
            });
        } else {
            _logs.push({ color: "#cbd5e1", children: <p className="text-slate-300">完成</p> });
        }

        setStepNum(_stepNum);
        setStepItems(_stepItems);
        setLogs(_logs);
        setLoading(false);
    };

    const getAuditings = async () => {
        const result = await httpFetch<IRecruitingPlanningAuditing[]>("/hr/recruiting/plannings/auditing", {
            params: { planningId: planning.planningId },
        });
        return result;
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const renderInfo = (label: string, value: any) => {
        return (
            <>
                <div className="flex">
                    <div className="text-gray-300 w-[70px]">{label}: </div>
                    <div className="flex-1">{value}</div>
                </div>
            </>
        );
    };

    return (
        <>
            <a onClick={showModal}>详情</a>
            <Modal
                title="计划详情"
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
                width={1000}
                loading={loading}
            >
                <div>
                    <Steps current={stepNum} items={stepItems} />
                </div>
                <div className="flex mt-8 gap-8">
                    <div className="flex-1 flex flex-col gap-3">
                        <div>{renderInfo("需求部门", planning?.departmentTitle)}</div>
                        <div>{renderInfo("职位名称", planning?.postTitle)}</div>
                        <div>{renderInfo("职位详情", planning?.postInfo)}</div>
                        <div>{renderInfo("学历要求", planning?.educationTitle)}</div>
                        <div>{renderInfo("工作经验", planning?.experience)}</div>
                        <div>{renderInfo("薪资范围", planning?.salariesRange)}</div>
                        <div>{renderInfo("技术要求", planning?.technology)}</div>
                        <div>{renderInfo("招聘人数", planning?.recruitingNum)}</div>
                        <div>{renderInfo("招聘理由", planning?.reason)}</div>
                    </div>
                    <div className="w-[250px]">
                        <Timeline items={logs} />
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Details;
