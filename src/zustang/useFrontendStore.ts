import { create } from "zustand";
import { getDocs, collection } from "firebase/firestore";
import { databaseRef } from "@/Firebase";

interface Problem {
  id: string,
  Title: string;
  Statement: string;
  Level: string;
  Contraints: string;
}

interface ProblemStore {
  problems: Problem[];
  loading: boolean;
  getProblems: () => Promise<void>;
}

const useFrontendStore = create<ProblemStore>((set) => ({
  problems: [],
  loading: true,
  getProblems: async () => {
    try {
      const prob = await getDocs(collection(databaseRef, "FrontendProblems"));
      const problems = prob.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as Problem[];
      set({ problems, loading: false });
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useFrontendStore;
