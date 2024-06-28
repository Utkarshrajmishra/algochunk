import CreatePost from "@/components/CreatePost/CreatePost";
import dbService from "@/firebaseService/dbService";
import { useEffect, useState } from "react";
import { Timestamp } from "firebase/firestore";
import PostComp from "@/components/Post/Post";
interface Post {
  id: string;
  photoUrl: string;
  userName: string;
  userID: string;
  postContent: string;
  timeStamp: Timestamp;
}

const CommunityPage = () => {
  const [allPost, setPost] = useState<Post[]>();

  useEffect(() => {
    const getAllPost = async () => {
      try {
        const data = await dbService.getPost();
        if (data.status && data.post) {
          setPost(data.post);
        } else {
          console.log(data.error);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getAllPost();
  });

  return (
    <>
      <div className="max-h-[100vh] overflow-hidden bg-neutral-950 flex justify-center">
        <section className=" w-[800px] overflow-y-auto p-4 ">
          {allPost?.map((post) => (
            <div className="py-2 ">
              {" "}
              <PostComp key={post.id} Post={post} />
            </div>
          ))}
        </section>
        <CreatePost />
      </div>
    </>
  );
};

export default CommunityPage;
