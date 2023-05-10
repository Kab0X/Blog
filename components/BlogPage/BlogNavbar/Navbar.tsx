import NavbarLogo from "../../HomePage/HomeNavbar/NavbarLogo";
import NavbarOptions from "../../BlogPage/BlogNavbar/NavbarOptions";

export default function Navbar() {
    return (
        <div className="flex items-center justify-between bg-[#f7f7e3] pl-20 pr-4">
            <NavbarLogo />
            <NavbarOptions />
        </div>
    );
}
