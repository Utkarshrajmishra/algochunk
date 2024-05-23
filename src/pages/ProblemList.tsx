import { useEffect } from "react";
import { databaseRef } from "@/Firebase";
import { useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import TableList from "@/components/Table/TablList";

interface Problem {
  id: string;
  Title: string;
  Statement: string;
  Level: string;
  Input: string;
  Output: string;
  Contraints: string;
}

const ProblemList = () => {
  const [problems, setProblems] = useState<Problem[]>([]);
  const [loading, setLoading] = useState(true);
  console.log(loading);
  useEffect(() => {
    async function getProblems() {
      try {
        const prob = await getDocs(collection(databaseRef, "Problems"));
        const p = prob.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })) as Problem[];
        setProblems(p);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getProblems();
  });

  return (
    <>
    
        <div className="max-w-[1200px]">
          <TableList problems={problems} />
        </div>
      
    </>
  );
};

export default ProblemList;
