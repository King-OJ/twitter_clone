

export default function FormRow({ name, type }) {
  return (
    <div className="w-full border py-2 px-2" id="form">
        <label className="hidden capitalize text-xs" htmlFor={name}>{name}</label>
        <input 
            onFocus={(e)=>e.target.parentElement.firstChild.classList.remove('hidden')} 
            
            type={type} id={name} 
            className='outline-none text-lg w-full placeholder:capitalize' placeholder={name}/>
    </div>
  )
}
