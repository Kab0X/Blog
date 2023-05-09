import Link from "next/link";

export default function NavbarLogo() {
  return (
    <div className="text-5xl font-sans font-bold italic cursor-pointer flex items-center gap-8">
      <div className="w-0.5 h-20 rounded-full bg-[#dfdfc8]" />
      <Link href="/">Blog Spot.</Link>
      <div className="w-0.5 h-20 rounded-full bg-[#dfdfc8]" />
    </div>
  );
}
