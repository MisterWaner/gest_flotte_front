import menuLinks from "./menu";
import MobilNavButton from "./MobilNavButton";
import { X, Menu } from "lucide-react";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function MobileNav() {
    return (
        <nav className="md:hidden">
            <Sheet >
                <SheetTrigger asChild>
                    <Button variant="ghost">
                        <Menu />
                    </Button>
                </SheetTrigger>
                <SheetContent side={"top"}>
                    <SheetHeader className="flex flex-row justify-between items-center space-y-0">
                        <span></span>
                        <SheetClose asChild>
                            <Button variant="ghost">
                                <X />
                            </Button>
                        </SheetClose>
                    </SheetHeader>
                    <ul className="w-full flex flex-col items-center gap-3">
                        {menuLinks.map((link) => (
                            <MobilNavButton key={link.id} {...link} />
                        ))}
                    </ul>
                </SheetContent>
            </Sheet>
        </nav>
    );
}
