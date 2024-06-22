import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { postSchema } from "@/zod/PostSchema"; 
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { LuPenSquare } from "react-icons/lu";
import dbService from "@/firebaseService/dbService";
import useUserDataStore from "@/zustang/useUserData";

const CreatePost=()=>{

  const {userData}=useUserDataStore()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(postSchema),
  });

  const onSubmit = (data:any) => {
    uploadPost(data.postContent)
  };

  const uploadPost= async(content:string)=>{
      try{
        const res = await dbService.SavePost(userData.uid,content);
        if(res.status){
          console.log("Post updated successfully")
        }
        else{
          console.log("Error post upload", res.error)
        }
      }
      catch(error:any){
        console.log("Error: ", error)
      }

  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <section className="bg-neutral-800 p-3 h-fit w-fit rounded-full">
          <LuPenSquare color="white" fontSize={22} />
        </section>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-neutral-950 text-zinc-200 custom-padding-x">
        <DialogHeader>
          <DialogTitle>Create Post</DialogTitle>
          <DialogDescription>
            Share your thoughts with your network. Click post when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <div className="grid items-center gap-4">
           
            <Textarea
              id="post-content"
              placeholder="What do you want to talk about? (Content)"
              className="col-span-3 bg-neutral-950 min-h-40 text-white"
              rows={6}
              {...register("postContent")}
            />
            {errors.postContent && (
              <p className="text-red-500 text-sm">
                {errors.postContent.message as string}
              </p>
            )}
          </div>
          <DialogFooter>
            <Button type="submit">Post</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default CreatePost;
