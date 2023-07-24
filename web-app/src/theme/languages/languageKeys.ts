// Global Language Keys

export enum LANGUAGE_KEYS {
    FIRST_MENU_MANUFACTURE = "FIRST_MENU_MANUFACTURE",
    FIRST_MENU_INVENTORY = "FIRST_MENU_INVENTORY",
    FIRST_MENU_PURCHASING = "FIRST_MENU_PURCHASING",
    FIRST_MENU_SALES = "FIRST_MENU_SALES",
    FIRST_MENU_FINANCE = "FIRST_MENU_FINANCE",
    FIRST_MENU_PROJECTS = "FIRST_MENU_PROJECTS",
    FIRST_MENU_ASSETS = "FIRST_MENU_ASSETS",
    FIRST_MENU_OFFICE_AUTOMATION = "FIRST_MENU_OFFICE_AUTOMATION",
    FIRST_MENU_HUMAN_RESOURCE = "FIRST_MENU_HUMAN_RESOURCE",
    FIRST_MENU_SYSTEM_MANAGEMENT = "FIRST_MENU_SYSTEM_MANAGEMENT",

    //MANUFACTURE
    SUB_MENU_MANUFACTURE_PLAN = "SUB_MENU_MANUFACTURE_PLAN",
    SUB_MENU_MATERIALS_PLAN = "SUB_MENU_MATERIALS_PLAN",
    SUB_MENU_ABILITY_PLAN = "SUB_MENU_ABILITY_PLAN",
    SUB_MENU_PLANT_CONTROL = "SUB_MENU_PLANT_CONTROL",
    SUB_MENU_MANUFACTURE_STANDARD = "SUB_MENU_MANUFACTURE_STANDARD",
    SUB_MENU_MANUFACTURE_ORDER = "SUB_MENU_MANUFACTURE_ORDER",
    SUB_MENU_MANUFACTURE_PROGRESS = "SUB_MENU_MANUFACTURE_PROGRESS",
    SUB_MENU_MANUFACTURE_COST = "SUB_MENU_MANUFACTURE_COST",

    //INVENTORY
    SUB_MENU_SUPPLIERS = "SUB_MENU_SUPPLIERS",
    SUB_MENU_MATERIALS = "SUB_MENU_MATERIALS",
    SUB_MENU_WAREHOUSE = "SUB_MENU_WAREHOUSE",
    SUB_MENU_INVENTORY = "SUB_MENU_INVENTORY",
    SUB_MENU_COUNTING = "SUB_MENU_COUNTING",
    SUB_MENU_TRANSFER = "SUB_MENU_TRANSFER",
    SUB_MENU_SCRAP = "SUB_MENU_SCRAP",
    SUB_MENU_EARLY_WARNING = "SUB_MENU_EARLY_WARNING",

    //PURCHASING
    SUB_MENU_PLAN = "SUB_MENU_PLAN",
    SUB_MENU_ORDER = "SUB_MENU_ORDER",
    SUB_MENU_TAKE_DELIVERY = "SUB_MENU_TAKE_DELIVERY",

    //SALES
    SUB_MENU_CRM = "SUB_MENU_CRM",
    SUB_MENU_SALES = "SUB_MENU_SALES",
    SUB_MENU_RENTAL = "SUB_MENU_RENTAL",

    //FINANCE
    SUB_MENU_ACCOUNTING = "SUB_MENU_ACCOUNTING",
    SUB_MENU_INVOICING = "SUB_MENU_INVOICING",
    SUB_MENU_EXPENSES = "SUB_MENU_EXPENSES",
    SUB_MENU_SPREADSHEET = "SUB_MENU_SPREADSHEET",
    SUB_MENU_BUDGET = "SUB_MENU_BUDGET",
    SUB_MENU_ANALYSIS = "SUB_MENU_ANALYSIS",
    SUB_MENU_AUDIT = "SUB_MENU_AUDIT",
    SUB_MENU_DECISION = "SUB_MENU_DECISION",

