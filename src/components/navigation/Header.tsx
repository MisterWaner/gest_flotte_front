import DesktopNav from "./DesktopNav";

export default function Header() {
    return (
        <header className="flex justify-between p-4">
            <div>
                logo
            </div>
            <DesktopNav />
        </header>
    );
}
