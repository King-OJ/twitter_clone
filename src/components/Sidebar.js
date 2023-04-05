import React from 'react'
import { FaHashtag } from 'react-icons/fa'
import { FiSettings } from 'react-icons/fi'

export default function Sidebar() {
  return (
    <div className='max-w-xs'>
      <ul className="mt-6 flex flex-col items-center space-y-6 md:pr-4 lg:pr-6">
        <li ><button className='flex items-center text-2xl p-3 rounded-full hover:bg-gray-200 dark:hover:bg-slate-500 transition duration-200'><FaHashtag /> <span className='hidden xl:block ml-2 text-lg font-bold'>Explore</span></button></li>
        <li ><button className='flex items-center text-2xl p-3 rounded-full hover:bg-gray-200 dark:hover:bg-slate-500 transition duration-200'><FiSettings /> <span className='hidden xl:block ml-2 text-lg font-bold'>Settings</span></button></li>
      </ul>
    </div>
  )
}