    //PROJECTS
    SUB_MENU_PROJECTS_PLAN = "SUB_MENU_PROJECTS_PLAN",
    SUB_MENU_PROJECTS_PROGRESS = "SUB_MENU_PROJECTS_PROGRESS",
    SUB_MENU_PROJECTS_ACHIEVEMENT = "SUB_MENU_PROJECTS_ACHIEVEMENT",
    SUB_MENU_PROJECTS_RISK = "SUB_MENU_PROJECTS_RISK",

    //ASSETS
    SUB_MENU_ASSETS_ARCHIVES = "SUB_MENU_ASSETS_ARCHIVES",
    SUB_MENU_ASSETS_DEPRECIATION = "SUB_MENU_ASSETS_DEPRECIATION",
    SUB_MENU_ASSETS_MAINTENANCE = "SUB_MENU_ASSETS_MAINTENANCE",
    SUB_MENU_ASSETS_RETIREMENT = "SUB_MENU_ASSETS_RETIREMENT",

    //OFFICE_AUTOMATION
    SUB_MENU_PROCESS_MANAGEMENT = "SUB_MENU_PROCESS_MANAGEMENT",
    SUB_MENU_OFFICIAL_DOCUMENTS = "SUB_MENU_OFFICIAL_DOCUMENTS",
    SUB_MENU_TEAMWORK = "SUB_MENU_TEAMWORK",

    //HUMAN_RESOURCE
    SUB_MENU_EMPLOYEES = "SUB_MENU_EMPLOYEES",
    SUB_MENU_SALARIES = "SUB_MENU_SALARIES",
    SUB_MENU_PERFORMANCE = "SUB_MENU_PERFORMANCE",
    SUB_MENU_TRAINING = "SUB_MENU_TRAINING",

    //SYSTEM_MANAGEMENT
    SUB_MENU_USERS = "SUB_MENU_USERS",
    SUB_MENU_ROLES = "SUB_MENU_ROLES",
    SUB_MENU_DEPARTMENTS = "SUB_MENU_DEPARTMENTS",
    SUB_MENU_MENUS = "SUB_MENU_MENUS",
    SUB_MENU_LOGS = "SUB_MENU_LOGS",

    //INVENTORY -> SUPPLIERS -> ARCHIVES
    INVENTORY_SUPPLIERS_ARCHIVES = "INVENTORY_SUPPLIERS_ARCHIVES",
    INVENTORY_SUPPLIERS_ARCHIVE_TITLE = "INVENTORY_SUPPLIERS_ARCHIVE_TITLE",
    INVENTORY_SUPPLIERS_ARCHIVE_RESPONSIBLE_PERSON = "INVENTORY_SUPPLIERS_ARCHIVE_RESPONSIBLE_PERSON",
    INVENTORY_SUPPLIERS_ARCHIVE_GENDER = "INVENTORY_SUPPLIERS_ARCHIVE_GENDER",
    INVENTORY_SUPPLIERS_ARCHIVE_CONTACT_NUMBER = "INVENTORY_SUPPLIERS_ARCHIVE_CONTACT_NUMBER",
    INVENTORY_SUPPLIERS_ARCHIVE_ADDRESS = "INVENTORY_SUPPLIERS_ARCHIVE_ADDRESS",
    INVENTORY_SUPPLIERS_ARCHIVE_REMARKS = "INVENTORY_SUPPLIERS_ARCHIVE_REMARKS",
    INVENTORY_SUPPLIERS_ARCHIVE_WEB_URL = "INVENTORY_SUPPLIERS_ARCHIVE_WEB_URL",
    INVENTORY_SUPPLIERS_ARCHIVE_CREATE_DATE_TIME = "INVENTORY_SUPPLIERS_ARCHIVE_CREATE_DATE_TIME",
    INVENTORY_SUPPLIERS_ARCHIVE_CREATE = "INVENTORY_SUPPLIERS_ARCHIVE_CREATE",
    INVENTORY_SUPPLIERS_ARCHIVE_EDIT = "INVENTORY_SUPPLIERS_ARCHIVE_EDIT",

