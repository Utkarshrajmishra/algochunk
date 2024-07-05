import useFrontendProblemStore from "@/zustang/useFrontendProblem";
import TimeCounter from "../Timer/timer";
const ProblemView=()=>{
    const {problems}=useFrontendProblemStore()

    const formatText = (text: string) => {
    console.log(text.split("\\n"));
    return text.split("\\n").map((line, index) => <p className="mt-2 tracking-wider bg-neutral-800 p-2 rounded-md leading-6" key={index}>{`${index+1}. ${line}`}</p>);
  };


    return (
      <>
        <div className="w-[29.5%] max-h-[100vh] rounded bg-neutral-900 overflow-scroll p-4 flex flex-col gap-2">
         <TimeCounter/>
          <div className="flex gap-5 flex-col ">
            <h1 className="text-xl text-zinc-200 font-semibold">
              {problems.Title}
            </h1>
            <p className="text-zinc-200 tracking-wider">{problems.Statement}</p>
            <div className="flex gap-2 flex-col">
              <p className="mt-2 text-xl text-zinc-200 font-semibold">
                User Case:
              </p>
              <p className="text-zinc-200">{formatText(problems.Contraints)}</p>
            </div>
          </div>
        </div>
      </>
    );
}

export default ProblemView