export const PrivilegesController = (componentPrivileges: string | undefined, userPrivileges: string[] | undefined, moderator: string[]) => {
    if (componentPrivileges !== null && componentPrivileges !== undefined && userPrivileges !== null && userPrivileges !== undefined && userPrivileges?.length > 0) {
        const hasUserPrivileges = userPrivileges.includes(componentPrivileges);
        const hasModerator = moderator.reduce((acc, privileges) => {
            if (userPrivileges) {
              acc = userPrivileges.includes(privileges);
            }
            return acc;
        }, false);

        if(hasModerator) {
            return true;
        }

        return hasUserPrivileges || hasModerator;
    }
};