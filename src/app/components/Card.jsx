import Link from 'next/link'
import React from 'react'
import Image from "next/image";

import "./Card.css"

export default function Card({ image, title}) {
    return (
        <div className='Card w-[400px] h-[150px] flex'>
            <div className='photo-card w-[50%] h-[100%] bg-pink'>
                <Image src={`/${image}`} alt='' width={500} height={900} className='photo-card-image' />
            </div>
            <div className='card-text'>
                <h1>{title}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                <div className='card-buttom'>
                    <Link href="/viewClick" className="w-full">
                        <button className="bg-[var(--violet-light)] text-[var(--violet-text)]  py-1 m-2 w-[53%] font-bold rounded-md">View</button>
                    </Link>
                    <div className="px-1 bg-[#FAFAFA] flex items-center rounded-md  m-2 space-x-[1px]">
                        <div className="rounded-full w-1 h-1 bg-[var(--violet-dark)]"></div>
                        <div className="rounded-full w-1 h-1 bg-[var(--violet-dark)]"></div>
                        <div className="rounded-full w-1 h-1 bg-[var(--violet-dark)]"></div>
                    </div>
                </div>
            </div>
        </div>

    )
}
