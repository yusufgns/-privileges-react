import { UNLIMITED_PRIVILEGES } from "../../constants/privileges"

export const hasUnlimitedPrivileges = (privileges: string[]) => {
    return Object.values(UNLIMITED_PRIVILEGES).reduce((acc, privilege) => {
        return acc || privileges.includes(privilege);
    }, false);
};

export const PrivilegesController = (componentPrivileges: string | undefined, userPrivileges: string[] | undefined) => {
    if (componentPrivileges !== null && componentPrivileges !== undefined && userPrivileges !== null && userPrivileges !== undefined && userPrivileges?.length > 0) {
        const isHavePrivileges = userPrivileges.includes(componentPrivileges);
        const isHaveAdmin = hasUnlimitedPrivileges(userPrivileges);

        return isHavePrivileges || isHaveAdmin;
    }
};