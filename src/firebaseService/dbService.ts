import { databaseRef } from "@/Firebase";
import { setDoc, doc } from "firebase/firestore";

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
    PostDate: string,
    PostContent: string,
    PostTime: string
  ) {
    try {
      await setDoc(doc(databaseRef, "Post"), {
        UserID: UserID,
        PostDate: PostDate,
        PostTime: PostTime,
        PostContent: PostContent,
      });
      return { status: true, error: "" };
    } catch (error: any) {
      return { status: false, error: error.message };
    }
  }
}

const dbService=new DBService();
export default dbService
