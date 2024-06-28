import { FC } from "react";
import { Timestamp } from "firebase/firestore";
import formatPostTime from "@/utils/FormateTime";

interface Post {
  id: string;
  photoUrl: string;
  userName: string;
  userID: string;
  postContent: string;
  timeStamp: Timestamp;
}

interface PostProps {
  Post: Post;
}

const PostComp: FC<PostProps> = ({ Post }) => {
  const time = formatPostTime(Post.timeStamp);

  return (
    <div className="outline h-fit outline-1 bg-neutral-900 rounded-lg p-4">
      <div className="flex p-3 pt-0">
        <img
          src={Post.photoUrl}
          alt="Profile Image"
          className="rounded-full"
          width={50}
        />
        <div className="pl-2 text-zinc-200">
          <h1 className="text-zinc-200 font-semibold text-lg">
            {Post.userName}
          </h1>
          <p className="text-sm">{time}</p>
        </div>
      </div>
      <div className="text-zinc-200 p-3 tracking-wide rounded-xl bg-neutral-800  ">
        <p className="tracking-wider leading-9">
          🌟 Welcome to Our Community 🌟
          <br />
          Hello everyone! Welcome to our community dedicated to mastering Data
          Structures and Algorithms (DSA) along with Frontend Development!
          <br />
          🚀 Whether you're just starting your coding journey or looking to
          sharpen your skills, you're in the right place.
        </p>
      </div>
    </div>
  );
};

export default PostComp;
