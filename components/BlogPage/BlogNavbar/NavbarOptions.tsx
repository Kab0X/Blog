"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NavbarOptions() {
  const [isFocusedSettings, setFocusedSettings] = useState(false);
  let timeoutSettings;

  const handleMouseEnterSettings = () => {
    timeoutSettings = setTimeout(() => {
      setFocusedSettings(true);
    }, 50);
  };

  const handleMouseLeaveSettings = () => {
    timeoutSettings = setTimeout(() => {
      setFocusedSettings(false);
    }, 100);
  };

  return (

    <div className="flex text-2xl gap-12 items-center">
        <div className="w-0.5 h-20 rounded-full bg-[#dfdfc8]" />

        <Link href="/" className="flex gap-4 border-solid border-3 border-black py-2 px-6 rounded-full cursor-pointer duration-100 hover:bg-[#fffff0]">
            Home Page
            <Image src="/home.svg" width={24} height={24} alt="Home" />
        </Link>

    <div className="w-0.5 h-20 rounded-full bg-[#dfdfc8]" />

    <p className="flex gap-4 border-solid border-3 border-black py-2 px-6 rounded-full cursor-pointer duration-100 hover:bg-[#fffff0]">
        contact@blogspot.co
        <Image src="/arrow.svg" width={20} height={20} alt="Search" />
    </p>

    <div className="w-0.5 h-20 rounded-full bg-[#dfdfc8]" />

    <div
        onMouseLeave={handleMouseLeaveSettings}
        className="relative px-14 py-8"
    >
        <div
        onMouseEnter={handleMouseEnterSettings}
        className={`flex flex-col gap-3 px-2 cursor-pointer transform transition duration-200 ${
        isFocusedSettings ? "-rotate-90" : "rotate-0"
        }`}
        >
        <div className="bg-black w-16 h-1" />
        <div className="bg-black w-16 h-1" />
        <div className="bg-black w-16 h-1" />
        </div>

        <div
        className={`absolute border-solid border-black border-2 px-4 py-6 bg-[#fffff0] left-0 right-0 rounded-lg mt-8 items-start flex-col transition-height h-0 ${isFocusedSettings ? "flex h-auto" : "hidden"}`}
        >
        <p className="cursor-pointer hover:bg-[#f7f7e3] px-4 py-1 rounded-lg flex gap-2">
            <Image src="/settings.svg" width={16} height={16} alt="Settings" />
            Settings
        </p>
        <p className="cursor-pointer hover:bg-[#f7f7e3] px-4 py-1 rounded-lg flex gap-2">
            <Image src="/user.svg" width={16} height={16} alt="Sign in" />
            Sign in
        </p>
        <p className="cursor-pointer hover:bg-[#f7f7e3] px-4 py-1 rounded-lg flex gap-2">
            <Image src="/user.svg" width={16} height={16} alt="Sign up" />
            Sign up
        </p>
        </div>
    </div>
    </div>
  );
}
