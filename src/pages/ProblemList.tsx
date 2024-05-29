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
      <div className="p-3">
        <div className="outline outline-[1px] outline-zinc-200 rounded-lg ">
          <TableList problems={problems} />
        </div>
       
      </div>
    </>
  );
};

export default ProblemList;
