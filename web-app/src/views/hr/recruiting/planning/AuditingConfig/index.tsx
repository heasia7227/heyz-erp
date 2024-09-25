"use client";

import React, { useState } from "react";
import { Button, Form, Modal, Select, Space, TreeSelect } from "antd";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";
import httpFetch from "@/utils/http-fetch";
import { IEmployeeFile } from "@/interfaces/hr/employee-file";
import { IPage } from "@/interfaces";
import { IDepartmentTree } from "@/interfaces/system/department";
import { IRecruitingPlanning } from "@/interfaces/hr/recruiting/planning";

interface IProps {
    planning: IRecruitingPlanning;
    button: React.ReactElement;
    refresh: () => void;
}

const AuditingConfig = ({ planning, button, refresh }: IProps) => {
    const [form] = Form.useForm();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [saving, setSaving] = useState(false);
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState<any>({});
    const [departmentTrees, setDepartmentTress] = useState<IDepartmentTree[]>([]);

    const getDepartments = async () => {
        setLoading(true);
        const result = await httpFetch<IDepartmentTree[]>("/system/departments/trees");
        setDepartmentTress(result);
        setLoading(false);
    };

    const showModal = () => {
        getDepartments();
        setIsModalOpen(true);
    };

    const handleOk = () => {
        form.validateFields().then((values) => {
            form.resetFields();
            setIsModalOpen(false);
            refresh();
        });
    };

    const handleCancel = () => {
        form.resetFields();
        setIsModalOpen(false);
    };

    const onDepartmentChange = async (key: number, value: any) => {
        const result = await httpFetch<IPage<IEmployeeFile[]>>("/hr/employee-files", {
            params: { departmentId: value },
        });

        users[key] = result?.items?.filter((item) => item.id != planning?.createBy);
        setUsers({ ...users });
    };

    return (
        <>
            {React.cloneElement(button, { onClick: showModal })}
            <Modal
                title="配置审批人"
                open={isModalOpen}
                okText="保存"
                okButtonProps={{ loading: saving }}
                onOk={handleOk}
                cancelText="取消"
                onCancel={handleCancel}
                cancelButtonProps={{ disabled: saving }}
                closable={!saving}
                destroyOnClose
                loading={loading}
            >
                <Form form={form} initialValues={{ users: [{}] }}>
                    <Form.List name="users">
                        {(fields, { add, remove }) => (
                            <>
                                {fields.map(({ key, name, ...restField }) => (
                                    <Space key={key} style={{ display: "flex", marginBottom: 8 }} align="baseline">
                                        <div>第{name + 1}审批人</div>
                                        <Form.Item
                                            {...restField}
                                            name={[name, "departmentId"]}
                                            rules={[{ required: true, message: "请选择部门！" }]}
                                        >
                                            <TreeSelect
                                                style={{ width: "180px" }}
                                                dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
                                                placeholder="请选择部门"
                                                allowClear
                                                treeDefaultExpandAll
                                                treeData={departmentTrees}
                                                onChange={onDepartmentChange.bind(null, key)}
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            {...restField}
                                            name={[name, "employeeId"]}
                                            rules={[{ required: true, message: "请选择员工！" }]}
                                        >
                                            <Select
                                                style={{ width: "180px" }}
                                                placeholder="请选择员工"
                                                options={users?.[key]?.map((item: IEmployeeFile) => {
                                                    return { label: item.name, value: item.id };
                                                })}
                                            />
                                        </Form.Item>
                                        <MinusCircleOutlined onClick={() => remove(name)} />
                                    </Space>
                                ))}
                                <Form.Item>
                                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                        添加审批人
                                    </Button>
                                </Form.Item>
                            </>
                        )}
                    </Form.List>
                </Form>
            </Modal>
        </>
    );
};

export default AuditingConfig;
