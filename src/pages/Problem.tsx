import ProblemStatement from "@/components/ViewProblem/ViewProblem";
import Input from "@/components/Input/Input";
import EditorComp from "@/components/Editor/Editor";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Problem = () => {
  const [input,setInput]=useState('')
  const [output, setOutput]=useState('')

  return (
    <>
      <div className="flex">
        <div className="flex flex-col gap-2 p-2 ">
          <ProblemStatement />
          <Input onInputChange={setInput} output={output}/>
        </div>
        <div className="w-full p-2">
          <Button className="bg-green-600 text-white hover:bg-green-500 w-[100px]">
            Run
          </Button>
          <div className="mt-2">
            <EditorComp />
          </div>
        </div>
      </div>
    </>
  );
};

export default Problem;
