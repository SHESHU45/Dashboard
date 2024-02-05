import React from 'react';
import Image from "next/image";
import Navbar from '../components/Navbar';
import "./view.css";

const Page = (props) => {
    return (
        <div className='navbar'>
            <div className='w-[20%]'>

            </div>
            <div className='w-[80%] '>
                <Navbar />

                <div>
                    <div>

                    </div>
                    <div className='card-page-unique'>
                        <div className="image-container">
                            <Image src='/topstory1.png' alt='' width={300} height={300} className="bg-image" />
                        </div>
                        <div className="card-text-1">
                            <h1>Research</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quos sunt cum consectetur minima reprehenderit cumque voluptatum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
