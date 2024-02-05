import Image from "next/image";
function AdminCard({ heading, text, image }) {

    return (
        <div className="rounded-xl  w-[230px]  bg-white flex gap-2 ">

            <Image
                src={`/${image}`}
                alt="helloadmin"
                className=""
                width={70}
                height={10}
            />
            <div className="space-y-1">
                <h3 className="text-[22px] font-semibold">{heading}</h3>
                <p className="text-[15px]">{text}</p>
            </div>
        </div>
    )
}

export default AdminCard;