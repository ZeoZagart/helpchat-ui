import React from 'react';

export function Screen({ children }: { children: React.ReactNode }) {
    return <div className="flex h-screen w-screen" style={{margin: 0, padding: 0}}>{children}</div>;
}
