import { useContext } from "react"
import { Navigate } from "react-router-dom"
import {Authcontext } from "../Context/AuthContext"


export const ProtectedRoute = ({children})=>{
   const {isAuth} = useContext(Authcontext)
    if(isAuth===false){
        return <Navigate to={"/login"} replace={false}/>
    }

   return children
}