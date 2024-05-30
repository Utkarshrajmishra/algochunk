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
  const [filter,setFilter]=useState('')
  const [filter_level,setFilterLevel]=useState('')
  const { updateProblem } = useProblemStore();
  const navigate = useNavigate();
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
    navigate("/problem");
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
              className="text-zinc-800"
            />
          </div>
      
        </div>
        <div className="outline outline-[1px] outline-zinc-200 rounded-lg ">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Day</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Problems</TableHead>
                <TableHead> Difficulty</TableHead>
                <TableHead>Solution</TableHead>
                <TableHead> Tags</TableHead>
                <TableHead className="text-right"> Solve</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text-zinc-800 ">
              {problems
                ?.filter((prob) => {
                  return filter == ""
                    ? prob
                    : prob.Title.toLowerCase().includes(filter.toLowerCase());
                })
                .map((prob, indx) => (
                  <TableRow key={indx}>
                    <TableCell className="font-medium">
                      Day {indx + 1}
                    </TableCell>
                    <TableCell>Completed</TableCell>
                    <TableCell
                      className="hover:text-blue-500 cursor-pointer w-[420px]"
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
                          prob.Level == "Easy"
                            ? "bg-green-500 text-white p-1 font-bold px-2 w-fit rounded-md"
                            : "bg-yellow-500 p-1 text-white font-bold px-2 w-fit rounded-md"
                        }
                      >
                        {prob.Level}
                      </p>
                    </TableCell>
                    <TableCell>Coming Soon</TableCell>
                    <TableCell>
                      <Badge className="bg-slate-400">Hash Map</Badge>
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
