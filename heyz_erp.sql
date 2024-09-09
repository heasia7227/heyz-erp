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

 Date: 09/09/2024 17:44:35
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for t_sys_departments
-- ----------------------------
DROP TABLE IF EXISTS `t_sys_departments`;
CREATE TABLE `t_sys_departments`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `parent_id` int(0) NULL DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `create_by` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `create_date` datetime(0) NULL DEFAULT NULL,
  `update_by` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `update_date` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_sys_departments
-- ----------------------------
INSERT INTO `t_sys_departments` VALUES (1, '111', NULL, '111111', NULL, NULL, NULL, NULL);
INSERT INTO `t_sys_departments` VALUES (2, '222', 1, '222222', NULL, NULL, NULL, NULL);

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
  `create_by` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `create_date` datetime(0) NULL DEFAULT NULL,
  `update_by` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `update_date` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_sys_menus
-- ----------------------------
INSERT INTO `t_sys_menus` VALUES ('01', '项目管理', 'FolderOpenOutlined', NULL, NULL, 1, 'enable', NULL, '2024-09-06 17:54:10', NULL, '2024-09-06 17:54:29');
INSERT INTO `t_sys_menus` VALUES ('0101', '项目计划', NULL, '01', '/projects/planning', 1, 'enable', NULL, '2024-09-06 17:57:41', NULL, '2024-09-06 17:57:43');
INSERT INTO `t_sys_menus` VALUES ('0102', '项目进度', NULL, '01', '/projects/schedule', 2, 'enable', NULL, '2024-09-06 17:58:52', NULL, '2024-09-06 17:58:55');
INSERT INTO `t_sys_menus` VALUES ('0103', '项目成果', NULL, '01', '/projects/achievement', 3, 'enable', NULL, '2024-09-06 20:42:13', NULL, '2024-09-06 20:42:17');
INSERT INTO `t_sys_menus` VALUES ('0104', '项目风险', NULL, '01', '/projects/risk', 4, 'enable', NULL, '2024-09-06 20:43:55', NULL, '2024-09-06 20:43:58');
INSERT INTO `t_sys_menus` VALUES ('02', '财务管理', 'MoneyCollectOutlined', NULL, NULL, 2, 'enable', NULL, '2024-09-06 21:44:58', NULL, '2024-09-06 21:45:01');
INSERT INTO `t_sys_menus` VALUES ('0201', '会计核算', NULL, '02', '/financial/accounting', 1, 'enable', NULL, '2024-09-06 21:46:32', NULL, '2024-09-06 21:46:34');
INSERT INTO `t_sys_menus` VALUES ('0202', '发票管理', NULL, '02', '/financial/invoice', 2, 'enable', NULL, '2024-09-06 21:48:01', NULL, '2024-09-06 21:48:04');
INSERT INTO `t_sys_menus` VALUES ('0203', '费用管理', NULL, '02', '/financial/expense', 3, 'enable', NULL, '2024-09-06 21:48:49', NULL, '2024-09-06 21:48:51');
INSERT INTO `t_sys_menus` VALUES ('0204', '财务报表', NULL, '02', '/financial/report', 4, 'enable', NULL, '2024-09-06 21:49:39', NULL, '2024-09-06 21:49:42');
INSERT INTO `t_sys_menus` VALUES ('0205', '财务预算', NULL, '02', '/financial/budget', 5, 'enable', NULL, '2024-09-06 21:50:57', NULL, '2024-09-06 21:50:59');
INSERT INTO `t_sys_menus` VALUES ('0206', '财务分析', NULL, '02', '/financial/analysis', 6, 'enable', NULL, '2024-09-06 21:51:43', NULL, '2024-09-06 21:51:46');
INSERT INTO `t_sys_menus` VALUES ('0207', '财务审计', NULL, '02', '/financial/auditing', 7, 'enable', NULL, '2024-09-06 21:53:00', NULL, '2024-09-06 21:53:02');
INSERT INTO `t_sys_menus` VALUES ('0208', '财务决策', NULL, '02', '/financial/decision', 8, 'enable', NULL, '2024-09-06 21:53:56', NULL, '2024-09-06 21:53:58');
INSERT INTO `t_sys_menus` VALUES ('03', '生产管理', 'AppstoreAddOutlined', NULL, NULL, 3, 'enable', NULL, '2024-09-06 21:56:29', NULL, '2024-09-06 21:56:32');
INSERT INTO `t_sys_menus` VALUES ('0301', '生产计划', NULL, '03', '/production/planning', 1, 'enable', NULL, '2024-09-06 21:57:25', NULL, '2024-09-06 21:57:29');
INSERT INTO `t_sys_menus` VALUES ('0302', '物料需求计划', NULL, '03', '/production/mrp', 2, 'enable', NULL, '2024-09-06 21:58:20', NULL, '2024-09-06 21:58:23');
INSERT INTO `t_sys_menus` VALUES ('0303', '能力需求计划', NULL, '03', '/production/crp', 3, 'enable', NULL, '2024-09-06 21:58:59', NULL, '2024-09-06 21:59:03');
INSERT INTO `t_sys_menus` VALUES ('0304', '车间控制', NULL, '03', '/production/shop-control', 4, 'enable', NULL, '2024-09-06 21:59:59', NULL, '2024-09-06 22:00:01');
INSERT INTO `t_sys_menus` VALUES ('0305', '制造标准', NULL, '03', '/production/manufacture-standard', 5, 'enable', NULL, '2024-09-06 22:01:00', NULL, '2024-09-06 22:01:02');
INSERT INTO `t_sys_menus` VALUES ('0306', '生产订单', NULL, '03', '/production/order', 6, 'enable', NULL, '2024-09-06 22:01:47', NULL, '2024-09-06 22:01:50');
INSERT INTO `t_sys_menus` VALUES ('0307', '生产进度', NULL, '03', '/production/schedule', 7, 'enable', NULL, '2024-09-06 22:02:47', NULL, '2024-09-06 22:02:49');
INSERT INTO `t_sys_menus` VALUES ('0308', '生产成本', NULL, '03', '/production/costing', 8, 'enable', NULL, '2024-09-06 22:03:38', NULL, '2024-09-06 22:03:40');
INSERT INTO `t_sys_menus` VALUES ('04', '采购管理', 'TruckOutlined', NULL, NULL, 4, 'enable', NULL, '2024-09-06 22:04:10', NULL, '2024-09-06 22:04:12');
INSERT INTO `t_sys_menus` VALUES ('0401', '采购计划', NULL, '04', '/purchasing/planning', 1, 'enable', NULL, '2024-09-06 22:05:25', NULL, '2024-09-06 22:05:28');
INSERT INTO `t_sys_menus` VALUES ('0402', '采购订单', NULL, '04', '/purchasing/order', 2, 'enable', NULL, '2024-09-06 22:06:09', NULL, '2024-09-06 22:06:13');
INSERT INTO `t_sys_menus` VALUES ('0403', '采购收货', NULL, '04', '/purchasing/receiving', 3, 'enable', NULL, '2024-09-06 22:07:00', NULL, '2024-09-06 22:07:05');
INSERT INTO `t_sys_menus` VALUES ('05', '销售管理', 'ShareAltOutlined', NULL, NULL, 5, 'enable', NULL, '2024-09-06 22:08:17', NULL, '2024-09-06 22:08:19');
INSERT INTO `t_sys_menus` VALUES ('0501', '客户关系管理(CRM)', NULL, '05', NULL, 1, 'enable', NULL, '2024-09-06 22:08:50', NULL, '2024-09-06 22:08:52');
INSERT INTO `t_sys_menus` VALUES ('050101', '客户档案', NULL, '0501', '/selling/crm/customer-archives', 1, 'enable', NULL, '2024-09-06 22:10:22', NULL, '2024-09-06 22:10:24');
INSERT INTO `t_sys_menus` VALUES ('050102', '客户投诉', NULL, '0501', '/selling/crm/customer-complaints', 2, 'enable', NULL, '2024-09-06 22:11:26', NULL, '2024-09-06 22:11:28');
INSERT INTO `t_sys_menus` VALUES ('050103', '客户满意度调查', NULL, '0501', '/selling/crm/satisfaction-surveys', 3, 'enable', NULL, '2024-09-06 22:12:40', NULL, '2024-09-06 22:12:43');
INSERT INTO `t_sys_menus` VALUES ('050104', '客户关怀', NULL, '0501', '/selling/crm/customer-cares', 4, 'enable', NULL, '2024-09-06 22:13:34', NULL, '2024-09-06 22:13:37');
INSERT INTO `t_sys_menus` VALUES ('0502', '销售管理', NULL, '05', NULL, 2, 'enable', NULL, '2024-09-06 22:14:07', NULL, '2024-09-06 22:14:09');
INSERT INTO `t_sys_menus` VALUES ('050201', '销售计划', NULL, '0502', '/selling/selling/planning', 1, 'enable', NULL, '2024-09-06 22:14:58', NULL, '2024-09-06 22:14:59');
INSERT INTO `t_sys_menus` VALUES ('050202', '销售订单', NULL, '0502', '/selling/selling/order', 2, 'enable', NULL, '2024-09-06 22:15:50', NULL, '2024-09-06 22:15:52');
INSERT INTO `t_sys_menus` VALUES ('050203', '销售出库', NULL, '0502', '/selling/selling/outbound', 3, 'enable', NULL, '2024-09-06 22:16:40', NULL, '2024-09-06 22:16:42');
INSERT INTO `t_sys_menus` VALUES ('0503', '租赁管理', NULL, '05', '/selling/leasing', 3, 'enable', NULL, '2024-09-06 22:17:45', NULL, '2024-09-06 22:17:47');
INSERT INTO `t_sys_menus` VALUES ('06', '库存管理', 'BankOutlined', NULL, NULL, 6, 'enable', NULL, '2024-09-06 22:18:48', NULL, '2024-09-06 22:18:51');
INSERT INTO `t_sys_menus` VALUES ('0601', '供应商管理', NULL, '06', '/inventory/suppliers', 1, 'enable', NULL, '2024-09-06 22:19:56', NULL, '2024-09-06 22:19:59');
INSERT INTO `t_sys_menus` VALUES ('0602', '物资管理', NULL, '06', '/inventory/materials', 2, 'enable', NULL, '2024-09-06 22:21:03', NULL, '2024-09-06 22:21:05');
INSERT INTO `t_sys_menus` VALUES ('0603', '库房管理', NULL, '06', '/inventory/warehouse', 3, 'enable', NULL, '2024-09-06 22:21:53', NULL, '2024-09-06 22:21:55');
INSERT INTO `t_sys_menus` VALUES ('0604', '库存管理', NULL, '06', '/inventory/inventory', 4, 'enable', NULL, '2024-09-06 22:23:15', NULL, '2024-09-06 22:23:17');
INSERT INTO `t_sys_menus` VALUES ('0605', '库存盘点', NULL, '06', '/inventory/counting', 5, 'enable', NULL, '2024-09-06 22:25:02', NULL, '2024-09-06 22:25:04');
INSERT INTO `t_sys_menus` VALUES ('0606', '库存调拨', NULL, '06', '/inventory/transfer', 6, 'enable', NULL, '2024-09-06 22:25:46', NULL, '2024-09-06 22:25:49');
INSERT INTO `t_sys_menus` VALUES ('0607', '库存报废', NULL, '06', '/inventory/scrapping', 7, 'enable', NULL, '2024-09-06 22:27:02', NULL, '2024-09-06 22:27:04');
INSERT INTO `t_sys_menus` VALUES ('0608', '库存预警', NULL, '06', '/inventory/early-warning', 8, 'enable', NULL, '2024-09-06 22:27:56', NULL, '2024-09-06 22:27:58');
INSERT INTO `t_sys_menus` VALUES ('07', '资产管理', 'DeploymentUnitOutlined', NULL, NULL, 7, 'enable', NULL, '2024-09-06 22:28:25', NULL, '2024-09-06 22:28:28');
INSERT INTO `t_sys_menus` VALUES ('0701', '资产档案', NULL, '07', '/asset/archives', 1, 'enable', NULL, '2024-09-06 22:30:10', NULL, '2024-09-06 22:30:12');
INSERT INTO `t_sys_menus` VALUES ('0702', '资产折旧', NULL, '07', '/asset/depreciation', 2, 'enable', NULL, '2024-09-06 22:30:44', NULL, '2024-09-06 22:30:47');
INSERT INTO `t_sys_menus` VALUES ('0703', '资产维修', NULL, '07', '/asset/maintaining', 3, 'enable', NULL, '2024-09-06 22:31:14', NULL, '2024-09-06 22:31:16');
INSERT INTO `t_sys_menus` VALUES ('0704', '资产报废', NULL, '07', '/asset/scrapping', 4, 'enable', NULL, '2024-09-06 22:31:44', NULL, '2024-09-06 22:31:46');
INSERT INTO `t_sys_menus` VALUES ('08', '综合办公', 'NodeExpandOutlined', NULL, NULL, 8, 'enable', NULL, '2024-09-06 22:32:06', NULL, '2024-09-06 22:32:08');
INSERT INTO `t_sys_menus` VALUES ('0801', '流程管理', NULL, '08', '/oa/following', 1, 'enable', NULL, '2024-09-06 22:33:43', NULL, '2024-09-06 22:33:46');
INSERT INTO `t_sys_menus` VALUES ('0802', '公文管理', NULL, '08', '/oa/official-document', 2, 'enable', NULL, '2024-09-06 22:34:17', NULL, '2024-09-06 22:34:19');
INSERT INTO `t_sys_menus` VALUES ('0803', '协同工作', NULL, '08', '/oa/teamwork', 3, 'enable', NULL, '2024-09-06 22:34:48', NULL, '2024-09-06 22:34:50');
INSERT INTO `t_sys_menus` VALUES ('09', '人力资源管理', 'UserSwitchOutlined', NULL, NULL, 9, 'enable', NULL, '2024-09-06 22:35:20', NULL, '2024-09-06 22:35:22');
INSERT INTO `t_sys_menus` VALUES ('0901', '档案管理', NULL, '09', '/hr/employee-files', 1, 'enable', NULL, '2024-09-06 22:37:43', NULL, '2024-09-06 22:37:45');
INSERT INTO `t_sys_menus` VALUES ('0902', '薪资管理', NULL, '09', '/hr/salaries', 2, 'enable', NULL, '2024-09-06 22:38:16', NULL, '2024-09-06 22:38:18');
INSERT INTO `t_sys_menus` VALUES ('0903', '绩效考核', NULL, '09', '/hr/performance-appraisal', 3, 'enable', NULL, '2024-09-06 22:38:49', NULL, '2024-09-06 22:38:50');
INSERT INTO `t_sys_menus` VALUES ('0904', '培训管理', NULL, '09', '/hr/traning', 4, 'enable', NULL, '2024-09-06 22:39:19', NULL, '2024-09-06 22:39:21');
INSERT INTO `t_sys_menus` VALUES ('0905', '招聘管理', NULL, '09', '/hr/recruiting', 5, 'enable', NULL, '2024-09-06 22:39:53', NULL, '2024-09-06 22:39:55');
INSERT INTO `t_sys_menus` VALUES ('10', '系统管理', 'SettingOutlined', NULL, NULL, 10, 'enable', NULL, '2024-09-06 22:40:18', NULL, '2024-09-06 22:40:19');
INSERT INTO `t_sys_menus` VALUES ('1001', '用户管理', NULL, '10', '/system/users', 1, 'enable', NULL, '2024-09-06 22:42:15', NULL, '2024-09-06 22:42:17');
INSERT INTO `t_sys_menus` VALUES ('1002', '角色管理', NULL, '10', '/system/roles', 2, 'enable', NULL, '2024-09-06 22:42:45', NULL, '2024-09-06 22:42:47');
INSERT INTO `t_sys_menus` VALUES ('1003', '部门管理', NULL, '10', '/system/departments', 3, 'enable', NULL, '2024-09-06 22:43:16', NULL, '2024-09-06 22:43:18');
INSERT INTO `t_sys_menus` VALUES ('1004', '菜单管理', NULL, '10', '/system/menus', 4, 'enable', NULL, '2024-09-06 22:43:45', NULL, '2024-09-06 22:43:47');
INSERT INTO `t_sys_menus` VALUES ('1005', '系统日志', NULL, '10', '/system/logs', 5, 'enable', NULL, '2024-09-06 22:44:14', NULL, '2024-09-06 22:44:16');

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
  `role_id` int(0) NOT NULL,
  `menu_id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `create_by` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `create_date` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`role_id`, `menu_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_sys_role_menu
