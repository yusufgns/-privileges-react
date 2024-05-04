import { moderator } from '../../constants/privileges';
import { PrivilegesController } from './controller';

export const PrivilegesTooltipController = (componentPrivileges: string, text: string, userPrivileges: string[]) => {
    if (PrivilegesController(componentPrivileges, userPrivileges, Object.values(moderator))) {
        return text;
    } else {
        return "You don't have permission to view this tooltip.";
    }
};