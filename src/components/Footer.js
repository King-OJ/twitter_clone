
export default function Footer() {
  return (
    <div className="fixed bottom-0 right-0 left-0 z-10 h-16 md:h-20 bg-blue-400">
        <div className="h-full grid place-content-center ">
            <div className="flex space-x-10">
                <div className="text-white hidden md:block">
                    <h3 className="text-white">Don't miss what's happening</h3>
                    <p className="text-sm">People on Twitter are the first to know.</p>
                </div>
                <div className="flex space-x-6 items-center font-bold">
                    <button className="bg-inherit text-white border border-white rounded-2xl py-1 px-3 hover:bg-blue-300 transition-all duration-200">Log In</button>
                    <button className="text-slate-900 bg-gray-100  rounded-2xl py-1 px-3 hover:bg-opacity-90 transition-all duration-200">Sign Up</button>
                </div>
            </div>
        </div>
    </div>
  )
}
