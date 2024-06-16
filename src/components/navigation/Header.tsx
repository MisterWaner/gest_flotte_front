import { useMediaQuery } from "usehooks-ts";
import { X, Menu } from "lucide-react";

import menuLinks from "./menu";
import DesktopNavButton from "./DesktopNavButton";
import MobilNavButton from "./MobilNavButton";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

export default function Header() {
    return (
        <header className="flex justify-between p-4">
            <div>logo</div>
            <NavChoose />
        </header>
    );
}

const MenuList = ({
    children,
    className,
}: {
    className: string;
    children: ReactNode;
}) => {
    return (
        <ul
            className={className}
            onClick={(event: React.SyntheticEvent) => {
                event.preventDefault();
                const target = event.target as HTMLAnchorElement;
                const id = target.getAttribute("href")?.replace("#", "");
                const element = document.getElementById(String(id));
                element?.scrollIntoView({
                    behavior: "smooth",
                });
            }}
        >
            {children}
        </ul>
    );
};

const DesktopNav = () => {
    const links = menuLinks;

    return (
        <nav className="w-1/2">
            <MenuList className="flex justify-between">
                {links.map((link) => (
                    <DesktopNavButton key={link.id} {...link} />
                ))}
            </MenuList>
        </nav>
    );
};

const MobileNav = () => {
    const links = menuLinks;

    return (
        <nav className="md:hidden">
            <Sheet>
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
                    <MenuList className="w-full flex flex-col items-center gap-3">
                        {links.map((link) => (
                            <MobilNavButton key={link.id} {...link} />
                        ))}
                    </MenuList>
                </SheetContent>
            </Sheet>
        </nav>
    );
};

const NavChoose = () => {
    const isDesktop = useMediaQuery("(min-width: 768px)");

    if (isDesktop) {
        return <DesktopNav />;
    } else {
        return <MobileNav />;
    }
};
