// useDateStore.ts
import create from "zustand";
import { doc, getDoc } from "firebase/firestore";
import { databaseRef } from "@/Firebase";

interface DateData {
  [date: string]: number;
}

interface DateStore {
  dateData: DateData | null;
  fetchData: (userId: string) => Promise<void>;
}

export const useDateStore = create<DateStore>((set) => ({
  dateData: JSON.parse(sessionStorage.getItem("dateData") || "{}") as DateData,

  fetchData: async (userId: string) => {
    try {
      const docRef = doc(databaseRef, "ProblemDates", userId);
      const docSnap = await getDoc(docRef);
      const dataObj: DateData = {};
      const today = new Date().toISOString().split("T")[0];

      if (docSnap.exists()) {
        const data = docSnap.data() as DateData;
        Object.entries(data).forEach(([date, value]) => {
          dataObj[date] = date === today ? value : -1;
        });
      }

      sessionStorage.setItem("dateData", JSON.stringify(dataObj));
      set({ dateData: dataObj });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
}));
