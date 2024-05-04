import React from 'react'
import { ConditionalComponent } from '../conditional';
import { PrivilegesController } from '../../utils/privileges';

export function PrivilegesContainer(props: {
    active_button?: boolean;
    button_container?: React.ReactNode;
    userPrivileges?: string[];
    componentPrivileges?: string;
    active_tooltip?: boolean;
    tooltip_container?: React.ReactNode;
    tooltip_text?: string;
    active_not_privileges?: boolean;
    not_privileges_container?: React.ReactNode;
    children?: React.ReactNode;
    moderator: string[];
}) {

    if (PrivilegesController(props.componentPrivileges, props.userPrivileges, props.moderator)) {
        return props.children;
    }

    return (
        <div>
            <ConditionalComponent condition={!!props.active_button}>
                {props.button_container}
            </ConditionalComponent>

            <ConditionalComponent condition={!!props.active_tooltip}>
                {props.tooltip_container}
            </ConditionalComponent>

            <ConditionalComponent condition={!!props.active_not_privileges}>
                {props.not_privileges_container}
            </ConditionalComponent>
        </div>
    )
}
