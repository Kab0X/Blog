import NavbarLogo from "./NavbarLogo";
import NavbarOptions from "./NavbarOptions";

export default function Navbar() {
    return (
        <div className="flex items-center justify-between bg-[#f7f7e3] pl-20 pr-4">
            <NavbarLogo />
            <NavbarOptions />
        </div>
    );
}
