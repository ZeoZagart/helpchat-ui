import React from "react";

export function VStack({ children }: {children: React.ReactNode}) {
    return <div className="flex flex-col flex-grow space-y-4">{children}</div>;
}

export function HStack({ children }: {children: React.ReactNode}) {
    return <div className="flex space-x-4">{children}</div>;
}
