import NavbarLogo from "../../HomePage/HomeNavbar/NavbarLogo";
import NavbarOptions from "../../BlogPage/BlogNavbar/NavbarOptions";

export default function Navbar() {
  return (
    <div className="flex justify-between pl-20 pr-4 bg-[#f7f7e3] items-center">
      <NavbarLogo />
      <NavbarOptions />
    </div>
  );
}
