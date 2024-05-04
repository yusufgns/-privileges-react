import { PrivilegesContainer } from "./container";

export type Privilege = {
    [key: string]: string;
}

export const moderator: Readonly<Privilege> = Object.freeze({
    ADMIN: 'admin',
});

export const CustomPrivilegesComponent = ({ children, userPrivileges, componentPrivileges, active }: {
    children: React.ReactNode;
    userPrivileges: string[];
    // moderator: string[];
    componentPrivileges: string | string[];
    active: "button" | "tooltip" | "not_privileges";
}) => {
    return (
        <PrivilegesContainer
            moderator={Object.values(moderator)}
            userPrivileges={userPrivileges}
            componentPrivileges={componentPrivileges}
            active={active}
            button_container={<button>Test</button>}
            not_privileges_container={<div>Not enough privileges</div>}
            tooltip_container={<div>Tooltip</div>}
        >
            {children}
        </PrivilegesContainer>
    )
}
