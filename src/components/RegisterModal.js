import { GrClose } from "react-icons/gr"
import FormRow from "./FormRow"

export default function RegisterModal({ details, setDetails}) {
  return (
    <div className="z-20 absolute inset-0 grid place-content-center bg-black bg-opacity-70">
        <div className="w-[600px] max-w-sm md:max-w-lg text-slate-900 bg-white py-3 px-5 rounded-lg">
            <button onClick={()=> setDetails({...details, isModalOpen: false}) } className="text-xl p-2 rounded-full hover:bg-slate-300"><GrClose /></button>
            <form className="my-6 space-y-6">
                {!details.isMember && <FormRow name='name' type='text'/>}
                <FormRow name='phone' type='tel'/>
                <FormRow name='password' type='password'/>
                <button type="submit" className="w-full py-2 text-lg bg-gray-500 text-white rounded-3xl">{details.isMember ? 'sign in' : 'sign up'}</button>
            </form>

        </div>
    </div>
  )
}
