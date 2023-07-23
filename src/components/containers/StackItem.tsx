import React from "react";

interface StackItemProps {
    children: React.ReactNode;
	flexType?: 'fix' | 'auto' | 'shrink' | 'grow' | 'equal' | 'fill-parent';
}

export function StackItem({ children, flexType = 'auto' }: StackItemProps) {
    let flexProp = '';
    switch(flexType) {
        case 'auto':
            flexProp = `flex-auto`;
            break;
        case 'fix': 
            flexProp = 'flex-none';
            break;
        case 'shrink':
            flexProp = 'flex-shrink-0'; // Updated to make sure it can shrink
            break;
        case 'grow':
            flexProp = 'flex-grow'; // Updated to grow if needed
            break;
        case 'equal':
            flexProp = 'flex-1';
            break;
        case 'fill-parent':
            flexProp = 'flex';
            break;
        default: 
            flexProp = 'flex-grow';
    }

    return <div className={`${flexProp} overflow-hidden`}>{children}</div>;
}