    //INVENTORY -> SUPPLIERS -> EVALUATION
    INVENTORY_SUPPLIERS_EVALUATION = "INVENTORY_SUPPLIERS_EVALUATION",
    INVENTORY_SUPPLIERS_EVALUATION_LIST = "INVENTORY_SUPPLIERS_EVALUATION_LIST",
    INVENTORY_SUPPLIERS_EVALUATION_CREATE = "INVENTORY_SUPPLIERS_EVALUATION_CREATE",
    INVENTORY_SUPPLIERS_EVALUATION_SCORE = "INVENTORY_SUPPLIERS_EVALUATION_SCORE",

    //INVENTORY -> SUPPLIERS -> CONTRACTS
    INVENTORY_SUPPLIERS_CONTRACTS = "INVENTORY_SUPPLIERS_CONTRACTS",
    INVENTORY_SUPPLIERS_CONTRACT_LIST = "INVENTORY_SUPPLIERS_CONTRACT_LIST",
    INVENTORY_SUPPLIERS_CONTRACT_ID = "INVENTORY_SUPPLIERS_CONTRACT_ID",
    INVENTORY_SUPPLIERS_CONTRACT_TITLE = "INVENTORY_SUPPLIERS_CONTRACT_TITLE",
    INVENTORY_SUPPLIERS_CONTRACT_TOTAL_PRICE = "INVENTORY_SUPPLIERS_CONTRACT_TOTAL_PRICE",
    INVENTORY_SUPPLIERS_CONTRACT_ATTACHMENT = "INVENTORY_SUPPLIERS_CONTRACT_ATTACHMENT",
    INVENTORY_SUPPLIERS_CONTRACT_CREATE = "INVENTORY_SUPPLIERS_CONTRACT_CREATE",

    //INVENTORY -> SUPPLIERS -> PAYMENT
    INVENTORY_SUPPLIERS_PAYMENT = "INVENTORY_SUPPLIERS_PAYMENT",

    //INVENTORY -> MATERIALS -> MATERIALS
    INVENTORY_MATERIALS = "INVENTORY_MATERIALS",
    INVENTORY_MATERIAL = "INVENTORY_MATERIAL",
    INVENTORY_MATERIAL_CODE = "INVENTORY_MATERIAL_CODE",
    INVENTORY_MATERIAL_NAME = "INVENTORY_MATERIAL_NAME",
    INVENTORY_MATERIAL_CATEGORY = "INVENTORY_MATERIAL_CATEGORY",
    INVENTORY_MATERIAL_DEPARTMENT = "INVENTORY_MATERIAL_DEPARTMENT",
    INVENTORY_MATERIAL_REGULAR_MAINTENANCE_FREQUENCY = "INVENTORY_MATERIAL_REGULAR_MAINTENANCE_FREQUENCY",
    INVENTORY_MATERIAL_STATUS = "INVENTORY_MATERIAL_STATUS",
    INVENTORY_MATERIAL_CREATE = "INVENTORY_MATERIAL_CREATE",
    INVENTORY_MATERIAL_EDIT = "INVENTORY_MATERIAL_EDIT",
    INVENTORY_MATERIAL_REMOVE = "INVENTORY_MATERIAL_REMOVE",
    INVENTORY_MATERIAL_REMOVE_DESCRIPTION = "INVENTORY_MATERIAL_REMOVE_DESCRIPTION",
    INVENTORY_MATERIAL_ENABLE = "INVENTORY_MATERIAL_ENABLE",
    INVENTORY_MATERIAL_ENABLE_DESCRIPTION = "INVENTORY_MATERIAL_ENABLE_DESCRIPTION",
    INVENTORY_MATERIAL_DISABLE = "INVENTORY_MATERIAL_DISABLE",
    INVENTORY_MATERIAL_DISABLE_DESCRIPTION = "INVENTORY_MATERIAL_DISABLE_DESCRIPTION",

