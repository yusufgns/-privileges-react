import React from 'react'
import { ConditionalComponent } from '../conditional';
import { PrivilegesController } from '../../utils/privileges';

export function PrivilegesContainer(props: {
    button_container?: React.ReactNode;
    userPrivileges?: string[];
    componentPrivileges?: string | string[];
    tooltip_container?: React.ReactNode;
    not_privileges_container?: React.ReactNode;
    children?: React.ReactNode;
    moderator: string[];
    active?: "button" | "tooltip" | "not_privileges";
}) {

    if (PrivilegesController(props.componentPrivileges, props.userPrivileges, props.moderator)) {
        return props.children;
    }

    return (
        <div>
            <ConditionalComponent condition={props.active === "button"}>
                {props.button_container}
            </ConditionalComponent>

            <ConditionalComponent condition={props.active === "tooltip"}>
                {props.tooltip_container}
            </ConditionalComponent>

            <ConditionalComponent condition={props.active === "not_privileges"}>
                {props.not_privileges_container}
            </ConditionalComponent>
        </div>
    )
}
