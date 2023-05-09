"use client";

import Image from "next/image";
import { useState } from "react";

export default function Options() {
  const [isFocusedSearch, setFocusedSearch] = useState(false);
  const [isFocusedSettings, setFocusedSettings] = useState(false);
  let timeoutSearch;
  let timeoutSettings;

  const handleMouseEnterSearch = () => {
    timeoutSearch = setTimeout(() => {
      setFocusedSearch(true);
    }, 200);
  };

  const handleMouseEnterSettings = () => {
    timeoutSettings = setTimeout(() => {
      setFocusedSettings(true);
    }, 200);
  };

  return (
    <div className="flex text-2xl gap-12 items-center">
      <div
        onMouseEnter={handleMouseEnterSearch}
        onMouseLeave={() => setFocusedSearch(false)}
        className="border-solid border-black border-4 py-2 items-center px-4 w-16 gap-4 flex rounded-full cursor-pointer transition-width duration-200 hover:w-56"
      >
        <Image src="/search.svg" width={26} height={26} alt="Search" />
        <p
          className={`text-xl text-gray-800 cursor-text ${
            isFocusedSearch ? "block" : "hidden"
          }`}
        >
          Search...
        </p>
      </div>
      <p className="flex gap-4 border-solid border-4 border-black py-2 px-6 rounded-full cursor-pointer">
        contact@blogspot.co
        <Image src="/arrow.svg" width={20} height={20} alt="Search" />
      </p>
      <div
        onMouseLeave={() => setFocusedSettings(false)}
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
