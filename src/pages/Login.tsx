import { GoogleLoginButton } from "react-social-login-buttons";
import { authRef, AuthProvider } from "@/Firebase";
import { signInWithPopup } from "firebase/auth";
import useUserDataStore from "@/zustang/useUserData";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setIsLoggedIn, setUserData} = useUserDataStore();
  const navigate=useNavigate();

  const handleLogin = async () => {
    try {
      const res = await signInWithPopup(authRef, AuthProvider);
      setIsLoggedIn(true);
      setUserData({
        userEmail: res.user.email || "",
        userName: res.user.displayName || "",
        userImageUrl: res.user.photoURL || "",
      });

      navigate("/problem-list");
    } catch (error:any) {
      console.log(error.message);
    }
  };

  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="w-[310px] shadow-2xl">
        <GoogleLoginButton onClick={handleLogin} />
      </div>
    </div>
  );
};

export default Login;
