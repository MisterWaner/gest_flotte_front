import { useMediaQuery } from "usehooks-ts";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function NavChoose() {
    const isDesktop = useMediaQuery("(min-width: 768px)");

    if (isDesktop) {
        return <DesktopNav />;
    } else {
        return <MobileNav />;
    }
}
