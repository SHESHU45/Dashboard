import { Link } from "@nextui-org/react";
import Image from "next/image";

function StoryCard({ image, status, type, heading }) {


    return (


        <div className=" rounded-lg space-y-1 inline-block relative">
            <Image
                src={`/${image}`}
                alt="topstory"
                className="rounded-md"
                width={250}
                height={400}
            />
            <div className="absolute bottom-0 z-10 text-white w-full p-3 space-y-2">

                <h2 className=" text-[17px] font-semibold text-wrap">{heading}</h2>


                <div className="flex items-center justify-between">

                    <p className=" font-semibold ">{type}</p>
                    <div className="w-2 h-2 bg-[var(--grey-text)] rounded-full"></div>
                    <span className="text-gray-200 text-sm "> 22 Sep 2022</span>
                    {status === 'Created' ?
                        <div className="bg-[#E3D5FF] text-[var(--violet-text)] py-1 px-2 rounded-md font-semibold text-sm">Created</div> :
                        <div className="bg-[#E4FFF8] text-[#0DAD82] py-1 px-2 rounded-md font-semibold text-sm">Published</div>
                    }
                </div>


                <div className="flex justify-between w-full ">
                    <Link href="/viewClick" className="w-full">
                        <button className="bg-[var(--violet-light)] text-[var(--violet-text)]  py-2 w-[80%] font-bold rounded-md">View</button></Link>

                    <div className="py-2 px-3 bg-[#FAFAFA] flex items-center rounded-md space-x-[2px]">
                        <div className="rounded-full w-1 h-1 bg-[var(--violet-dark)]"></div>
                        <div className="rounded-full w-1 h-1 bg-[var(--violet-dark)]"></div>
                        <div className="rounded-full w-1 h-1 bg-[var(--violet-dark)]"></div>
                    </div>
                </div>
            </div>





            <div></div>



        </div>
    )
}
export default StoryCard;