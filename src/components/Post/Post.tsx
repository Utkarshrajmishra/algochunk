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
  const formatText = (text: string) => {
    return text.replace(/\n/g, "<br />");
  };

  return (
    <div className="outline h-fit w-full outline-1 outline-zinc-700 rounded-lg p-3 shadow shadow-zinc-700">
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
      <div className="text-zinc-200 p-3 tracking-wide rounded-xl bg-neutral-900  ">
        <div
          dangerouslySetInnerHTML={{ __html: formatText(Post.postContent) }}
        />
      </div>
    </div>
  );
};

export default PostComp;
