import { FiSettings } from 'react-icons/fi'
import { FaSearch } from 'react-icons/fa'
import { useState } from 'react'
import Trend from './Trend'

export default function Trends() {

  const [isSearching, setIsSearching] = useState(false)
  const trends = [
    {
      location: 'Nigeria',
      title: 'Clement Ojigs',
      count: 65
    },
    {
      location: 'America',
      title: 'Trump',
      count: 225
    },
    {
      location: 'London',
      title: 'EPL',
      count: 11.7
    },
    {
      location: 'Russia',
      title: 'War',
      count: 29.7
    },
    {
      location: 'Nigeria',
      title: 'Elections',
      count: 18.6
    },
    
    
  ]

  return (
    <div className="flex-1 border-l-[1px] border-r-[1px] pt-2 h-full">
      <form className='px-4'>
        <div className="flex justify-between space-x-6 items-center">
            <div onFocus={()=>setIsSearching(true)} onBlur={()=>setIsSearching(false)} className={`text-slate-600 flex-1 border ${isSearching && 'text-blue-600 border-blue-600'} flex items-center outline-blue-300 bg-gray-100 rounded-3xl py-2 px-4`}>
              <FaSearch/>
              <input  type="text" className="flex-1 outline-none ml-3 text-slate-600 bg-inherit placeholder:text-slate-600 " placeholder='Search Twitter' />
            </div>

            <button type="button" className='text-xl'><FiSettings /></button>
        </div>
      </form>
      <div className="mt-6 space-y-2">
        <h3 className='mb-2 px-4'>Trends for you</h3>
        {trends.map((ele, index)=>{
          
          return <Trend key={index} {...ele}/>
        })}
      </div>
    </div>
  )
}