    //INVENTORY -> MATERIALS -> CATEGORIES
    INVENTORY_MATERIALS_CATEGORIES = "INVENTORY_MATERIALS_CATEGORIES",
    INVENTORY_MATERIALS_CATEGORY = "INVENTORY_MATERIALS_CATEGORY",
    INVENTORY_MATERIALS_PARENT_CATEGORY = "INVENTORY_MATERIALS_PARENT_CATEGORY",
    INVENTORY_MATERIALS_CATEGORY_TITLE = "INVENTORY_MATERIALS_CATEGORY_TITLE",
    INVENTORY_MATERIALS_CATEGORY_CODE = "INVENTORY_MATERIALS_CATEGORY_CODE",
    INVENTORY_MATERIALS_CATEGORY_CREATE = "INVENTORY_MATERIALS_CATEGORY_CREATE",
    INVENTORY_MATERIALS_CATEGORY_EDIT = "INVENTORY_MATERIALS_CATEGORY_EDIT",
    INVENTORY_MATERIALS_CATEGORY_REMOVE = "INVENTORY_MATERIALS_CATEGORY_REMOVE",
    INVENTORY_MATERIALS_CATEGORY_REMOVE_DESCRIPTION = "INVENTORY_MATERIALS_CATEGORY_REMOVE_DESCRIPTION",
    INVENTORY_MATERIALS_CATEGORY_ENABLE = "INVENTORY_MATERIALS_CATEGORY_ENABLE",
    INVENTORY_MATERIALS_CATEGORY_ENABLE_DESCRIPTION = "INVENTORY_MATERIALS_CATEGORY_ENABLE_DESCRIPTION",
    INVENTORY_MATERIALS_CATEGORY_DISABLE = "INVENTORY_MATERIALS_CATEGORY_DISABLE",
    INVENTORY_MATERIALS_CATEGORY_DISABLE_DESCRIPTION = "INVENTORY_MATERIALS_CATEGORY_DISABLE_DESCRIPTION",

    //INVENTORY -> WAREHOUSE
    INVENTORY_WAREHOUSE_TITLE = "INVENTORY_WAREHOUSE_TITLE",
    INVENTORY_WAREHOUSE_DEPARTMENT = "INVENTORY_WAREHOUSE_DEPARTMENT",
    INVENTORY_WAREHOUSE_ADDRESS = "INVENTORY_WAREHOUSE_ADDRESS",
    INVENTORY_WAREHOUSE_POSITION = "INVENTORY_WAREHOUSE_POSITION",
    INVENTORY_WAREHOUSE_LEVEL = "INVENTORY_WAREHOUSE_LEVEL",
    INVENTORY_WAREHOUSE_ADMINISTRATOR = "INVENTORY_WAREHOUSE_ADMINISTRATOR",
    INVENTORY_WAREHOUSE_CONTACT_NUMBER = "INVENTORY_WAREHOUSE_CONTACT_NUMBER",
    INVENTORY_WAREHOUSE_CREATE = "INVENTORY_WAREHOUSE_CREATE",
    INVENTORY_WAREHOUSE_EDIT = "INVENTORY_WAREHOUSE_EDIT",
    INVENTORY_WAREHOUSE_REMOVE = "INVENTORY_WAREHOUSE_REMOVE",
    INVENTORY_WAREHOUSE_REMOVE_DESCRIPTION = "INVENTORY_WAREHOUSE_REMOVE_DESCRIPTION",
    INVENTORY_WAREHOUSE_ENABLE = "INVENTORY_WAREHOUSE_ENABLE",
    INVENTORY_WAREHOUSE_ENABLE_DESCRIPTION = "INVENTORY_WAREHOUSE_ENABLE_DESCRIPTION",
    INVENTORY_WAREHOUSE_DISABLE = "INVENTORY_WAREHOUSE_DISABLE",
    INVENTORY_WAREHOUSE_DISABLE_DESCRIPTION = "INVENTORY_WAREHOUSE_DISABLE_DESCRIPTION",

    COMMON_OPERATION = "COMMON_OPERATION",
    COMMON_CREATE = "COMMON_CREATE",
    COMMON_EDIT = "COMMON_EDIT",
    COMMON_REMOVE = "COMMON_REMOVE",
    COMMON_ENABLE = "COMMON_ENABLE",
    COMMON_DISABLE = "COMMON_DISABLE",
    COMMON_PREVIEW = "COMMON_PREVIEW",
    COMMON_DOWNLOAD = "COMMON_DOWNLOAD",
    COMMON_SELECT_FILE = "COMMON_SELECT_FILE",
}
