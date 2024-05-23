import useProblemStore from "@/zustang/ProblemStore";
import { Badge } from "../ui/badge";
const ProblemStatement = () => {
  const { problems } = useProblemStore();


  return (
    <>
      <div className="w-[400px] h-[420px] overflow-scroll text-[#ced4da] bg-[#27272A] p-5 rounded-lg">
        <div className="w-full text-right
        "><Badge className="bg-green-700 text-white">{problems.Level}</Badge></div>
        <h1 className="text-white text-xl font-bold">{problems.Title}</h1>
        <h1 className="mt-2 text-m tracking-wide">{problems.Statement}</h1>
        <h1 className="font-bold mt-3">Input:</h1>
        <code>{problems.Input}</code>
        <h1 className="font-bold mt-3">Output:</h1>
        <code>{problems.Output}</code>
        <h1 className="font-bold mt-3">Contraints:</h1>
        <p className="tracking-wide text-m">{problems.Contraints}</p>
      </div>
    </>
  );
};

export default ProblemStatement;
