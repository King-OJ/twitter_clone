import { useRouter } from "next/router"
import { useEffect } from "react"
import { useSelector } from "react-redux"

export default function Home() {
  const { user } = useSelector((store)=>store.auth)
  const router = useRouter()
  
  useEffect(() => {
    if(!user){
      router.push('/')
      return
    }
  }, [user])

  return (
    <div className='text-blue-800'>Home</div>
  )
}



