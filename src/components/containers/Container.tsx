import React from "react";

interface ContainerProps {
    children: React.ReactNode;
    alignContent?: 'left' | 'right' | 'center';
}

export function Container({ children, alignContent = 'center' }: ContainerProps) {
    return <div className="flex" style={{alignContent: alignContent}}>{children}</div>;
}
