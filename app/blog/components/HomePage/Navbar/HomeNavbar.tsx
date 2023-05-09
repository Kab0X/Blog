import Logo from "./Logo";
import Options from "./Options";

export default function Navbar() {
  return (
    <div className="flex justify-between pl-20 pr-4 bg-[#f7f7e3] items-center">
      <Logo />
      <Options />
    </div>
  );
}
