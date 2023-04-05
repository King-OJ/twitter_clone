import { BiDotsHorizontalRounded } from "react-icons/bi";


export default function Trend({ title, location, count}) {
  return (
    <article className="px-4 flex cursor-pointer justify-between py-2 hover:bg-gray-50 dark:hover:bg-slate-600 transition-all duration-200">
        <div className="text-sm ">
            <p>Trending in {location}</p>
            <h6>{title}</h6>
            <p>{count}K Tweets</p>
        </div>
        <div className="text-slate-500 text-xl">
            <button className="p-2 hover:bg-blue-100 transition-all duration-200 rounded-full">
                <BiDotsHorizontalRounded />
            </button>
        </div>
    </article>
  )
}
