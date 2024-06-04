import { GoogleLoginButton } from "react-social-login-buttons";
import { authRef, AuthProvider } from "@/Firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const Login = () => {
  const handleLogin = async () => {
    await signInWithPopup(authRef, AuthProvider)
      .then((res) => {
        const credential = GoogleAuthProvider.credentialFromResult(res);
        const user = res.user;
      })
      .catch((error) => {
        console.log(error.errorMessage);
      });
  };

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
