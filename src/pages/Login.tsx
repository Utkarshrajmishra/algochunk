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
    <div className="w-full h-[100vh]  items-center ">
      <div className="relative h-full w-full bg-black">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
      </div>
      <div className="w-[310px] shadow-2xl">
        <GoogleLoginButton onClick={handleLogin} />
      </div>
    </div>
  );
};

export default Login;
