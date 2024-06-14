import { Button } from "@/components/ui/button";

type DesktopNavButtonProps = {
    name: string;
    href: string;
    id: number;
};

export default function DesktopNavButton({
    name,
    href,
    id,
}: DesktopNavButtonProps) {
    return (
        <li key={id}>
            <a href={href}>
                <Button variant={"ghost"} className="font-bold">
                    {name.toUpperCase()}
                </Button>
            </a>
        </li>
    );
}
