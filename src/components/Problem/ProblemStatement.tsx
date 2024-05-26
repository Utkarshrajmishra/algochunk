import useProblemStore from "@/zustang/ProblemStore";
import TimeCounter from "../timer/timer";
const ProblemStatement = () => {
  const { problems } = useProblemStore();

  const paragraphs = problems.Contraints
    .split("\n")
    .map((line, index) => <p key={index}>{line}</p>);
  return (
    <>
      <div className="w-[400px] h-[380px] overflow-scroll p-3 text-sm rounded-lg text-zinc-800">
        <div>
          <TimeCounter />
          <div className="flex justify-between">
            <h1 className="font-bold text-xl">{problems.Title}</h1>
            <div className="bg-green-500 text-white py-1 px-2 rounded-lg font-semibold tex-sm ">
              {problems.Level}
            </div>
          </div>
        </div>
        <h1 className="mt-2  tracking-wider">{problems.Statement}</h1>
        <h1 className="font-bold my-3">Input:</h1>
        <code className="bg-neutral-200 p-2 rounded-sm">{problems.Input}</code>
        <h1 className="font-bold my-3">Output:</h1>
        <code className="bg-neutral-200 p-2 rounded-sm">{problems.Output}</code>
        <h1 className="font-bold my-3">Contraints:</h1>
        <div className="tracking-wide text-m bg-neutral-200 p-2 rounded-sm">
          {paragraphs}
        </div>
      </div>
    </>
  );
};

export default ProblemStatement;
