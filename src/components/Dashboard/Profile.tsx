import useUserDataStore from "@/zustang/useUserData";
import Progressbar from "../ProgressBar/Progressbar";
import { ProblemLength } from "@/utils/LocalStorage";
const UserProfile = () => {
  const length = ProblemLength();
  const { userData } = useUserDataStore();
  console.log(userData.userImageUrl);
  return (
    <>
      <section className="bg-neutral-900 h-fit rounded-lg w-[99%] md:w-[68%] p-5 flex  items-center flex-wrap justify-around ">
        <section className="flex    gap-3">
          <div>
            <img
              src={userData.userImageUrl}
              alt="Profile Photo"
              className="rounded-full shadow-md shadow-blue-500 "
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-zinc-200 text-md md:text-3xl font-semibold">
              {userData.userName}
            </p>
            <p className="text-zinc-200  text-sm md:text-base">
              {userData.userEmail}
            </p>
            <p className="text-zinc-200 text-sm md:text-base">
              <span className="font-semibold">Role </span> :{" "}
              <span className="text-blue-700">User </span>
            </p>
          </div>
        </section>
        <section>
          <Progressbar problemLength={length} />
        </section>
      </section>
    </>
  );
};

export default UserProfile;
