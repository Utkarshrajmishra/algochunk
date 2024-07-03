import { FC } from "react";
import { User, LogOut, Mail, DatabaseIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut, getAuth } from "firebase/auth";

import useUserDataStore from "@/zustang/useUserData";
import { useNavigate } from "react-router-dom";

type UserData = {
  userName: string;
  userEmail: string;
  userImageUrl: string;
};

interface ProfileProps {
  Data: UserData;
}

const Profile: FC<ProfileProps> = ({ Data }) => {
  const navigate=useNavigate()

    const {setIsLoggedIn, setUserData}=useUserDataStore();

    const logout=()=>{
        const auth = getAuth();
        signOut(auth)
          .then(() => {
            setIsLoggedIn(false);
            setUserData({
              uid:"",
              userEmail: "",
              userName: "",
              userImageUrl: "",
            });
          })
          .catch((error) => console.log(error));
        
    }

    

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <img
          src={Data.userImageUrl}
          alt="Prfile Image"
          width={38}
          className="rounded-full shadow-md shadow-blue-600 cursor-pointer"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-50 text-zinc-200 bg-neutral-900 ">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer" onClick={()=> navigate("/user/dashboard")}>
            <DatabaseIcon className="mr-2 h-4 w-4" />
            <span>Dashboard</span>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>{Data.userName}</span>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Mail className="mr-2 h-4 w-4" />
            <span>{Data.userEmail}</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => logout()}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Profile;
