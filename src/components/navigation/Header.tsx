import { useMediaQuery } from "usehooks-ts";
import { ReactNode} from "react";
import { X, Menu } from "lucide-react";

import menuLinks from "./menu";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet";

// Header component
export default function Header() {
    return (
        <header className="w-full h-16 fixed top-0 left-0 z-50 bg-white flex items-center justify-between p-4">
            <div className="font-bold text-3xl border-2 border-black rounded-full p-2 bg-chilean-fire-500">GF</div>
            <NavChoose />
        </header>
    );
}

// MenuList
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
                console.log(target);
                const idHref = target.getAttribute("href")?.replace("#", "");
                const element = document.getElementById(String(idHref));
                console.log(element);
                element?.scrollIntoView({
                    behavior: "smooth",
                });
            }}
        >
            {children}
        </ul>
    );
};

// DesktopNav
const DesktopNav = () => {
    const links = menuLinks;

    return (
        <nav className="w-1/2">
            <MenuList className="flex justify-between">
                {links.map((link) => (
                    <li key={link.id}>
                        <Button variant={"ghost"} className="font-bold">
                            <a href={link.href}>{link.name.toUpperCase()}</a>
                        </Button>
                    </li>
                ))}
            </MenuList>
        </nav>
    );
};

// MobileNav
const MobileNav = () => {
    const links = menuLinks;

    return (
        <nav className="lg:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost">
                        <Menu />
                    </Button>
                </SheetTrigger>
                <SheetContent side="right">
                    <SheetHeader className="flex flex-row justify-between items-center space-y-0">
                        <span></span>

                        <SheetClose asChild>
                            <Button variant="ghost">
                                <X />
                            </Button>
                        </SheetClose>
                    </SheetHeader>
                    <MenuList className="w-full h-full flex flex-col items-center justify-center gap-3">
                        {links.map((link) => (
                            <li key={link.id}>
                                <SheetClose>
                                    <Button
                                        variant={"ghost"}
                                        className="font-bold"
                                    >
                                        <a href={link.href}>{link.name}</a>
                                    </Button>
                                </SheetClose>
                            </li>
                        ))}
                    </MenuList>
                </SheetContent>
            </Sheet>
        </nav>
    );
};

// NavChoose
const NavChoose = () => {
    const isDesktop = useMediaQuery("(min-width: 1024px)");

    if (isDesktop) {
        return <DesktopNav />;
    } else {
        return <MobileNav />;
    }
};
