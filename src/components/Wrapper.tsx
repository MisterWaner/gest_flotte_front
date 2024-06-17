import { ReactNode } from "react";

export default function Wrapper({ children }: { children: ReactNode }) {
    return <div className="relative top-24 max-w-7xl mx-auto">{children}</div>;
}