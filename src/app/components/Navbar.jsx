import React from 'react'
import Image from "next/image";
export default function Navbar() {
    return (
        <div className="h-[80px] w-full bg-white px-5 flex items-center justify-between">
            <div className="mt-1 py-1 pl-3 pr-8 rounded-3xl cursor-pointer flex gap-3 bg-[#FCFCFD] border">
                <Image
                    src="/akar-icons_search.png"
                    alt="content"
                    className=""
                    width={30}
                    height={15}
                />

                <input type="text" className="bg-transparent py-1 text-sm text-[#CECECE] outline-none" placeholder="Search" />
            </div>
            <div className="space-x-3 flex">
                <div className="py-1 px-3 flex items-center space-x-2 border rounded bg-[#FAFAFA]">
                    <div className="space-x-1 text-sm flex">
                        <p>11-10-2022</p>
                        <Image
                            src="/calendar.png"
                            alt="calendar"
                            className=""
                            width={20}
                            height={20}
                        />
                    </div>
                    <p className="text-[13px] opacity-70">OR</p>
                    <div className="space-x-1 text-sm flex">
                        <p>11-10-2022</p>
                        <Image
                            src="/calendar.png"
                            alt="calendar"
                            className=""
                            width={20}
                            height={20}
                        />
                    </div>
                </div>
                <div className="p-1 flex items-center gap-10 border border-[#E8EFF7] rounded bg-[#FCFCFD]">

                    <div className="space-x-1 text-sm flex items-center">

                        <Image
                            src="/image 11.png"
                            alt="image11"
                            className=""
                            width={33}
                            height={33}
                        />
                        <div className="leading-none">
                            <p className="text-[10px]">Welcome Back</p>
                            <p className="text-[17px]">Akshita Patel</p>
                        </div>

                    </div>
                    <Image
                        src="/Arrow - Down 2.png"
                        alt="image11"
                        className="cursor-pointer"
                        width={24}
                        height={24}
                    />
                </div>
            </div>
        </div>
    )
}
