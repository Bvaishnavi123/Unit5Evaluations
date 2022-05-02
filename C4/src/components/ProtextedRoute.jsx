// /orders and /neworder are protected routes


import { useSelector } from "react-redux"
import {Navigate} from "react-router-dom"

export const ProtectedRoute = ({children})=>{
    const status = useSelector((store) =>store.login.user)
    
    if(status===false){
       return <Navigate to={'/login'}/>
       
    }
  return children
    
}