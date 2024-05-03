import type React from 'react';

interface Props {
    children: React.ReactNode;
    condition: boolean;
}

export const ConditionalComponent = ({ children, condition }: Props) => {
    if (condition) {
        return children;
    }
    return null;
};