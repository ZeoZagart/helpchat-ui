import React from 'react';

interface TypographyProps {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'xs';
    textAlign?: 'left' | 'right' | 'center'
    className?: string;
    children: React.ReactNode;
}

export const Typography: React.FC<TypographyProps> = ({ variant = 'p', textAlign = 'left', children, className = '' }) => {
    let style = '';

    switch (variant) {
        case 'h1':
            style = 'text-5xl font-bold'; // Adjust sizes based on your preference.
            break;
        case 'h2':
            style = 'text-4xl font-bold';
            break;
        case 'h3':
            style = 'text-3xl font-semibold';
            break;
        case 'h4':
            style = 'text-2xl font-medium';
            break;
        case 'h5':
            style = 'text-xl font-medium';
            break;
        case 'h6':
            style = 'text-lg';
            break;
        case 'xs':
            style = 'text-xs';
            break;
        default:
            style = 'text-base';
    }

    // const TextComponent = variant.startsWith('h') ? variant : 'p';

    return <text
        className={`${style} ${className} overflow-hidden break-words`}
        style={{wordBreak: 'break-word', overflowY: 'auto', maxHeight: '100vh', textAlign: textAlign}}
    >
        {children}
    </text>;
};
