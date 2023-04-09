import { useRouter } from 'next/router'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GrClose } from "react-icons/gr"
import FormRow from "./FormRow"
import axios from 'axios'
import { registerUser, setAuthState, setAuthUser } from '@/features/authSlice';


export default function RegisterModal({ details, setDetails}) {
  
  const dispatch = useDispatch()

  const { isLoading, showError, errorMsg } = useSelector((store)=>store.auth)

  const initialFormState = {
    name: '',
    email: '',
    phone: '',
    password: '',
  }

  const [credentials, setCredentials ] = useState(initialFormState)

  function handleFormInput(e){
    const name = e.target.name
    const value = e.target.value
    setCredentials({...credentials, [name]:value})
  }

  async function handleSubmit(e){
    e.preventDefault()
    dispatch(registerUser(credentials))
    // dispatch(setAuthState(true));
    // dispatch(setAuthUser(credentials))
    
  }
  
  return (
    <div className="z-20 absolute inset-0 grid place-content-center bg-black bg-opacity-70">
        <div className="w-[600px] max-w-sm md:max-w-lg text-slate-900 bg-white py-3 px-5 rounded-lg">
            <button onClick={()=> setDetails({...details, isModalOpen: false}) } className="text-xl p-2 rounded-full hover:bg-slate-300"><GrClose /></button>
            <form onSubmit={handleSubmit} className="my-6 space-y-6">
                {!details.newMember && <FormRow name='name' type='text' value={credentials.name} handleChange={handleFormInput}/>}
                {!details.newMember && <FormRow name='email' type='email' value={credentials.email} handleChange={handleFormInput} showError={showError} errorMsg={errorMsg} />}
                <FormRow name='phone' type='tel'  value={credentials.phone} handleChange={handleFormInput}/>
                <FormRow name='password' type='password' value={credentials.password} handleChange={handleFormInput}/>
                <button disabled={ isLoading } onClick={handleSubmit} type="submit" className="w-full py-2 text-lg bg-gray-500 text-white rounded-3xl">{details.newMember ? 'sign in' : 'sign up'}</button>
            </form>

        </div>
    </div>
  )
}


