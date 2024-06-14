import menuLinks from "./menu";
import DesktopNavButton from "./DesktopNavButton";

export default function DesktopNav() {
    const links = menuLinks;
    
    return (
        <nav className="w-1/2">
            <ul className="flex justify-between">
                {links.map((link) => (
                    <DesktopNavButton key={link.id} {...link} />
                ))}
            </ul>
        </nav>
    );
}
