// Login.tsx

import styled from "styled-components";
import { GoogleLoginButton as OriginalGoogleLoginButton } from "react-social-login-buttons";
import { authRef, AuthProvider } from "@/Firebase";
import { signInWithPopup } from "firebase/auth";
import useUserDataStore from "@/zustang/useUserData";
import { useNavigate } from "react-router-dom";
import dbService from "@/firebaseService/dbService";

const GoogleLoginButton = styled(OriginalGoogleLoginButton)`
  background-color: #262626 !important;
  color: white !important;
  box-shadow: 5px 5px 5px 5px #525252 !important;

  &:hover {
    background-color: #171717 !important;
  }
`;

const Login = () => {
  const { setIsLoggedIn, setUserData } = useUserDataStore();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await signInWithPopup(authRef, AuthProvider);
      setIsLoggedIn(true);
      setUserData({
        userEmail: res.user.email || "",
        userName: res.user.displayName || "",
        userImageUrl: res.user.photoURL || "",
      });

      
      await uploadUserData(
        res.user.uid,
        res.user.email || "",
        res.user.photoURL || "",
        res.user.displayName || ""
      );

      navigate("/problem-list");
    } catch (error:any) {
      console.error("Error signing in with Google:", error.message);
    }
  };

  const uploadUserData = async (
    id: string,
    email: string,
    photoUrl: string,
    name: string
  ) => {
    try {
      const result = await dbService.SaveUserProfile(id, email, photoUrl, name);
      if (result.status) {
        console.log("User profile saved successfully");
      } else {
        console.error("Error saving user profile:", result.error);
      }
    } catch (error:any) {
      console.error("Error saving user profile:", error.message);
    }
  };

  return (
    <div className="w-full h-[100vh] flex items-center justify-center overflow-hidden">
      <div className="relative h-full w-full bg-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[310px] shadow-2xl">
          <GoogleLoginButton onClick={handleLogin} />
        </div>
      </div>
    </div>
  );
};

export default Login;
