import { useRouter } from "next/router"
import { useEffect } from "react"
import { useSelector } from "react-redux"


export default function AuthGuard({ children }) {
    const { user } = useSelector((store)=>store.auth)
    const router = useRouter()
    
    
      router.push("/")
     
}
