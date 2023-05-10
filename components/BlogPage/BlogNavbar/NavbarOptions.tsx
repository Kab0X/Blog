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
        <div className="flex items-center gap-12 text-2xl">
            <div className="h-20 w-0.5 rounded-full bg-[#dfdfc8]" />

            <Link
                href="/"
                className="flex cursor-pointer gap-4 rounded-full border-3 border-solid border-black px-6 py-2 duration-100 hover:bg-[#fffff0]"
            >
                Home Page
                <Image src="/home.svg" width={24} height={24} alt="Home" />
            </Link>

            <div className="h-20 w-0.5 rounded-full bg-[#dfdfc8]" />

            <p className="flex cursor-pointer gap-4 rounded-full border-3 border-solid border-black px-6 py-2 duration-100 hover:bg-[#fffff0]">
                contact@blogspot.co
                <Image src="/arrow.svg" width={20} height={20} alt="Search" />
            </p>

            <div className="h-20 w-0.5 rounded-full bg-[#dfdfc8]" />

            <div
                onMouseLeave={handleMouseLeaveSettings}
                className="relative px-14 py-8"
            >
                <div
                    onMouseEnter={handleMouseEnterSettings}
                    className={`flex transform cursor-pointer flex-col gap-3 px-2 transition duration-200 ${
                        isFocusedSettings ? "-rotate-90" : "rotate-0"
                    }`}
                >
                    <div className="h-1 w-16 bg-black" />
                    <div className="h-1 w-16 bg-black" />
                    <div className="h-1 w-16 bg-black" />
                </div>

                <div
                    className={`absolute left-0 right-0 mt-8 h-0 flex-col items-start rounded-lg border-2 border-solid border-black bg-[#fffff0] px-4 py-6 transition-height ${
                        isFocusedSettings ? "flex h-auto" : "hidden"
                    }`}
                >
                    <p className="flex cursor-pointer gap-2 rounded-lg px-4 py-1 hover:bg-[#f7f7e3]">
                        <Image
                            src="/settings.svg"
                            width={16}
                            height={16}
                            alt="Settings"
                        />
                        Settings
                    </p>
                    <p className="flex cursor-pointer gap-2 rounded-lg px-4 py-1 hover:bg-[#f7f7e3]">
                        <Image
                            src="/user.svg"
                            width={16}
                            height={16}
                            alt="Sign in"
                        />
                        Sign in
                    </p>
                    <p className="flex cursor-pointer gap-2 rounded-lg px-4 py-1 hover:bg-[#f7f7e3]">
                        <Image
                            src="/user.svg"
                            width={16}
                            height={16}
                            alt="Sign up"
                        />
                        Sign up
                    </p>
                </div>
            </div>
        </div>
    );
}
