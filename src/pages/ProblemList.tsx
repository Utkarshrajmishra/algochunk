import { useEffect } from "react";

import useDataStore from "@/zustang/useDataStore";

import TableList from "@/components/Table/TableList";

const ProblemList = () => {
  const { problems, getProblems } = useDataStore();

  useEffect(() => {
    getProblems();
  }, []);

  return (
    <>
      <section className="h-[100vh]">
        <div className="relative h-full w-full bg-neutral-950">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
        <div className="lg:px-20 md:px-20py-3 px-3">
          <div>
            <TableList problems={problems} />
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default ProblemList;
