import { create } from "zustand";

interface Data{
    userName:string ,
    userEmail:string ,
    userImageUrl:string
}


interface UserData{
    isLoggedIn: boolean,
    UserData: Data,
    setUserData:(data:Data)=>void;
    setIsLoggedIn:()=>void
}


const useUserDataStore=create<UserData>((set)=>({
    isLoggedIn:false,
    UserData:{
        userName:'',
        userEmail:'',
        userImageUrl:''
    },
    setUserData:(data:Data)=>set({UserData:data}),
    setIsLoggedIn:()=>set((state)=>({isLoggedIn: !state.setIsLoggedIn}))
}));

export default useUserDataStore;
