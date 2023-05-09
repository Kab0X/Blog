"use client";

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react';

export default function HomeSort() {
    const [isClickedSort, setClickedSort] = useState(false);
    const [sortedBy, setSortedBy] = useState('Best')
    const ref = useRef<HTMLDivElement>(null);

    const handleClick = () => {
        setClickedSort(!isClickedSort);
    }

    const changeSort = (sort: string) => {
        setSortedBy(sort);
        setClickedSort(false);
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) setClickedSort(false);
        };
        document.addEventListener("click", handleClickOutside);
    }), [ref];

    return (
        <div className='flex items-center gap-4'>
            <div className='text-2xl flex gap-4 items-end w-80'>
                <p className='font-bold text-3xl'>Sorted by:</p>
                <p>{sortedBy}</p>
            </div>
            <div ref={ref}>
                <button onClick={handleClick} className="text-2xl border-solid border-3 border-black px-8 py-2 rounded-full flex gap-4 items-center cursor-pointer">
                    Sorting
                    <Image
                        src="sort.svg"
                        width={14}
                        height={14}
                        alt='Sort'
                    />
                </button>
                <div className={`flex-col absolute bg-[#fffff0] px-6 py-4 border-black border-solid border-2 mt-4 text-xl w-56 rounded-lg gap-y-1 ${isClickedSort ? 'flex' : 'hidden'}`}>
                    <p onClick={() => changeSort('Best')} className='flex hover:bg-[#f7f7e3] cursor-pointer py-1 gap-3 hover:underline'>
                        <Image
                            src="best.svg"
                            width={14}
                            height={14}
                            alt='Best'
                        />
                        Best
                    </p>
                    <p onClick={() => changeSort('Popularity')} className='flex hover:bg-[#f7f7e3] cursor-pointer py-1 gap-3 hover:underline'>
                        <Image
                            src="popularity.svg"
                            width={14}
                            height={14}
                            alt='Popularity'
                        />
                        Popularity</p>
                    <p onClick={() => changeSort('Latest')} className='flex hover:bg-[#f7f7e3] cursor-pointer py-1 gap-3 hover:underline'>
                        <Image
                            src="latest.svg"
                            width={14}
                            height={14}
                            alt='Latest'
                        />
                        Latest
                    </p>
                </div>
            </div>
        </div>
    )
}