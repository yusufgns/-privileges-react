import { PrivilegesController } from './controller';

export const PrivilegesTooltipController = (componentPrivileges: string, text: string, userPrivileges: string[]) => {
    if (PrivilegesController(componentPrivileges, userPrivileges)) {
        return text;
    } else {
        return "You don't have permission to view this tooltip.";
    }
};