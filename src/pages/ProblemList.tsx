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
      <section className=" bg-neutral-900  h-[100vh] ">
        
        <div className="lg:px-20 md:px-20py-3 px-3">
          <div>
            <TableList problems={problems} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProblemList;
