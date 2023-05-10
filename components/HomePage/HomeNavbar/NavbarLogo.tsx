import Link from "next/link";

export default function NavbarLogo() {
    return (
        <div className="flex cursor-pointer items-center gap-8 font-sans text-5xl font-bold italic">
            <div className="h-20 w-0.5 rounded-full bg-[#dfdfc8]" />
            <Link href="/">Blog Spot.</Link>
            <div className="h-20 w-0.5 rounded-full bg-[#dfdfc8]" />
        </div>
    );
}
