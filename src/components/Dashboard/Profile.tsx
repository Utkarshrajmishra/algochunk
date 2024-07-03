import useUserDataStore from "@/zustang/useUserData";
const UserProfile = () => {
  const { userData } = useUserDataStore();
  return (
    <>
      <section className="bg-neutral-900 rounded-lg w-[99%] md:w-[60%] p-5 flex  gap-3 h-fit">
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
          <p className="text-zinc-200  text-sm md:text-base">{userData.userEmail}</p>
          <p className="text-zinc-200 text-sm md:text-base">
            <span className="font-semibold">Role </span> :{" "}
            <span className="text-blue-700">User </span>
          </p>
        </div>
      </section>
    </>
  );
};

export default UserProfile;
