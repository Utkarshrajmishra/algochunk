import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { Badge } from "../ui/badge";
import { FaLongArrowAltRight } from "react-icons/fa";
import useProblemStore from "@/zustang/useProblemStore";
import { Input } from "../ui/input";
import { useState } from "react";
interface Problem {
  id: string;
  Title: string;
  Statement: string;
  Level: string;
  Input: string;
  Output: string;
  Contraints: string;
}

interface TableListProps {
  problems: Problem[];
}

const TableList: React.FC<TableListProps> = ({ problems }) => {
  const [filter, setFilter] = useState("");
  const { updateProblem } = useProblemStore();
  //const navigate = useNavigate();
  const updateProblemState = (
    title: string,
    statemenet: string,
    level: string,
    input: string,
    output: string,
    constraints: string
  ) => {
    updateProblem("Title", title);
    updateProblem("Statement", statemenet);
    updateProblem("Level", level);
    updateProblem("Input", input);
    updateProblem("Output", output);
    updateProblem("Contraints", constraints);
    // navigate("/problem");
  };

  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="flex flex-wrap gap-3">
          <div className="h-[20px] w-[100%] lg:w-[40%] md:w-[40%]">
            <Input
              type="text"
              placeholder="Search problems"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="text-zinc-200 bg-zinc-900"
            />
          </div>
        </div>
        <div className="outline outline-[1px] outline-zinc-200 rounded-lg ">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-neutral-800">
                <TableHead className="w-[100px] text-zinc-200">Day</TableHead>
                <TableHead className=" text-zinc-200">Status</TableHead>
                <TableHead className=" text-zinc-200">Problems</TableHead>
                <TableHead className=" text-zinc-200">Difficulty</TableHead>
                <TableHead className=" text-zinc-200">Solution</TableHead>
                <TableHead className=" text-zinc-200">Tags</TableHead>
                <TableHead className="text-right text-zinc-200">
                  Solve
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text-zinc-200">
              {problems
                ?.filter((prob) => {
                  return filter === ""
                    ? prob
                    : prob.Title.toLowerCase().includes(filter.toLowerCase());
                })
                .map((prob, indx) => (
                  <TableRow key={indx} className="hover:bg-neutral-800">
                    <TableCell className="font-medium">
                      Day {indx + 1}
                    </TableCell>
                    <TableCell>Completed</TableCell>
                    <TableCell
                      className=" cursor-pointer w-[420px]"
                      onClick={() =>
                        updateProblemState(
                          prob.Title,
                          prob.Statement,
                          prob.Level,
                          prob.Input,
                          prob.Output,
                          prob.Contraints
                        )
                      }
                    >
                      {prob.Title}
                    </TableCell>
                    <TableCell>
                      <p
                        className={
                          prob.Level === "Easy"
                            ? "bg-green-500 text-white p-1 font-bold px-2 w-fit rounded-md"
                            : "bg-yellow-500 p-1 text-white font-bold px-2 w-fit rounded-md"
                        }
                      >
                        {prob.Level}
                      </p>
                    </TableCell>
                    <TableCell>Coming Soon</TableCell>
                    <TableCell>
                      <Badge className="bg-slate-800">Hash Map</Badge>
                    </TableCell>
                    <TableCell className="align-right">
                      <FaLongArrowAltRight color="#318CE7" fontSize="1.5em" />
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

export default TableList;
