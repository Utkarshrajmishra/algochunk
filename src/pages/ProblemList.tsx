import { useEffect } from "react";

import useDataStore from "@/zustang/useDataStore";

import TableList from "@/components/Table/TableList";

const ProblemList = () => {
  const { problems, loading, getProblems } = useDataStore();

  useEffect(() => {
    getProblems();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center w-full py-4">
        <div className="max-w-[1200px] outline outline-[1px] outline-zinc-200 rounded-lg">
          <TableList problems={problems} />
        </div>
        <p className="text-zinc-600 text-sm font-bold pt-3">
          A list of your recent invoices.
        </p>
      </div>
    </>
  );
};

export default ProblemList;
