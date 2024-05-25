import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

interface EditorOutputProps{
  Output:string
}

const EditorOutput: React.FC<EditorOutputProps> = ({Output}) => {
    const [result, setResult]=useState("")

    const onOuptutChange=()=>{
      setResult(Output);
    }
  
  return <Textarea className="w-full h-full bg-[#121a30]" onChange={onOuptutChange} value={result} disabled/>;
};

export default EditorOutput;
