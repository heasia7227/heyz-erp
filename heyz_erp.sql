/*
 Navicat Premium Data Transfer

 Source Server         : mysql
 Source Server Type    : MySQL
 Source Server Version : 90001
 Source Host           : localhost:3306
 Source Schema         : heyz_erp

 Target Server Type    : MySQL
 Target Server Version : 90001
 File Encoding         : 65001

 Date: 24/09/2024 11:43:08
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for t_common_dictionaries
-- ----------------------------
DROP TABLE IF EXISTS `t_common_dictionaries`;
CREATE TABLE `t_common_dictionaries`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `dictionary_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '类型',
  `status` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_common_dictionaries
-- ----------------------------
INSERT INTO `t_common_dictionaries` VALUES (1, '小学', 'education', 'enable');
INSERT INTO `t_common_dictionaries` VALUES (2, '初中', 'education', 'enable');
INSERT INTO `t_common_dictionaries` VALUES (3, '高中', 'education', 'enable');
INSERT INTO `t_common_dictionaries` VALUES (4, '大专', 'education', 'enable');
INSERT INTO `t_common_dictionaries` VALUES (5, '本科', 'education', 'enable');
INSERT INTO `t_common_dictionaries` VALUES (6, '研究生', 'education', 'enable');
INSERT INTO `t_common_dictionaries` VALUES (7, '博士', 'education', 'enable');

-- ----------------------------
-- Table structure for t_hr_employee_files
-- ----------------------------
DROP TABLE IF EXISTS `t_hr_employee_files`;
CREATE TABLE `t_hr_employee_files`  (
  `id` int(0) NOT NULL AUTO_INCREMENT COMMENT '员工编号',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '姓名',
  `gender` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '性别',
  `birthday` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '生日',
  `id_card` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '身份证号',
  `phone_number` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '手机号码',
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '邮件',
  `education` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学历',
  `salary` decimal(10, 2) NULL DEFAULT NULL COMMENT '薪资',
  `department_id` int(0) NULL DEFAULT NULL COMMENT '部门编号',
  `status` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '状态(离职/在职)',
  `resume_id` int(0) NULL DEFAULT NULL COMMENT '简历编号',
  `create_by` int(0) NULL DEFAULT NULL,
  `create_date` datetime(0) NULL DEFAULT NULL,
  `update_by` int(0) NULL DEFAULT NULL,
  `update_date` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_hr_employee_files
-- ----------------------------
INSERT INTO `t_hr_employee_files` VALUES (1, '管理员', NULL, NULL, NULL, '15398027227', '515382435@qq.com', NULL, NULL, 3, 'enable', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `t_hr_employee_files` VALUES (2, '贺亚洲', '男', '1990/05/29', '610523199005294519', '15398027227', '515382435@qq.com', '本科', NULL, 1, 'enable', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `t_hr_employee_files` VALUES (3, '张三', '男', '1990/05/29', '610523199005294518', '13891370806', NULL, '专科', NULL, 3, 'enable', NULL, 1, '2024-09-19 09:01:17', NULL, NULL);

-- ----------------------------
-- Table structure for t_hr_recruiting_employ_decision
-- ----------------------------
DROP TABLE IF EXISTS `t_hr_recruiting_employ_decision`;
CREATE TABLE `t_hr_recruiting_employ_decision`  (
  `id` int(0) NOT NULL AUTO_INCREMENT COMMENT '决策编号',
  `resume_id` int(0) NULL DEFAULT NULL COMMENT '简历编号',
  `status` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '状态(录用/不录用)',
  `notification_status` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '通知录用状态(未通知/已通知)',
  `update_by` int(0) NULL DEFAULT NULL,
  `update_date` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_hr_recruiting_employ_decision_auditing
-- ----------------------------
DROP TABLE IF EXISTS `t_hr_recruiting_employ_decision_auditing`;
CREATE TABLE `t_hr_recruiting_employ_decision_auditing`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `decision_id` int(0) NULL DEFAULT NULL COMMENT '决策编号',
  `auditor_id` int(0) NULL DEFAULT NULL COMMENT '审批人',
  `audit_level` int(0) NULL DEFAULT NULL COMMENT '审批级别',
  `status` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '审批结果(驳回/通过)',
  `opinion` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '审批意见',
  `audit_date` datetime(0) NULL DEFAULT NULL COMMENT '审批时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_hr_recruiting_interview_planning
-- ----------------------------
DROP TABLE IF EXISTS `t_hr_recruiting_interview_planning`;
CREATE TABLE `t_hr_recruiting_interview_planning`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `resume_id` int(0) NULL DEFAULT NULL COMMENT '简历编号',
  `interview_date_time` datetime(0) NULL DEFAULT NULL COMMENT '面试时间',
  `interviewer_id` int(0) NULL DEFAULT NULL COMMENT '面试官',
  `status` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '状态(爽约/已签到)',
  `create_by` int(0) NULL DEFAULT NULL,
  `create_date` datetime(0) NULL DEFAULT NULL,
  `update_by` int(0) NULL DEFAULT NULL,
  `update_date` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_hr_recruiting_planning
-- ----------------------------
DROP TABLE IF EXISTS `t_hr_recruiting_planning`;
CREATE TABLE `t_hr_recruiting_planning`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `department_id` int(0) NULL DEFAULT NULL COMMENT '需求部门',
  `post_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '职位名称',
  `post_info` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '职位详情',
  `education` int(0) NULL DEFAULT NULL COMMENT '学历要求',
  `experience` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '工作经验',
  `salaries_range` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '薪资范围',
  `technology` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '技术要求',
  `status` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT 'draft' COMMENT '状态(草稿/审核中/待招聘/招聘中/已关闭) ',
  `reason` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '招聘理由',
  `recruiting_num` int(0) NULL DEFAULT NULL COMMENT '招聘人数',
  `hr_attache_id` int(0) NULL DEFAULT NULL COMMENT '人力专员',
  `create_by` int(0) NULL DEFAULT NULL,
  `create_date` datetime(0) NULL DEFAULT NULL,
  `update_by` int(0) NULL DEFAULT NULL,
  `update_date` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_hr_recruiting_planning
-- ----------------------------
INSERT INTO `t_hr_recruiting_planning` VALUES (1, 3, '软件工程师', '软件工程师软件工程师软件工程师软件工程师软件工程师', 4, '5年', '10000 ~ 20000', 'Java', 'draft', '软件工程师软件工程师', NULL, NULL, 1, '2024-09-24 11:32:34', NULL, NULL);

-- ----------------------------
-- Table structure for t_hr_recruiting_planning_auditing
-- ----------------------------
DROP TABLE IF EXISTS `t_hr_recruiting_planning_auditing`;
CREATE TABLE `t_hr_recruiting_planning_auditing`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `planning_id` int(0) NULL DEFAULT NULL COMMENT '计划编号',
  `auditor_id` int(0) NULL DEFAULT NULL COMMENT '审批人',
  `audit_level` int(0) NULL DEFAULT NULL COMMENT '审批级别',
  `status` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '审批结果(驳回/通过)',
  `opinion` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '审批意见',
  `audit_date` datetime(0) NULL DEFAULT NULL COMMENT '审批时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_hr_recruiting_planning_auditing_config
-- ----------------------------
DROP TABLE IF EXISTS `t_hr_recruiting_planning_auditing_config`;
CREATE TABLE `t_hr_recruiting_planning_auditing_config`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `planning_id` int(0) NULL DEFAULT NULL COMMENT '计划编号',
  `auditor_id` int(0) NULL DEFAULT NULL COMMENT '审批人',
  `audit_level` int(0) NULL DEFAULT NULL COMMENT '审批级别',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_hr_recruiting_resume
-- ----------------------------
DROP TABLE IF EXISTS `t_hr_recruiting_resume`;
CREATE TABLE `t_hr_recruiting_resume`  (
  `id` int(0) NOT NULL AUTO_INCREMENT COMMENT '简历编号',
  `planning_id` int(0) NULL DEFAULT NULL COMMENT '计划编号',
  `candidate_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '候选人姓名',
  `candidate_gender` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '候选人性别',
  `candidate_age` int(0) NULL DEFAULT NULL COMMENT '候选人年龄',
  `candidate_phone_number` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '候选人手机',
  `resume_attachment` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '简历附件',
  `status` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '状态(新增/符合/不符合)',
  `create_by` int(0) NULL DEFAULT NULL,
  `create_date` datetime(0) NULL DEFAULT NULL,
  `update_by` int(0) NULL DEFAULT NULL,
  `update_date` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_sys_departments
-- ----------------------------
DROP TABLE IF EXISTS `t_sys_departments`;
CREATE TABLE `t_sys_departments`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `parent_id` int(0) NULL DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `status` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `create_by` int(0) NULL DEFAULT NULL,
  `create_date` datetime(0) NULL DEFAULT NULL,
  `update_by` int(0) NULL DEFAULT NULL,
  `update_date` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_sys_departments
-- ----------------------------
INSERT INTO `t_sys_departments` VALUES (1, '生产部', NULL, '111111', 'enable', 1, '2024-09-09 22:31:52', NULL, NULL);
INSERT INTO `t_sys_departments` VALUES (2, '1号车间', 1, '222222', 'enable', 1, '2024-09-09 22:31:56', NULL, NULL);
INSERT INTO `t_sys_departments` VALUES (3, '研发部', NULL, '研发部1111', 'enable', 1, '2024-09-13 21:59:54', NULL, NULL);
INSERT INTO `t_sys_departments` VALUES (4, '研发一组', 3, '研发一组', 'enable', NULL, NULL, NULL, NULL);

-- ----------------------------
-- Table structure for t_sys_menus
-- ----------------------------
DROP TABLE IF EXISTS `t_sys_menus`;
CREATE TABLE `t_sys_menus`  (
  `id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `icon` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `parent_id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `ranking` int(0) NULL DEFAULT NULL,
  `status` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `create_by` int(0) NULL DEFAULT NULL,
  `create_date` datetime(0) NULL DEFAULT NULL,
  `update_by` int(0) NULL DEFAULT NULL,
  `update_date` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_sys_menus
-- ----------------------------
INSERT INTO `t_sys_menus` VALUES ('01', '项目管理', 'FolderOpenOutlined', NULL, NULL, 1, 'enable', 1, '2024-09-06 17:54:10', 1, '2024-09-06 17:54:29');
INSERT INTO `t_sys_menus` VALUES ('0101', '项目计划', NULL, '01', '/projects/planning', 1, 'enable', 1, '2024-09-06 17:57:41', 1, '2024-09-06 17:57:43');
INSERT INTO `t_sys_menus` VALUES ('0102', '项目进度', NULL, '01', '/projects/schedule', 2, 'enable', 1, '2024-09-06 17:58:52', 1, '2024-09-06 17:58:55');
INSERT INTO `t_sys_menus` VALUES ('0103', '项目成果', NULL, '01', '/projects/achievement', 3, 'enable', 1, '2024-09-06 20:42:13', 1, '2024-09-06 20:42:17');
INSERT INTO `t_sys_menus` VALUES ('0104', '项目风险', NULL, '01', '/projects/risk', 4, 'enable', 1, '2024-09-06 20:43:55', 1, '2024-09-06 20:43:58');
INSERT INTO `t_sys_menus` VALUES ('02', '财务管理', 'MoneyCollectOutlined', NULL, NULL, 2, 'enable', 1, '2024-09-06 21:44:58', 1, '2024-09-06 21:45:01');
INSERT INTO `t_sys_menus` VALUES ('0201', '会计核算', NULL, '02', '/financial/accounting', 1, 'enable', 1, '2024-09-06 21:46:32', 1, '2024-09-06 21:46:34');
INSERT INTO `t_sys_menus` VALUES ('0202', '发票管理', NULL, '02', '/financial/invoice', 2, 'enable', 1, '2024-09-06 21:48:01', 1, '2024-09-06 21:48:04');
INSERT INTO `t_sys_menus` VALUES ('0203', '费用管理', NULL, '02', '/financial/expense', 3, 'enable', 1, '2024-09-06 21:48:49', 1, '2024-09-06 21:48:51');
INSERT INTO `t_sys_menus` VALUES ('0204', '财务报表', NULL, '02', '/financial/report', 4, 'enable', 1, '2024-09-06 21:49:39', 1, '2024-09-06 21:49:42');
INSERT INTO `t_sys_menus` VALUES ('0205', '财务预算', NULL, '02', '/financial/budget', 5, 'enable', 1, '2024-09-06 21:50:57', 1, '2024-09-06 21:50:59');
INSERT INTO `t_sys_menus` VALUES ('0206', '财务分析', NULL, '02', '/financial/analysis', 6, 'enable', 1, '2024-09-06 21:51:43', 1, '2024-09-06 21:51:46');
INSERT INTO `t_sys_menus` VALUES ('0207', '财务审计', NULL, '02', '/financial/auditing', 7, 'enable', 1, '2024-09-06 21:53:00', 1, '2024-09-06 21:53:02');
INSERT INTO `t_sys_menus` VALUES ('0208', '财务决策', NULL, '02', '/financial/decision', 8, 'enable', 1, '2024-09-06 21:53:56', 1, '2024-09-06 21:53:58');
INSERT INTO `t_sys_menus` VALUES ('03', '生产管理', 'AppstoreAddOutlined', NULL, NULL, 3, 'enable', 1, '2024-09-06 21:56:29', 1, '2024-09-06 21:56:32');
INSERT INTO `t_sys_menus` VALUES ('0301', '生产计划', NULL, '03', '/production/planning', 1, 'enable', 1, '2024-09-06 21:57:25', 1, '2024-09-06 21:57:29');
INSERT INTO `t_sys_menus` VALUES ('0302', '物料需求计划', NULL, '03', '/production/mrp', 2, 'enable', 1, '2024-09-06 21:58:20', 1, '2024-09-06 21:58:23');
INSERT INTO `t_sys_menus` VALUES ('0303', '能力需求计划', NULL, '03', '/production/crp', 3, 'enable', 1, '2024-09-06 21:58:59', 1, '2024-09-06 21:59:03');
INSERT INTO `t_sys_menus` VALUES ('0304', '车间控制', NULL, '03', '/production/shop-control', 4, 'enable', 1, '2024-09-06 21:59:59', 1, '2024-09-06 22:00:01');
INSERT INTO `t_sys_menus` VALUES ('0305', '制造标准', NULL, '03', '/production/manufacture-standard', 5, 'enable', 1, '2024-09-06 22:01:00', 1, '2024-09-06 22:01:02');
INSERT INTO `t_sys_menus` VALUES ('0306', '生产订单', NULL, '03', '/production/order', 6, 'enable', 1, '2024-09-06 22:01:47', 1, '2024-09-06 22:01:50');
INSERT INTO `t_sys_menus` VALUES ('0307', '生产进度', NULL, '03', '/production/schedule', 7, 'enable', 1, '2024-09-06 22:02:47', 1, '2024-09-06 22:02:49');
INSERT INTO `t_sys_menus` VALUES ('0308', '生产成本', NULL, '03', '/production/costing', 8, 'enable', 1, '2024-09-06 22:03:38', 1, '2024-09-06 22:03:40');
INSERT INTO `t_sys_menus` VALUES ('04', '采购管理', 'TruckOutlined', NULL, NULL, 4, 'enable', 1, '2024-09-06 22:04:10', 1, '2024-09-06 22:04:12');
INSERT INTO `t_sys_menus` VALUES ('0401', '采购计划', NULL, '04', '/purchasing/planning', 1, 'enable', 1, '2024-09-06 22:05:25', 1, '2024-09-06 22:05:28');
INSERT INTO `t_sys_menus` VALUES ('0402', '采购订单', NULL, '04', '/purchasing/order', 2, 'enable', 1, '2024-09-06 22:06:09', 1, '2024-09-06 22:06:13');
INSERT INTO `t_sys_menus` VALUES ('0403', '采购收货', NULL, '04', '/purchasing/receiving', 3, 'enable', 1, '2024-09-06 22:07:00', 1, '2024-09-06 22:07:05');
INSERT INTO `t_sys_menus` VALUES ('05', '销售管理', 'ShareAltOutlined', NULL, NULL, 5, 'enable', 1, '2024-09-06 22:08:17', 1, '2024-09-06 22:08:19');
INSERT INTO `t_sys_menus` VALUES ('0501', '客户关系管理(CRM)', NULL, '05', NULL, 1, 'enable', 1, '2024-09-06 22:08:50', 1, '2024-09-06 22:08:52');
INSERT INTO `t_sys_menus` VALUES ('050101', '客户档案', NULL, '0501', '/selling/crm/customer-archives', 1, 'enable', 1, '2024-09-06 22:10:22', 1, '2024-09-06 22:10:24');
INSERT INTO `t_sys_menus` VALUES ('050102', '客户投诉', NULL, '0501', '/selling/crm/customer-complaints', 2, 'enable', 1, '2024-09-06 22:11:26', 1, '2024-09-06 22:11:28');
INSERT INTO `t_sys_menus` VALUES ('050103', '客户满意度调查', NULL, '0501', '/selling/crm/satisfaction-surveys', 3, 'enable', 1, '2024-09-06 22:12:40', 1, '2024-09-06 22:12:43');
INSERT INTO `t_sys_menus` VALUES ('050104', '客户关怀', NULL, '0501', '/selling/crm/customer-cares', 4, 'enable', 1, '2024-09-06 22:13:34', 1, '2024-09-06 22:13:37');
INSERT INTO `t_sys_menus` VALUES ('0502', '销售管理', NULL, '05', NULL, 2, 'enable', 1, '2024-09-06 22:14:07', 1, '2024-09-06 22:14:09');
INSERT INTO `t_sys_menus` VALUES ('050201', '销售计划', NULL, '0502', '/selling/selling/planning', 1, 'enable', 1, '2024-09-06 22:14:58', 1, '2024-09-06 22:14:59');
INSERT INTO `t_sys_menus` VALUES ('050202', '销售订单', NULL, '0502', '/selling/selling/order', 2, 'enable', 1, '2024-09-06 22:15:50', 1, '2024-09-06 22:15:52');
INSERT INTO `t_sys_menus` VALUES ('050203', '销售出库', NULL, '0502', '/selling/selling/outbound', 3, 'enable', 1, '2024-09-06 22:16:40', 1, '2024-09-06 22:16:42');
INSERT INTO `t_sys_menus` VALUES ('0503', '租赁管理', NULL, '05', '/selling/leasing', 3, 'enable', 1, '2024-09-06 22:17:45', 1, '2024-09-06 22:17:47');
INSERT INTO `t_sys_menus` VALUES ('06', '库存管理', 'BankOutlined', NULL, NULL, 6, 'enable', 1, '2024-09-06 22:18:48', 1, '2024-09-06 22:18:51');
INSERT INTO `t_sys_menus` VALUES ('0601', '供应商管理', NULL, '06', '/inventory/suppliers', 1, 'enable', 1, '2024-09-06 22:19:56', 1, '2024-09-06 22:19:59');
INSERT INTO `t_sys_menus` VALUES ('0602', '物资管理', NULL, '06', '/inventory/materials', 2, 'enable', 1, '2024-09-06 22:21:03', 1, '2024-09-06 22:21:05');
INSERT INTO `t_sys_menus` VALUES ('0603', '库房管理', NULL, '06', '/inventory/warehouse', 3, 'enable', 1, '2024-09-06 22:21:53', 1, '2024-09-06 22:21:55');
INSERT INTO `t_sys_menus` VALUES ('0604', '库存管理', NULL, '06', '/inventory/inventory', 4, 'enable', 1, '2024-09-06 22:23:15', 1, '2024-09-06 22:23:17');
INSERT INTO `t_sys_menus` VALUES ('0605', '库存盘点', NULL, '06', '/inventory/counting', 5, 'enable', 1, '2024-09-06 22:25:02', 1, '2024-09-06 22:25:04');
INSERT INTO `t_sys_menus` VALUES ('0606', '库存调拨', NULL, '06', '/inventory/transfer', 6, 'enable', 1, '2024-09-06 22:25:46', 1, '2024-09-06 22:25:49');
INSERT INTO `t_sys_menus` VALUES ('0607', '库存报废', NULL, '06', '/inventory/scrapping', 7, 'enable', 1, '2024-09-06 22:27:02', 1, '2024-09-06 22:27:04');
INSERT INTO `t_sys_menus` VALUES ('0608', '库存预警', NULL, '06', '/inventory/early-warning', 8, 'enable', 1, '2024-09-06 22:27:56', 1, '2024-09-06 22:27:58');
INSERT INTO `t_sys_menus` VALUES ('07', '资产管理', 'DeploymentUnitOutlined', NULL, NULL, 7, 'enable', 1, '2024-09-06 22:28:25', 1, '2024-09-06 22:28:28');
INSERT INTO `t_sys_menus` VALUES ('0701', '资产档案', NULL, '07', '/asset/archives', 1, 'enable', 1, '2024-09-06 22:30:10', 1, '2024-09-06 22:30:12');
INSERT INTO `t_sys_menus` VALUES ('0702', '资产折旧', NULL, '07', '/asset/depreciation', 2, 'enable', 1, '2024-09-06 22:30:44', 1, '2024-09-06 22:30:47');
INSERT INTO `t_sys_menus` VALUES ('0703', '资产维修', NULL, '07', '/asset/maintaining', 3, 'enable', 1, '2024-09-06 22:31:14', 1, '2024-09-06 22:31:16');
INSERT INTO `t_sys_menus` VALUES ('0704', '资产报废', NULL, '07', '/asset/scrapping', 4, 'enable', 1, '2024-09-06 22:31:44', 1, '2024-09-06 22:31:46');
INSERT INTO `t_sys_menus` VALUES ('08', '综合办公', 'NodeExpandOutlined', NULL, NULL, 8, 'enable', 1, '2024-09-06 22:32:06', 1, '2024-09-06 22:32:08');
INSERT INTO `t_sys_menus` VALUES ('0801', '流程管理', NULL, '08', '/oa/following', 1, 'enable', 1, '2024-09-06 22:33:43', 1, '2024-09-06 22:33:46');
INSERT INTO `t_sys_menus` VALUES ('0802', '公文管理', NULL, '08', '/oa/official-document', 2, 'enable', 1, '2024-09-06 22:34:17', 1, '2024-09-06 22:34:19');
INSERT INTO `t_sys_menus` VALUES ('0803', '协同工作', NULL, '08', '/oa/teamwork', 3, 'enable', 1, '2024-09-06 22:34:48', 1, '2024-09-06 22:34:50');
INSERT INTO `t_sys_menus` VALUES ('09', '人力资源管理', 'UserSwitchOutlined', NULL, NULL, 9, 'enable', 1, '2024-09-06 22:35:20', 1, '2024-09-06 22:35:22');
INSERT INTO `t_sys_menus` VALUES ('0901', '档案管理', NULL, '09', '/hr/employee-files', 1, 'enable', 1, '2024-09-06 22:37:43', 1, '2024-09-06 22:37:45');
INSERT INTO `t_sys_menus` VALUES ('0902', '薪资福利', NULL, '09', '/hr/salaries', 2, 'enable', 1, '2024-09-06 22:38:16', 1, '2024-09-06 22:38:18');
INSERT INTO `t_sys_menus` VALUES ('0903', '绩效考核', NULL, '09', '/hr/performance-appraisal', 3, 'enable', 1, '2024-09-06 22:38:49', 1, '2024-09-06 22:38:50');
INSERT INTO `t_sys_menus` VALUES ('0904', '培训管理', NULL, '09', '/hr/traning', 4, 'enable', 1, '2024-09-06 22:39:19', 1, '2024-09-06 22:39:21');
INSERT INTO `t_sys_menus` VALUES ('0905', '招聘管理', NULL, '09', '/hr/recruiting', 5, 'enable', 1, '2024-09-06 22:39:53', 1, '2024-09-06 22:39:55');
INSERT INTO `t_sys_menus` VALUES ('10', '系统管理', 'SettingOutlined', NULL, NULL, 10, 'enable', 1, '2024-09-06 22:40:18', 1, '2024-09-06 22:40:19');
INSERT INTO `t_sys_menus` VALUES ('1001', '用户管理', NULL, '10', '/system/users', 1, 'enable', 1, '2024-09-06 22:42:15', 1, '2024-09-06 22:42:17');
INSERT INTO `t_sys_menus` VALUES ('1002', '角色管理', NULL, '10', '/system/roles', 2, 'enable', 1, '2024-09-06 22:42:45', 1, '2024-09-06 22:42:47');
INSERT INTO `t_sys_menus` VALUES ('1003', '部门管理', NULL, '10', '/system/departments', 3, 'enable', 1, '2024-09-06 22:43:16', 1, '2024-09-06 22:43:18');
INSERT INTO `t_sys_menus` VALUES ('1004', '菜单管理', NULL, '10', '/system/menus', 4, 'enable', 1, '2024-09-06 22:43:45', 1, '2024-09-06 22:43:47');
INSERT INTO `t_sys_menus` VALUES ('1005', '系统日志', NULL, '10', '/system/logs', 5, 'enable', 1, '2024-09-06 22:44:14', 1, '2024-09-06 22:44:16');

-- ----------------------------
-- Table structure for t_sys_operate_logs
-- ----------------------------
DROP TABLE IF EXISTS `t_sys_operate_logs`;
CREATE TABLE `t_sys_operate_logs`  (
  `id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `operator` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `operate_date` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_sys_role_menu
-- ----------------------------
DROP TABLE IF EXISTS `t_sys_role_menu`;
CREATE TABLE `t_sys_role_menu`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `role_id` int(0) NOT NULL,
  `menu_id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `create_by` int(0) NULL DEFAULT NULL,
  `create_date` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 79 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_sys_role_menu
-- ----------------------------
INSERT INTO `t_sys_role_menu` VALUES (19, 2, '0101', 1, '2024-09-19 17:02:14');
INSERT INTO `t_sys_role_menu` VALUES (20, 2, '0102', 1, '2024-09-19 17:02:14');
INSERT INTO `t_sys_role_menu` VALUES (21, 2, '0103', 1, '2024-09-19 17:02:14');
INSERT INTO `t_sys_role_menu` VALUES (22, 2, '0104', 1, '2024-09-19 17:02:14');
INSERT INTO `t_sys_role_menu` VALUES (23, 1, '1001', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (24, 1, '1002', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (25, 1, '1003', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (26, 1, '1004', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (27, 1, '1005', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (28, 1, '0101', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (29, 1, '0102', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (30, 1, '0103', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (31, 1, '0104', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (32, 1, '0201', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (33, 1, '0202', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (34, 1, '0203', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (35, 1, '0204', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (36, 1, '0205', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (37, 1, '0206', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (38, 1, '0207', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (39, 1, '0208', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (40, 1, '0301', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (41, 1, '0302', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (42, 1, '0303', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (43, 1, '0304', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (44, 1, '0305', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (45, 1, '0306', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (46, 1, '0307', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (47, 1, '0308', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (48, 1, '0401', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (49, 1, '0402', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (50, 1, '0403', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (51, 1, '0503', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (52, 1, '050101', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (53, 1, '050102', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (54, 1, '050103', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (55, 1, '050104', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (56, 1, '050201', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (57, 1, '050202', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (58, 1, '050203', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (59, 1, '0601', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (60, 1, '0602', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (61, 1, '0603', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (62, 1, '0604', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (63, 1, '0605', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (64, 1, '0606', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (65, 1, '0607', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (66, 1, '0608', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (67, 1, '0701', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (68, 1, '0702', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (69, 1, '0703', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (70, 1, '0704', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (71, 1, '0801', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (72, 1, '0802', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (73, 1, '0803', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (74, 1, '0901', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (75, 1, '0902', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (76, 1, '0903', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (77, 1, '0904', 1, '2024-09-19 17:04:53');
INSERT INTO `t_sys_role_menu` VALUES (78, 1, '0905', 1, '2024-09-19 17:04:53');

-- ----------------------------
-- Table structure for t_sys_role_user
-- ----------------------------
DROP TABLE IF EXISTS `t_sys_role_user`;
CREATE TABLE `t_sys_role_user`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `role_id` int(0) NOT NULL,
  `user_id` int(0) NOT NULL,
  `create_by` int(0) NULL DEFAULT NULL,
  `create_date` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_sys_role_user
-- ----------------------------
INSERT INTO `t_sys_role_user` VALUES (1, 1, 1, 1, '2024-09-08 17:28:46');
INSERT INTO `t_sys_role_user` VALUES (2, 2, 3, 1, '2024-09-20 15:22:44');
INSERT INTO `t_sys_role_user` VALUES (3, 2, 2, 1, '2024-09-20 15:28:13');

-- ----------------------------
-- Table structure for t_sys_roles
-- ----------------------------
DROP TABLE IF EXISTS `t_sys_roles`;
CREATE TABLE `t_sys_roles`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `status` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `create_by` int(0) NULL DEFAULT NULL,
  `create_date` datetime(0) NULL DEFAULT NULL,
  `update_by` int(0) NULL DEFAULT NULL,
  `update_date` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_sys_roles
-- ----------------------------
INSERT INTO `t_sys_roles` VALUES (1, '系统管理员', '拥有系统管理权限', 'enable', 1, '2024-09-08 17:28:32', NULL, NULL);
INSERT INTO `t_sys_roles` VALUES (2, '普通员工', '普通员工', 'enable', 1, '2024-09-19 09:58:03', NULL, NULL);

-- ----------------------------
-- Table structure for t_sys_users
-- ----------------------------
DROP TABLE IF EXISTS `t_sys_users`;
CREATE TABLE `t_sys_users`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `employee_id` int(0) NULL DEFAULT NULL,
  `account` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `create_by` int(0) NULL DEFAULT NULL,
  `create_date` datetime(0) NULL DEFAULT NULL,
  `update_by` int(0) NULL DEFAULT NULL,
  `update_date` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_sys_users
-- ----------------------------
INSERT INTO `t_sys_users` VALUES (1, 1, '15398027227', 'A1qg7r2PRg5OTFDofDnxVel+QCSYdhSCGrwVZwwbN8I=', 1, '2024-09-08 17:25:33', NULL, NULL);
INSERT INTO `t_sys_users` VALUES (3, 2, '515382435@qq.com', 'A1qg7r2PRg5OTFDofDnxVel+QCSYdhSCGrwVZwwbN8I=', 1, '2024-09-19 08:55:54', NULL, NULL);

SET FOREIGN_KEY_CHECKS = 1;
