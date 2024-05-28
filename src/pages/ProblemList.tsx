import { useEffect } from "react";
import { databaseRef } from "@/Firebase";
import { useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import TableList from "@/components/Table/TableList";

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
      <div className="flex flex-col items-center w-full py-4">
        <div className="max-w-[1200px] outline outline-[1px] outline-zinc-200 rounded-lg">
          <TableList problems={problems} />
        </div>
        <p className="text-zinc-600 text-sm font-bold pt-3">A list of your recent invoices.</p>
      </div>
    </>
  );
};

export default ProblemList;
