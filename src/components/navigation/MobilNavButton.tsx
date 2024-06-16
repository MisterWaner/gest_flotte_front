import { Button } from "@/components/ui/button";
import { SheetClose } from "@/components/ui/sheet";

type MobileNavButtonProps = {
    name: string;
    href: string;
    id: number;
};

export default function MobilNavButton({
    name,
    href,
    id,
}: MobileNavButtonProps) {

    return (
        <li key={id}>
            <a href={href}>
                <SheetClose asChild>
                    <Button variant={"ghost"} className="font-bold">
                        {name}
                    </Button>
                </SheetClose>
            </a>
        </li>
    );
}
