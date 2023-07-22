import React from 'react';

export function Screen({ children }: {children: React.ReactNode}) {
    return <div className="flex flex-col w-full h-screen p-4">{children}</div>;
}
