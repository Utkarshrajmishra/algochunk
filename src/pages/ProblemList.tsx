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
     
        <div className="lg:px-20 md:px-20  py-3 px-3">
          <div>
            <TableList problems={problems} />
          </div>
        
      </div>
      
    </>
  );
};

export default ProblemList;
