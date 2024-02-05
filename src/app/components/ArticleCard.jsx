import Image from "next/image";
import Link from "next/link";
function ArticleCard({ image, status, tags, type, heading }) {
  return (
    <div className="p-2 bg-white rounded-lg space-y-1 w-fit inline-block">
      <Image
        src={`/${image}`}
        alt="articleimage"
        className="rounded-md"
        width={320}
        height={170}
      />
      <div className="w-full flex justify-between text-[16px]">
        <div className="flex items-center gap-2">
          <p className="text-[var(--violet-text)] font-semibold ">{type}</p>
          <div className="w-2 h-2 bg-[var(--grey-text)] rounded-full"></div>
          <span className="text-[var(--grey-text) text-sm font-[600]">
            {" "}
            22 Sep 2022
          </span>
        </div>
        <div className="space-x-2 flex items-center">
          <Image
            src="/maiadoe.png"
            alt="articleimage"
            className="rounded-md"
            width={30}
            height={30}
          />
          <span className="text-[var(--grey-text) text-sm font-bold">
            Maria Doe
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-[#22285E] text-[17px] font-semibold">{heading}</h2>
        {status === "Created" ? (
          <div className="bg-[#E3D5FF] text-[var(--violet-text)] py-1 px-3 rounded-md font-semibold">
            Created
          </div>
        ) : (
          <div className="bg-[#E4FFF8] text-[#0DAD82] py-1 px-3 rounded-md font-semibold">
            Published
          </div>
        )}
      </div>
      <p className="text-sm">Why Branding matters for your Business</p>
      <div className="flex gap-2">
        {tags.map((item, index) => (
          <div
            key={index}
            className="px-3 py-2 text-sm bg-gray-100 rounded-md w-fit grid-col-3"
          >
            {item}
          </div>
        ))}
      </div>
      <div className="flex justify-between w-full">
        <Link href="/viewClick" className="w-full">
          <button className="bg-[var(--violet-light)] text-[var(--violet-text)]  py-2 w-[93%] font-bold rounded-md">
            View
          </button>
        </Link>
        <div className="py-2 px-3 bg-[#FAFAFA] flex items-center rounded-md space-x-[2px]">
          <div className="rounded-full w-1 h-1 bg-[var(--violet-dark)]"></div>
          <div className="rounded-full w-1 h-1 bg-[var(--violet-dark)]"></div>
          <div className="rounded-full w-1 h-1 bg-[var(--violet-dark)]"></div>
        </div>
      </div>
    </div>
  );
}
export default ArticleCard;
