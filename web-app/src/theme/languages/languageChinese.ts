import { LANGUAGE_KEYS } from "./languageKeys";

export const languageChinese: { [key: string]: string } = {
    [LANGUAGE_KEYS.FIRST_MENU_MANUFACTURE]: "生产管理",
    [LANGUAGE_KEYS.FIRST_MENU_INVENTORY]: "库存管理",
    [LANGUAGE_KEYS.FIRST_MENU_PURCHASING]: "采购管理",
    [LANGUAGE_KEYS.FIRST_MENU_SALES]: "销售管理",
    [LANGUAGE_KEYS.FIRST_MENU_FINANCE]: "财务管理",
    [LANGUAGE_KEYS.FIRST_MENU_PROJECTS]: "项目管理",
    [LANGUAGE_KEYS.FIRST_MENU_ASSETS]: "资产管理",
    [LANGUAGE_KEYS.FIRST_MENU_OFFICE_AUTOMATION]: "综合办公",
    [LANGUAGE_KEYS.FIRST_MENU_HUMAN_RESOURCE]: "人力资源管理",
    [LANGUAGE_KEYS.FIRST_MENU_SYSTEM_MANAGEMENT]: "系统管理",

    //MANUFACTURE
    [LANGUAGE_KEYS.SUB_MENU_MANUFACTURE_PLAN]: "生产计划",
    [LANGUAGE_KEYS.SUB_MENU_MATERIALS_PLAN]: "物料需求计划",
    [LANGUAGE_KEYS.SUB_MENU_ABILITY_PLAN]: "能力需求计划",
    [LANGUAGE_KEYS.SUB_MENU_PLANT_CONTROL]: "车间控制",
    [LANGUAGE_KEYS.SUB_MENU_MANUFACTURE_STANDARD]: "制造标准",
    [LANGUAGE_KEYS.SUB_MENU_MANUFACTURE_ORDER]: "生产订单",
    [LANGUAGE_KEYS.SUB_MENU_MANUFACTURE_PROGRESS]: "生产进度",
    [LANGUAGE_KEYS.SUB_MENU_MANUFACTURE_COST]: "生产成本",

    //INVENTORY
    [LANGUAGE_KEYS.SUB_MENU_SUPPLIERS]: "供应商管理",
    [LANGUAGE_KEYS.SUB_MENU_MATERIALS]: "物资管理",
    [LANGUAGE_KEYS.SUB_MENU_WAREHOUSE]: "库房管理",
    [LANGUAGE_KEYS.SUB_MENU_INVENTORY]: "库存管理",
    [LANGUAGE_KEYS.SUB_MENU_COUNTING]: "库存盘点",
    [LANGUAGE_KEYS.SUB_MENU_TRANSFER]: "库存调拨",
    [LANGUAGE_KEYS.SUB_MENU_SCRAP]: "库存报废",
    [LANGUAGE_KEYS.SUB_MENU_EARLY_WARNING]: "库存预警",

    //PURCHASING
    [LANGUAGE_KEYS.SUB_MENU_PLAN]: "采购计划",
    [LANGUAGE_KEYS.SUB_MENU_ORDER]: "采购订单",
    [LANGUAGE_KEYS.SUB_MENU_TAKE_DELIVERY]: "采购收货",

    //SALES
    [LANGUAGE_KEYS.SUB_MENU_CRM]: "CRM",
    [LANGUAGE_KEYS.SUB_MENU_SALES]: "销售管理",
    [LANGUAGE_KEYS.SUB_MENU_RENTAL]: "租赁管理",

    //FINANCE
    [LANGUAGE_KEYS.SUB_MENU_ACCOUNTING]: "会计核算",
    [LANGUAGE_KEYS.SUB_MENU_INVOICING]: "发票管理",
    [LANGUAGE_KEYS.SUB_MENU_EXPENSES]: "费用管理",
    [LANGUAGE_KEYS.SUB_MENU_SPREADSHEET]: "财务报表",
    [LANGUAGE_KEYS.SUB_MENU_BUDGET]: "财务预算",
    [LANGUAGE_KEYS.SUB_MENU_ANALYSIS]: "财务分析",
    [LANGUAGE_KEYS.SUB_MENU_AUDIT]: "财务审计",
    [LANGUAGE_KEYS.SUB_MENU_DECISION]: "财务决策",

    //PROJECTS
    [LANGUAGE_KEYS.SUB_MENU_PROJECTS_PLAN]: "项目计划",
    [LANGUAGE_KEYS.SUB_MENU_PROJECTS_PROGRESS]: "项目进度",
    [LANGUAGE_KEYS.SUB_MENU_PROJECTS_ACHIEVEMENT]: "项目成果",
    [LANGUAGE_KEYS.SUB_MENU_PROJECTS_RISK]: "项目风险",

    //ASSETS
    [LANGUAGE_KEYS.SUB_MENU_ASSETS_ARCHIVES]: "资产档案",
    [LANGUAGE_KEYS.SUB_MENU_ASSETS_DEPRECIATION]: "资产折旧",
    [LANGUAGE_KEYS.SUB_MENU_ASSETS_MAINTENANCE]: "资产维修",
    [LANGUAGE_KEYS.SUB_MENU_ASSETS_RETIREMENT]: "资产报废",

    //OFFICE_AUTOMATION
    [LANGUAGE_KEYS.SUB_MENU_PROCESS_MANAGEMENT]: "流程管理",
    [LANGUAGE_KEYS.SUB_MENU_OFFICIAL_DOCUMENTS]: "公文管理",
    [LANGUAGE_KEYS.SUB_MENU_TEAMWORK]: "协同工作",

    //HUMAN_RESOURCE
    [LANGUAGE_KEYS.SUB_MENU_EMPLOYEES]: "员工档案",
    [LANGUAGE_KEYS.SUB_MENU_SALARIES]: "薪资管理",
    [LANGUAGE_KEYS.SUB_MENU_PERFORMANCE]: "绩效管理",
    [LANGUAGE_KEYS.SUB_MENU_TRAINING]: "培训管理",

    //SYSTEM_MANAGEMENT
    [LANGUAGE_KEYS.SUB_MENU_USERS]: "用户管理",
    [LANGUAGE_KEYS.SUB_MENU_ROLES]: "角色管理",
    [LANGUAGE_KEYS.SUB_MENU_DEPARTMENTS]: "部门管理",
    [LANGUAGE_KEYS.SUB_MENU_MENUS]: "菜单管理",
    [LANGUAGE_KEYS.SUB_MENU_LOGS]: "系统日志",

    //INVENTORY -> SUPPLIERS -> ARCHIVES
    [LANGUAGE_KEYS.INVENTORY_SUPPLIERS_ARCHIVES]: "供应商档案",
    [LANGUAGE_KEYS.INVENTORY_SUPPLIERS_ARCHIVE_TITLE]: "供应商名称",
    [LANGUAGE_KEYS.INVENTORY_SUPPLIERS_ARCHIVE_RESPONSIBLE_PERSON]: "负责人",
    [LANGUAGE_KEYS.INVENTORY_SUPPLIERS_ARCHIVE_GENDER]: "性别",
    [LANGUAGE_KEYS.INVENTORY_SUPPLIERS_ARCHIVE_CONTACT_NUMBER]: "联系电话",
    [LANGUAGE_KEYS.INVENTORY_SUPPLIERS_ARCHIVE_ADDRESS]: "通讯地址",
    [LANGUAGE_KEYS.INVENTORY_SUPPLIERS_ARCHIVE_REMARKS]: "备注",
    [LANGUAGE_KEYS.INVENTORY_SUPPLIERS_ARCHIVE_WEB_URL]: "网址",
    [LANGUAGE_KEYS.INVENTORY_SUPPLIERS_ARCHIVE_CREATE_DATE_TIME]: "添加时间",
    [LANGUAGE_KEYS.INVENTORY_SUPPLIERS_ARCHIVE_CREATE]: "新增供应商",
    [LANGUAGE_KEYS.INVENTORY_SUPPLIERS_ARCHIVE_EDIT]: "编辑供应商",

    //INVENTORY -> SUPPLIERS -> EVALUATION
    [LANGUAGE_KEYS.INVENTORY_SUPPLIERS_EVALUATION]: "供应商评估",
    [LANGUAGE_KEYS.INVENTORY_SUPPLIERS_EVALUATION_LIST]: "评估列表",
    [LANGUAGE_KEYS.INVENTORY_SUPPLIERS_EVALUATION_CREATE]: "新增评估",
    [LANGUAGE_KEYS.INVENTORY_SUPPLIERS_EVALUATION_AVERAGE_SCORE]: "平均分数",
    [LANGUAGE_KEYS.INVENTORY_SUPPLIERS_EVALUATION_SCORE]: "评估分数",
    [LANGUAGE_KEYS.INVENTORY_SUPPLIERS_EVALUATION_NOTES]: "评估说明",

    //INVENTORY -> SUPPLIERS -> CONTRACTS
    [LANGUAGE_KEYS.INVENTORY_SUPPLIERS_CONTRACTS]: "供应商合同管理",
    [LANGUAGE_KEYS.INVENTORY_SUPPLIERS_CONTRACT_LIST]: "合同列表",
    [LANGUAGE_KEYS.INVENTORY_SUPPLIERS_CONTRACT_ID]: "合同编号",
    [LANGUAGE_KEYS.INVENTORY_SUPPLIERS_CONTRACT_TITLE]: "合同标题",
    [LANGUAGE_KEYS.INVENTORY_SUPPLIERS_CONTRACT_TOTAL_PRICE]: "合同总价",
    [LANGUAGE_KEYS.INVENTORY_SUPPLIERS_CONTRACT_ATTACHMENT]: "合同附件",
    [LANGUAGE_KEYS.INVENTORY_SUPPLIERS_CONTRACT_CREATE]: "新增合同",

    //INVENTORY -> SUPPLIERS -> PAYMENT
    [LANGUAGE_KEYS.INVENTORY_SUPPLIERS_PAYMENT]: "供应商付款",
    [LANGUAGE_KEYS.INVENTORY_SUPPLIERS_PAYMENT_CONTRACT_TOTAL_PRICE]: "合同总额",
    [LANGUAGE_KEYS.INVENTORY_SUPPLIERS_PAYMENT_PAID_TOTAL_PRICE]: "付款总额",
    [LANGUAGE_KEYS.INVENTORY_SUPPLIERS_PAYMENT_LIST]: "付款记录",
    [LANGUAGE_KEYS.INVENTORY_SUPPLIERS_PAYMENT_CREATE]: "新增付款",
    [LANGUAGE_KEYS.INVENTORY_SUPPLIERS_PAYMENT_PAID_AMOUNT]: "付款金额",
    [LANGUAGE_KEYS.INVENTORY_SUPPLIERS_PAYMENT_NOTES]: "付款说明",
    [LANGUAGE_KEYS.INVENTORY_SUPPLIERS_PAYMENT_ATTACHMENT]: "付款凭证",

    //INVENTORY -> MATERIALS -> MATERIALS
    [LANGUAGE_KEYS.INVENTORY_MATERIALS]: "物资管理",
    [LANGUAGE_KEYS.INVENTORY_MATERIAL]: "物资",
    [LANGUAGE_KEYS.INVENTORY_MATERIAL_CODE]: "物资编码",
    [LANGUAGE_KEYS.INVENTORY_MATERIAL_NAME]: "物资名称",
    [LANGUAGE_KEYS.INVENTORY_MATERIAL_CATEGORY]: "物资分类",
    [LANGUAGE_KEYS.INVENTORY_MATERIAL_DEPARTMENT]: "所属单位",
    [LANGUAGE_KEYS.INVENTORY_MATERIAL_REGULAR_MAINTENANCE_FREQUENCY]: "定期保养频次",
    [LANGUAGE_KEYS.INVENTORY_MATERIAL_STATUS]: "物资状态",
    [LANGUAGE_KEYS.INVENTORY_MATERIAL_CREATE]: "新增物资",
    [LANGUAGE_KEYS.INVENTORY_MATERIAL_EDIT]: "编辑物资",
    [LANGUAGE_KEYS.INVENTORY_MATERIAL_REMOVE]: "删除物资",
    [LANGUAGE_KEYS.INVENTORY_MATERIAL_REMOVE_DESCRIPTION]: "确定删除当前物资?",
    [LANGUAGE_KEYS.INVENTORY_MATERIAL_ENABLE]: "启用物资",
    [LANGUAGE_KEYS.INVENTORY_MATERIAL_ENABLE_DESCRIPTION]: "确定启用当前物资?",
    [LANGUAGE_KEYS.INVENTORY_MATERIAL_DISABLE]: "禁用物资",
    [LANGUAGE_KEYS.INVENTORY_MATERIAL_DISABLE_DESCRIPTION]: "确定禁用当前物资?",

    //INVENTORY -> MATERIALS -> CATEGORIES
    [LANGUAGE_KEYS.INVENTORY_MATERIALS_CATEGORIES]: "分类管理",
    [LANGUAGE_KEYS.INVENTORY_MATERIALS_CATEGORY]: "分类",
    [LANGUAGE_KEYS.INVENTORY_MATERIALS_PARENT_CATEGORY]: "父级分类",
    [LANGUAGE_KEYS.INVENTORY_MATERIALS_CATEGORY_TITLE]: "分类名称",
    [LANGUAGE_KEYS.INVENTORY_MATERIALS_CATEGORY_CODE]: "分类编码",
    [LANGUAGE_KEYS.INVENTORY_MATERIALS_CATEGORY_CREATE]: "新增分类",
    [LANGUAGE_KEYS.INVENTORY_MATERIALS_CATEGORY_EDIT]: "编辑分类",
    [LANGUAGE_KEYS.INVENTORY_MATERIALS_CATEGORY_REMOVE]: "删除分类",
    [LANGUAGE_KEYS.INVENTORY_MATERIALS_CATEGORY_REMOVE_DESCRIPTION]: "确定删除当前分类?",
    [LANGUAGE_KEYS.INVENTORY_MATERIALS_CATEGORY_ENABLE]: "启用分类",
    [LANGUAGE_KEYS.INVENTORY_MATERIALS_CATEGORY_ENABLE_DESCRIPTION]: "确定启用当前分类?",
    [LANGUAGE_KEYS.INVENTORY_MATERIALS_CATEGORY_DISABLE]: "禁用分类",
    [LANGUAGE_KEYS.INVENTORY_MATERIALS_CATEGORY_DISABLE_DESCRIPTION]: "确定禁用当前分类?",

    //INVENTORY -> WAREHOUSE
    [LANGUAGE_KEYS.INVENTORY_WAREHOUSE_TITLE]: "库房名称",
    [LANGUAGE_KEYS.INVENTORY_WAREHOUSE_DEPARTMENT]: "所属单位",
    [LANGUAGE_KEYS.INVENTORY_WAREHOUSE_ADDRESS]: "所在位置",
    [LANGUAGE_KEYS.INVENTORY_WAREHOUSE_POSITION]: "地理位置",
    [LANGUAGE_KEYS.INVENTORY_WAREHOUSE_LEVEL]: "库房等级",
    [LANGUAGE_KEYS.INVENTORY_WAREHOUSE_ADMINISTRATOR]: "库房管理员",
    [LANGUAGE_KEYS.INVENTORY_WAREHOUSE_CONTACT_NUMBER]: "联系电话",
    [LANGUAGE_KEYS.INVENTORY_WAREHOUSE_CREATE]: "新增库房",
    [LANGUAGE_KEYS.INVENTORY_WAREHOUSE_EDIT]: "编辑库房",
    [LANGUAGE_KEYS.INVENTORY_WAREHOUSE_REMOVE]: "删除库房",
    [LANGUAGE_KEYS.INVENTORY_WAREHOUSE_REMOVE_DESCRIPTION]: "确定删除当前库房?",
    [LANGUAGE_KEYS.INVENTORY_WAREHOUSE_ENABLE]: "启用库房",
    [LANGUAGE_KEYS.INVENTORY_WAREHOUSE_ENABLE_DESCRIPTION]: "确定启用当前库房?",
    [LANGUAGE_KEYS.INVENTORY_WAREHOUSE_DISABLE]: "禁用库房",
    [LANGUAGE_KEYS.INVENTORY_WAREHOUSE_DISABLE_DESCRIPTION]: "确定禁用当前库房?",

    //INVENTORY -> INVENTORY
    [LANGUAGE_KEYS.INVENTORY_MATERIAL_COUNT]: "物资数量",

    //INVENTORY -> COUNTING -> TEMPORARY
    [LANGUAGE_KEYS.INVENTORY_COUNTING_TEMPORARY]: "临时盘点",
    [LANGUAGE_KEYS.INVENTORY_COUNTING_TEMPORARY_INITIATE]: "发起盘点",
    [LANGUAGE_KEYS.INVENTORY_COUNTING_DATE]: "盘点日期",
    [LANGUAGE_KEYS.INVENTORY_COUNTING_RESPONSIBLE_PERSON]: "盘点负责人",
    [LANGUAGE_KEYS.INVENTORY_COUNTING_SCENE_RESPONSIBLE_PERSON]: "现场负责人",
    [LANGUAGE_KEYS.INVENTORY_COUNTING_STATUS]: "状态",

    //INVENTORY -> COUNTING -> REGULAR
    [LANGUAGE_KEYS.INVENTORY_COUNTING_REGULAR]: "定期盘点",
    [LANGUAGE_KEYS.INVENTORY_COUNTING_REGULAR_RULE_SETUP]: "规则设置",

    //INVENTORY -> COUNTING -> DIFFERENCE
    [LANGUAGE_KEYS.INVENTORY_COUNTING_DIFFERENCE]: "差异处理",

    [LANGUAGE_KEYS.COMMON_OPERATION]: "操作",
    [LANGUAGE_KEYS.COMMON_CREATE]: "新增",
    [LANGUAGE_KEYS.COMMON_EDIT]: "编辑",
    [LANGUAGE_KEYS.COMMON_REMOVE]: "删除",
    [LANGUAGE_KEYS.COMMON_ENABLE]: "启用",
    [LANGUAGE_KEYS.COMMON_DISABLE]: "禁用",
    [LANGUAGE_KEYS.COMMON_DETAILS]: "详情",
    [LANGUAGE_KEYS.COMMON_PREVIEW]: "预览",
    [LANGUAGE_KEYS.COMMON_DOWNLOAD]: "下载",
    [LANGUAGE_KEYS.COMMON_SELECT_FILE]: "选择文件",
};
