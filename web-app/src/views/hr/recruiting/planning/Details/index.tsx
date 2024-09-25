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
    const [logs, setLogs] = useState<any[]>([]);

    const showModal = () => {
        setIsModalOpen(true);

        getSteps();
    };

    const getSteps = async () => {
        setLoading(true);

        const _stepItems: any[] = [{ title: "草稿" }];
        const _logs: any[] = [
            {
                children: (
                    <>
                        <p>创建计划</p>
                        <p>{planning?.createDate ? dayjs(planning?.createDate).format("YYYY-MM-DD HH:mm:ss") : "-"}</p>
                    </>
                ),
            },
        ];

        const auditings = await getAuditings();
        if (auditings?.length > 0) {
            auditings.forEach((item) => {
                _stepItems.push({ title: "审批", subTitle: `(${item.auditorName})` });
            });
        } else {
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
        }
        const auditeds = auditings.filter((item) => item.status);
        if (auditeds?.length > 0) {
            auditeds?.forEach((item) => {
                _logs.push({
                    children: (
                        <>
                            <p>审批（{item.auditorName}）</p>
                            <p>{item.auditDate ? dayjs(item.auditDate).format("YYYY-MM-DD HH:mm:ss") : "-"}</p>
                        </>
                    ),
                });
            });
        } else {
            _logs.push({ color: "#cbd5e1", children: <p className="text-slate-300">审批（未指定）</p> });
        }

        if (planning?.hrattacheId) {
            _stepItems.push({ title: "招聘", subTitle: `(${planning.hrAttacheName})` });
            _logs.push({
                children: (
                    <>
                        <p>招聘（{planning.hrAttacheName}）</p>
                        <p>
                            {auditeds.at(-1)?.auditDate
                                ? dayjs(auditeds.at(-1)?.auditDate).format("YYYY-MM-DD HH:mm:ss")
                                : "-"}
                        </p>
                    </>
                ),
            });
        } else {
            _stepItems.push({ title: "招聘", subTitle: `(未指定)` });
            _logs.push({ color: "#cbd5e1", children: <p className="text-slate-300">招聘（未指定）</p> });
        }

        _stepItems.push({ title: "完成" });
        if (planning?.status === "completed") {
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

        setStepItems(_stepItems);
        setLogs(_logs);
        setLoading(false);
    };

    const getAuditings = async () => {
        const result = await httpFetch<IRecruitingPlanningAuditing[]>("/hr/recruiting/plannings/auditing", {
            params: { planningId: planning.id },
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
                    <Steps current={0} items={stepItems} />
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
