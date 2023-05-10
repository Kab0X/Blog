"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function HomeSort() {
    const [isClickedSort, setClickedSort] = useState(false);
    const [sortedBy, setSortedBy] = useState("Best");
    const ref = useRef<HTMLDivElement>(null);

    const handleClick = () => {
        setClickedSort(!isClickedSort);
    };

    const changeSort = (sort: string) => {
        setSortedBy(sort);
        setClickedSort(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node))
                setClickedSort(false);
        };
        document.addEventListener("click", handleClickOutside);
    }),
        [ref];

    return (
        <div className="flex items-center gap-4">
            <div className="flex w-80 items-end gap-4 text-2xl">
                <p className="text-3xl font-bold">Sorted by:</p>
                <p>{sortedBy}</p>
            </div>
            <div ref={ref}>
                <button
                    onClick={handleClick}
                    className="flex cursor-pointer items-center gap-4 rounded-full border-3 border-solid border-black px-8 py-2 text-2xl"
                >
                    Sorting
                    <Image src="sort.svg" width={14} height={14} alt="Sort" />
                </button>
                <div
                    className={`absolute mt-4 w-56 flex-col gap-y-1 rounded-lg border-2 border-solid border-black bg-[#fffff0] px-6 py-4 text-xl ${
                        isClickedSort ? "flex" : "hidden"
                    }`}
                >
                    <p
                        onClick={() => changeSort("Best")}
                        className="flex cursor-pointer gap-3 py-1 hover:bg-[#f7f7e3] hover:underline"
                    >
                        <Image
                            src="best.svg"
                            width={14}
                            height={14}
                            alt="Best"
                        />
                        Best
                    </p>
                    <p
                        onClick={() => changeSort("Popularity")}
                        className="flex cursor-pointer gap-3 py-1 hover:bg-[#f7f7e3] hover:underline"
                    >
                        <Image
                            src="popularity.svg"
                            width={14}
                            height={14}
                            alt="Popularity"
                        />
                        Popularity
                    </p>
                    <p
                        onClick={() => changeSort("Latest")}
                        className="flex cursor-pointer gap-3 py-1 hover:bg-[#f7f7e3] hover:underline"
                    >
                        <Image
                            src="latest.svg"
                            width={14}
                            height={14}
                            alt="Latest"
                        />
                        Latest
                    </p>
                </div>
            </div>
        </div>
    );
}
