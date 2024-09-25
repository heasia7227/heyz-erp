import { User } from "./system/user";
import { Department } from "./system/department";
import { Menu } from "./system/menu";
import { Role } from "./system/role";
import { ConfigureMenus } from "./system/role/configure-menus";
import { AssignUsers } from "./system/role/assign-users";
import { EmployeeFiles } from "./hr/employee-files";
import { RecruitingPlanning } from "./hr/recruiting/planning";
import { RecruitingPlanningAuditing } from "./hr/recruiting/planning/auditing";

const entities = [
    EmployeeFiles,
    User,
    Department,
    Menu,
    Role,
    ConfigureMenus,
    AssignUsers,
    RecruitingPlanning,
    RecruitingPlanningAuditing,
];

export default entities;
