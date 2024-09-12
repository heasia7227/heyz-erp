# HR 人力资源管理 招聘管理

### 招聘计划制定

| 招聘计划表                             | t_hr_recruiting_planning |
| -------------------------------------- | ------------------------ |
| 计划编号                               | id                       |
| 职位名称                               | post_title               |
| 职位详情                               | post_info                |
| 学历要求                               | education                |
| 工作经验                               | experience               |
| 薪资范围                               | salaries_range           |
| 技术要求                               | technology               |
| 状态(草稿/审核中/待招聘/招聘中/已关闭) | status                   |
| 招聘理由                               | reason                   |
| 人力专员                               | hr_attache_id            |

| 招聘计划审批配置表 | t_hr_recruiting_planning_audit_config |
| ------------------ | ------------------------------------- |
| 计划编号           | planning_id                           |
| 审批人             | auditor_id                            |
| 审批级别           | audit_level                           |

| 招聘计划审批表      | t_hr_recruiting_planning_audit |
| ------------------- | ------------------------------ |
| 计划编号            | planning_id                    |
| 审批人              | auditor_id                     |
| 审批级别            | audit_level                    |
| 审批结果(驳回/通过) | status                         |
| 审批意见            | opinion                        |

| 简历筛选表             | t_hr_recruiting_resume |
| ---------------------- | ---------------------- |
| 简历编号               | resume_id              |
| 计划编号               | planning_id            |
| 候选人姓名             | candidate_name         |
| 候选人性别             | candidate_gender       |
| 候选人年龄             | candidate_age          |
| 候选人手机             | candidate_phone_number |
| 简历附件               | resume_attachment      |
| 状态(新增/符合/不符合) | status                 |

| 面试安排表        | t_hr_recruiting_interview_planning |
| ----------------- | ---------------------------------- |
| 简历编号          | resume_id                          |
| 面试时间          | interview_date_time                |
| 面试官            | interviewer_id                     |
| 状态(爽约/已签到) | status                             |

| 录用决策表                  | t_hr_recruiting_employ_decision |
| --------------------------- | ------------------------------- |
| 决策编号                    | decision_id                     |
| 简历编号                    | resume_id                       |
| 状态(录用/不录用)           | status                          |
| 通知录用状态(未通知/已通知) | notification_status             |

| 录用决策审批表      | t_hr_recruiting_employ_decision_audit |
| ------------------- | ------------------------------------- |
| 决策编号            | decision_id                           |
| 审批人              | auditor_id                            |
| 审批级别            | audit_level                           |
| 审批结果(驳回/通过) | status                                |
| 审批意见            | opinion                               |
