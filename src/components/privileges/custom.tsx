import { PrivilegesContainer } from "./container";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import WarningSVG from "@/components/icons/warning";
import { moderator } from "@/constants/privileges";

export const CustomPrivilegesComponent = ({ children, userPrivileges, componentPrivileges, active, not_privileges = "component" }: {
    children: React.ReactNode;
    userPrivileges: string[];
    // moderator: string[];
    componentPrivileges: string | string[];
    active: "button" | "tooltip" | "not_privileges";
    not_privileges?: "pages" | "component";
}) => {
    return (
        <PrivilegesContainer
            moderator={Object.values(moderator)}
            userPrivileges={userPrivileges}
            componentPrivileges={componentPrivileges}
            active={active}
            button_container={
                <Button disabled className="select-none">
                    You are not privileges for this
                </Button>
            }
            not_privileges_container={
                not_privileges === "component"
                    ? (
                        <div className="p-2 rounded-md border text-orange-600 border-orange-500 select-none bg-orange-50">
                            <WarningSVG className="w-5 h-5 mr-2 inline" />
                            You are not privileges for component
                        </div>
                    )
                    : (
                        <div className="p-2 select-none space-y-3">
                            <WarningSVG className="w-16 h-16 mr-2 inline" />
                            <p>You are not privileges for pages</p>
                            <Button>
                                Go to home
                            </Button>
                        </div>
                    )
            }
            tooltip_container={
                <TooltipProvider
                    delayDuration={0}
                >
                    <Tooltip>
                        <TooltipTrigger className="p-0 h-fit w-fit select-none">
                            {children}
                        </TooltipTrigger>
                        <TooltipContent>
                            You are not privileges for this
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            }
        />
    )
}
