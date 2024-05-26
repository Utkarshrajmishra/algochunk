import useProblemStore from "@/zustang/ProblemStore";
const ProblemStatement = () => {
  const { problems } = useProblemStore();

  return (
    <>
      <div className="w-[400px] h-[380px] overflow-scroll p-3 text-sm rounded-lg text-zinc-800">
        <div className="flex justify-between">
          <h1 className="font-bold text-xl">{problems.Title}</h1>
          <div className="bg-green-600 text-white py-1 px-2 rounded-lg font-semibold tex-sm ">
            {problems.Level}
          </div>
        </div>
        <h1 className="mt-2  tracking-wider">{problems.Statement}</h1>
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
