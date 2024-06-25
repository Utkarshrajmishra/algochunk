import { FC } from "react";

type Post = {
  postContent: string;
  timeStamp: string;
  userName: string;
  photoUrl: string;
};

interface PostProps {
  Post: Post;
}

const Post: FC<PostProps> = ({ Post }) => {
  return (
    <>
      <div className=" outline h-fit outline-1 bg-neutral-900  rounded-lg p-4">
        <div className="flex p-3 pt-0">
          <img
            src={Post.photoUrl}
            alt="Profile Image"
            className="rounded-full"
            width={50}
          />
          <div className="pl-2 text-zinc-200 ">
            <h1 className="text-zinc-200 font-semibold text-lg">
              {Post.userName}
            </h1>
            <p className="text-sm">{Post.timeStamp}</p>
          </div>
        </div>
        <div className="text-zinc-200 p-3 tracking-wide rounded-xl bg-neutral-800 ">
          {Post.postContent}
        </div>
      </div>
    </>
  );
};

export default Post;
