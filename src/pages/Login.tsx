import { GoogleLoginButton } from "react-social-login-buttons";
import { authRef, AuthProvider } from "@/Firebase";
import { signInWithPopup } from "firebase/auth";
import useUserDataStore from "@/zustang/useUserData";

const Login = () => {
  const { setIsLoggedIn, setUserData, isLoggedIn } = useUserDataStore();

  const handleLogin = async () => {
    await signInWithPopup(authRef, AuthProvider)
      .then((res) => {
        setIsLoggedIn();

        setUserData({
          userEmail: res.user.email || "",
          userName: res.user.displayName || "",
          userImageUrl: res.user.photoURL || "",
        });

        console.log(res.user.photoURL)
      })
      .catch((error) => {
        console.log(error.errorMessage);
      });
  };

  console.log(isLoggedIn)

  return (
    <>
 
      <div className="w-full h-[100vh] flex justify-center items-center">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="w-[310px] shadow-2xl">
          <GoogleLoginButton onClick={handleLogin} />
        </div>
      </div>
     
    </>
  );
};

export default Login;