-- ----------------------------
INSERT INTO `t_sys_role_menu` VALUES (1, '10', '1', '2024-09-08 17:29:22');
INSERT INTO `t_sys_role_menu` VALUES (1, '1001', '1', '2024-09-08 17:30:03');
INSERT INTO `t_sys_role_menu` VALUES (1, '1002', '1', '2024-09-08 17:30:19');
INSERT INTO `t_sys_role_menu` VALUES (1, '1003', '1', '2024-09-08 17:31:29');
INSERT INTO `t_sys_role_menu` VALUES (1, '1004', '1', '2024-09-08 17:31:37');
INSERT INTO `t_sys_role_menu` VALUES (1, '1005', '1', '2024-09-08 17:31:51');

-- ----------------------------
-- Table structure for t_sys_role_user
-- ----------------------------
DROP TABLE IF EXISTS `t_sys_role_user`;
CREATE TABLE `t_sys_role_user`  (
  `role_id` int(0) NOT NULL,
  `user_id` int(0) NOT NULL,
  `create_by` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `create_date` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`role_id`, `user_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_sys_role_user
-- ----------------------------
INSERT INTO `t_sys_role_user` VALUES (1, 1, '1', '2024-09-08 17:28:46');

-- ----------------------------
-- Table structure for t_sys_roles
-- ----------------------------
DROP TABLE IF EXISTS `t_sys_roles`;
CREATE TABLE `t_sys_roles`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `create_by` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `create_date` datetime(0) NULL DEFAULT NULL,
  `update_by` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `update_date` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_sys_roles
-- ----------------------------
INSERT INTO `t_sys_roles` VALUES (1, '系统管理员', '拥有系统管理权限', '1', '2024-09-08 17:28:32', NULL, NULL);

-- ----------------------------
-- Table structure for t_sys_users
-- ----------------------------
DROP TABLE IF EXISTS `t_sys_users`;
CREATE TABLE `t_sys_users`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `department_id` int(0) NULL DEFAULT NULL,
  `birthday` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `gender` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `phone_number` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `status` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `create_by` int(0) NULL DEFAULT NULL,
  `create_date` datetime(0) NULL DEFAULT NULL,
  `update_by` int(0) NULL DEFAULT NULL,
  `update_date` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_sys_users
-- ----------------------------
INSERT INTO `t_sys_users` VALUES (1, 'Admin', NULL, NULL, NULL, '15398027227', '515382435@qq.com', 'enable', 'e10adc3949ba59abbe56e057f20f883e', 1, '2024-09-08 17:25:33', NULL, NULL);

SET FOREIGN_KEY_CHECKS = 1;
