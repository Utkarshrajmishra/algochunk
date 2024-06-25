import { databaseRef } from "@/Firebase";
import { addDoc, collection, setDoc, doc,getDocs, query, orderBy, getDoc } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";

class DBService {
  async SaveUserProfile(
    UserID: string,
    UserEmail: string,
    UserImageUrl: string,
    UserName: string
  ) {
    try {
      await setDoc(doc(databaseRef, "User", UserID), {
        userEmail: UserEmail,
        userImageUrl: UserImageUrl,
        userName: UserName,
      });
      return { status: true, error: "" };
    } catch (error: any) {
      return { status: false, error: error.message };
    }
  }

  async SavePost(
    UserID: string,
    PostContent: string,
  ) {
    const TimeStamp=serverTimestamp()
    try {
        await addDoc(collection(databaseRef, "Post"),{
            userId: UserID,
            timeStamp:TimeStamp,
            postContent:PostContent
        })
      return { status: true, error: "" };
    } 
    catch (error: any) {
      return { status: false, error: error.message };
    }
  }

  async getDocs(){
   try{
    const postQuery= query(collection(databaseRef, "Post"), orderBy("timeStamp","desc"));
    const postSnapshot=await getDocs(postQuery);
    const post=postSnapshot.docs.map(doc=>doc.data)
    return {status:true, post:post}
   }
   catch(error:any){
    return {status:false, error: error.message}
   }
  }
}

const dbService=new DBService();
export default dbService
