import menuLinks from "./menu";

export default function DesktopNav() {
    const links = menuLinks;
    return (
        <nav className="w-1/2">
            <ul className="flex justify-between">
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.href}>{link.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

