import React from "react";

interface StackProps {
    children: React.ReactNode;
    overflow?: 'auto' | 'hidden' | 'scroll' | 'visible';
}

export function VStack({ children, overflow = 'auto' }: StackProps) {
    let overflowProp = 'overflow-auto';
    switch(overflow) {
        case 'scroll':
            overflowProp = `overflow-y-auto`;
            break;
        default: 
            overflowProp = `overflow-${overflow}`;
            break;
    }

    return <div className={`flex flex-col space-y-4 h-full ${overflowProp}`}>{children}</div>;
}

export function HStack({ children, overflow = 'auto' }: StackProps) {
    let overflowProp = 'overflow-auto'
    switch(overflow) {
        case 'scroll':
            overflowProp = `overflow-x-auto`
            break;
        default: 
            overflowProp = `overflow-${overflow}`
            break;
    }

    return <div className={`flex flex-row space-x-4 ${overflowProp}`}>{children}</div>;
}