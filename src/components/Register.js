import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

export default function Register({ setIsModalOpen }) {
  return (
    <div className="hidden lg:block max-w-sm">
        <div className="m-6 rounded-2xl border-[1px] p-3 py-6">
            <h3 className="">New to Twitter?</h3>
            <p className="text-xs mt-2 text-gray-700 dark:text-yellow-50 font-semibold">Sign up now to get your own personalized timeline!</p>
            <ul className="signup space-y-4 mt-4">
                <li><button className=" flex items-center justify-center rounded-3xl w-full text-sm border-[2px] p-2 hover:bg-gray-200 dark:hover:bg-slate-500 transition-all duration-200"><FcGoogle/> Sign up with Google</button> </li>
                <li><button className=" flex items-center justify-center rounded-3xl w-full text-sm border-[2px] p-2 hover:bg-gray-200 dark:hover:bg-slate-500 transition-all duration-200"><FaApple/> Sign up with Apple</button> </li>
                <li><button onClick={()=>setIsModalOpen(true)} className="rounded-3xl w-full text-sm text-center border-[2px] p-2 hover:bg-gray-200 dark:hover:bg-slate-500 transition-all duration-200">Create account</button> </li>
               
            </ul>
            <p className="mt-4 text-gray-700 dark:text-yellow-50 text-xs">By signing up, you agree that this is a twitter clone for educative purpose only.</p>
        </div>
    </div>
  )
}
