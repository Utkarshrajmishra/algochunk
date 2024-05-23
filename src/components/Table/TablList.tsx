import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "../ui/badge";
import { FaLongArrowAltRight } from "react-icons/fa";
import useProblemStore from "@/zustang/ProblemStore";
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
  const { updateProblem } = useProblemStore();

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
  };

  return (
    <>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
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
        <TableBody>
          {problems?.map((prob, indx) => (
            <TableRow className="text-[#EEEEEE]" key={indx}>
              <TableCell className="font-medium">Day {indx + 1}</TableCell>
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
                      ? "bg-green-700 p-1 px-2 w-fit rounded-md"
                      : "bg-yellow-700 p-1 px-2 w-fit rounded-md"
                  }
                >
                  {prob.Level}
                </p>
              </TableCell>
              <TableCell>Coming Soon</TableCell>
              <TableCell>
                <Badge>Hash Map</Badge>
              </TableCell>
              <TableCell className="align-right">
                <FaLongArrowAltRight color="#318CE7" fontSize="1.5em" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default TableList;
