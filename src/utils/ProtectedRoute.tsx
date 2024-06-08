import { FC, PropsWithChildren, useEffect } from "react";
import useUserDataStore from "@/zustang/useUserData";
import { useNavigate } from "react-router-dom";

type ProtectedRouteProps=PropsWithChildren

 const ProtectedRoute=({children}:ProtectedRouteProps)=>{
    const {isLoggedIn}=useUserDataStore()

    const navigate=useNavigate();
    
    useEffect(()=>{
        if(!isLoggedIn) navigate("/",{replace: true})
    },[navigate,isLoggedIn])

    return children;
}

export default ProtectedRoute