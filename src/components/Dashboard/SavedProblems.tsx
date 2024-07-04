import { useEffect, useState } from "react";
import { databaseRef } from "@/Firebase";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { collection, getDocs, query, where } from "firebase/firestore";
interface Problem {
  id: string;
  ProblemID: string;
  Tag: string;
  Title: string;
  Statement: string;
  Level: string;
  Input: string;
  Output: string;
  Constraints: string;
}

const SavedProblemsComponent = () => {
  const [problems, setProblems] = useState<Problem[]>([]);

  useEffect(() => {
    const getProblems = async () => {
      const items = localStorage.getItem("SavedProblem");
      const set = new Set(items);
      console.log(set);
      if (set.size == 0) return;

      //fetching problems
      const problemsCollection = collection(databaseRef, "Problems");
      const q = query(
        problemsCollection,
        where("ProblemID", "in", Array.from(set))
      );
      const querySnapshot = await getDocs(q);

      const fetchedProblems: Problem[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Problem[];
      console.log(fetchedProblems);
      setProblems(fetchedProblems);
    };

    getProblems();
  }, []);

  return (
    <>
      <div className="w-[450px] h-fit rounded-lg p-4  bg-neutral-900 min-h-[300px]">
        <p className="text-center text-zinc-200 text-xl font-semibold">
          Saved Problems
        </p>
        <Table className="text-zinc-200">
          <TableHeader>
            <TableRow className="hover:bg-zinc-800">
              <TableHead className="text-zinc-300 ">Problem</TableHead>

              <TableHead className="text-right text-zinc-300">Level</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {problems.length == 0 ? (
              <p>No problem to show</p>
            ) : (
              problems.map((prob) => (
                <TableRow className="hover:bg-zinc-800" key={prob.id}>
                  <TableCell className="font-medium">{prob.Title}</TableCell>
                  <TableCell className="text-right flex ">
                    <p
                      className={
                        prob.Level == "Medium"
                          ? "p-2 bg-yellow-600 text-right w-fit h-fit   rounded-md"
                          : "p-2 bg-green-600 text-right w-fit h-fit rounded-md"
                      }
                    >
                      {prob.Level}
                    </p>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default SavedProblemsComponent;
