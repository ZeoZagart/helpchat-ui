import React from 'react';

export function Screen({ children }: {children: React.ReactNode}) {
    return <div className="h-screen">{children}</div>;
}
