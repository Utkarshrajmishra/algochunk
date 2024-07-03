import { getStorageItems } from "@/utils/LocalStorage";
import { useEffect, useState } from "react";

const LikeProblemComponent=()=>{
    const [items,setItems]=useState()

    useEffect(()=>{
        setItems(getStorageItems("Like"))
    })

    return(
        <>
        
        </>
    )

}