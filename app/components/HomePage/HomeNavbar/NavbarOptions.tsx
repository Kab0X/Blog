"use client";

import Image from "next/image";
import { useState } from "react";

export default function NavbarOptions() {
  const [isFocusedSearch, setFocusedSearch] = useState(false);
  const [isFocusedSettings, setFocusedSettings] = useState(false);
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
    setFocusedSettings(false);
    timeoutSearch = setTimeout(() => {
      if (event === 50) {
        return setFocusedSettings(true);
      }
      setFocusedSettings(false);
    }, event);
  };

  return (
    <div className="flex text-2xl gap-12 items-center">
      <div className="w-0.5 h-20 rounded-full bg-[#dfdfc8]" />

      <button 
        onMouseEnter={() => handleMouseSearch(50)}
        onMouseLeave={() => handleMouseSearch(60)}
        className="border-solid border-black border-3 py-2 items-center px-4 w-16 gap-4 flex rounded-full cursor-pointer duration-200 hover:w-56 hover:bg-[#fffff0]"
      >
        <Image src="/search.svg" width={26} height={26} alt="Search" />
        <input
          type="text"
          className={`text-xl text-gray-800 cursor-text w-34 bg-transparent hover:outline-none ${isFocusedSearch ? "block" : "hidden"}`}
          placeholder="Search..."
        />
      </button>

      <div className="w-0.5 h-20 rounded-full bg-[#dfdfc8]" />

      <p className="flex gap-4 border-solid border-3 border-black py-2 px-6 rounded-full cursor-pointer duration-100 hover:bg-[#fffff0]">
        contact@blogspot.co
        <Image src="/arrow.svg" width={20} height={20} alt="Search" />
      </p>

      <div className="w-0.5 h-20 rounded-full bg-[#dfdfc8]" />

      <div
        onMouseLeave={() => handleMouseSettings(60)}
        className="relative px-14 py-8"
      >
        <div
          onMouseEnter={() => handleMouseSettings(50)}
          className={`flex flex-col gap-3 px-2 cursor-pointer transform transition duration-200 ${
            isFocusedSettings ? "-rotate-90" : "rotate-0"
          }`}
        >
          <div className="bg-black w-16 h-1" />
          <div className="bg-black w-16 h-1" />
          <div className="bg-black w-16 h-1" />
        </div>

        <div
          className={`absolute border-solid border-black border-2 px-4 py-6 bg-[#fffff0] left-0 right-0 rounded-lg mt-8 items-start flex-col transition-height h-0 ${
            isFocusedSettings ? "flex h-auto" : "hidden"
          }`}
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
