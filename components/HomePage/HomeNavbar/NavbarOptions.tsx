"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function NavbarOptions() {
    const [isFocusedSearch, setFocusedSearch] = useState(false);
    const [isFocusedSettings, setFocusedSettings] = useState(false);
    const divRef = useRef<HTMLDivElement>(null);
    let timeoutSearch;
    let timeoutSettings;

    const handleMouseSearch = (event: number) => {
        setFocusedSearch(false);
        timeoutSearch = setTimeout(() => {
            if (event === 50) {
                return setFocusedSearch(true);
            }
            setFocusedSearch(false);
        }, event);
    };

    const handleMouseSettings = (event: number) => {
        if (!isFocusedSettings) setFocusedSettings(false);
        if (divRef.current) divRef.current.click();
        timeoutSettings = setTimeout(() => {
            if (event === 50) {
                return setFocusedSettings(true);
            }
            setFocusedSettings(false);
        }, event);
    };

    return (
        <div className="flex items-center gap-12 text-2xl">
            <div className="h-20 w-0.5 rounded-full bg-[#dfdfc8]" />

            <button
                onMouseEnter={() => handleMouseSearch(50)}
                onMouseLeave={() => handleMouseSearch(60)}
                className="flex w-16 cursor-pointer items-center gap-4 rounded-full border-3 border-solid border-black px-4 py-2 duration-200 hover:w-56 hover:bg-[#fffff0]"
            >
                <Image src="/search.svg" width={26} height={26} alt="Search" />
                <input
                    type="text"
                    className={`w-34 cursor-text bg-transparent text-xl text-gray-800 hover:outline-none ${
                        isFocusedSearch ? "block" : "hidden"
                    }`}
                    placeholder="Search..."
                />
            </button>

            <div className="h-20 w-0.5 rounded-full bg-[#dfdfc8]" />

            <p className="flex cursor-pointer gap-4 rounded-full border-3 border-solid border-black px-6 py-2 duration-100 hover:bg-[#fffff0]">
                contact@blogspot.co
                <Image src="/arrow.svg" width={20} height={20} alt="Search" />
            </p>

            <div className="h-20 w-0.5 rounded-full bg-[#dfdfc8]" />

            <div
                onMouseLeave={() => handleMouseSettings(60)}
                className="relative px-14 py-8"
            >
                <div
                    ref={divRef}
                    onMouseEnter={() => handleMouseSettings(50)}
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
