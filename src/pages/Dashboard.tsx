import LikeProblemComponent from "@/components/Dashboard/LikedProblems";
import UserProfile from "@/components/Dashboard/Profile";
const Dashboard=()=>{
    return (
      <section className="bg-neutral-950 h-[100vh] p-5">
        {/* <LikeProblemComponent/> */}
        <div className="w-full flex flex-col items-center">
          <UserProfile />
          
          <LikeProblemComponent />
        </div>
      </section>
    );
}

export default Dashboard;