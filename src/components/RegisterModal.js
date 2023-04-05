import { GrClose } from "react-icons/gr"
import FormRow from "./FormRow"

export default function RegisterModal({ setIsModalOpen}) {
  return (
    <div className="z-20 absolute inset-0 grid place-content-center bg-black bg-opacity-70">
        <div className="w-[600px] max-w-sm md:max-w-lg text-slate-900 bg-white py-3 px-5 rounded-lg">
            <button onClick={()=> setIsModalOpen(false) } className="text-xl p-2 rounded-full hover:bg-slate-300"><GrClose /></button>
            <form className="mt-6 space-y-6">
                <FormRow name='name'/>
                <FormRow name='phone'/>
            </form>

        </div>
    </div>
  )
}
