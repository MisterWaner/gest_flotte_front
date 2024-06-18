import { ReactNode } from "react";

export default function Wrapper({ children }: { children: ReactNode }) {
    return <div className="relative top-16 w-full overflow-hidden">{children}</div>;
}