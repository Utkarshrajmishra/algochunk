import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "../ui/skeleton";
import { useNavigate } from "react-router-dom";
import useFrontendStore from "@/zustang/useFrontendStore";
import { Input } from "../ui/input";
import { useState } from "react";
import {  FaLongArrowAltRight } from "react-icons/fa";

interface FrontendProblem {
  id: string;
  Title: string;
  Statement: string;
  Level: string;
  Constraints: string;
}

interface TableListProps {
  problems: FrontendProblem[];
}

const FrontendTableList: React.FC<TableListProps> = ({ problems }) => {
  const [filter, setFilter] = useState("");
  const {Frontendloading}=useFrontendStore()
  //const navigate = useNavigate()
  
  

  return (
    <>
      <div className="flex flex-col gap-10 py-12">
        <div className="flex flex-wrap gap-3">
          <div className="h-[20px] w-[100%] lg:w-[40%] md:w-[40%]">
            <Input
              type="text"
              placeholder="Search problems"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="text-zinc-200 bg-neutral-950 z-20"
            />
          </div>
        </div>
        <div className="outline outline-[1px] outline-zinc-200 rounded-lg">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-neutral-800">
                <TableHead className="w-fit text-zinc-200">Serial No.</TableHead>
                <TableHead className="text-zinc-200">Problems</TableHead>
                <TableHead className="text-zinc-200">Difficulty</TableHead>
                <TableHead className="text-zinc-200">Solve</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text-zinc-200">
              {Frontendloading
                ? Array.from({ length: 10 }).map((_, indx) => (
                    <TableRow key={indx} className="hover:bg-neutral-800">
                      <TableCell>
                        <Skeleton className="h-4 w-12" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="h-4 w-16" />
                      </TableCell>
                      <TableCell className="w-[420px]">
                        <Skeleton className="h-4 w-full" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="h-4 w-16" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="h-4 w-24" />
                      </TableCell>
                   </TableRow>
                  ))
                : problems
                    ?.filter((prob) =>
                      prob.Title.toLowerCase().includes(filter.toLowerCase())
                    )
                    .map((prob, indx) => (
                      <TableRow key={indx} className="hover:bg-neutral-800">
                        <TableCell className="font-medium">
                           {indx + 1}
                        </TableCell>
                         <TableCell
                          className="cursor-pointer w-[420px]"
                        //   onClick={() =>
                        //     updateProblemState(
                        //       prob.id,
                        //       prob.Title,
                        //       prob.Statement,
                        //       prob.Level,
                        //       prob.Contraints
                        //     )
                        //   }
                        >
                          {prob.Title}
                        </TableCell>
                        <TableCell>
                          <p
                            className={
                              prob.Level === "Easy"
                                ? "bg-green-600 text-white p-1 font-bold px-2 w-fit rounded-md"
                                : "bg-yellow-600 p-1 text-white font-bold px-2 w-fit rounded-md"
                            }
                          >
                            {prob.Level}
                          </p>
                        </TableCell>
                        <TableCell className="cursor-pointer">
                          <FaLongArrowAltRight
                            fontSize={22}
                            color="#2563eb"
                            // onClick={() =>
                            //   updateProblemState(
                            //     prob.id,
                            //     prob.Title,
                            //     prob.Statement,
                            //     prob.Level,
                            //     prob.Input,
                            //     prob.Output,
                            //     prob.Contraints
                            //   )
                            // }
                          />
                        </TableCell>
                      </TableRow>
                    ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default FrontendTableList;
