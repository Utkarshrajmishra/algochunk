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

interface TableListProps{

}

const TableList = () => {
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
            <TableRow className="text-[#EEEEEE]">
              <TableCell className="font-medium">Day 1</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell className="hover:text-blue-500 cursor-pointer w-[420px]">
                Longest Substring Without Repeat
              </TableCell>
              <TableCell>
                <p className="bg-green-700 p-1 px-2 w-fit rounded-md">Easy</p>
              </TableCell>
              <TableCell>Coming Soon</TableCell>
              <TableCell>
                <Badge>Hash Map</Badge>
              </TableCell>
              <TableCell className="text-right">
                <FaLongArrowAltRight color="#318CE7" fontSize="1.5em" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
     
    </>
  );
};

export default TableList;
