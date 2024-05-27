import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import useProblemStore from "@/zustang/ProblemStore";
import { useState } from "react";
import geminiService from "@/geminiService/geminiService";
import Markdown from "markdown-to-jsx";

interface DialogProps {
  code: string,
  language:string
}

const DialogComp: React.FC<DialogProps> = ({ code = "",language="" }: DialogProps) => {
  const { problems } = useProblemStore();
  const [geminiResp, setGeminiResp] = useState("");
  const [processing, setProcessing] = useState(false);
  const handleGemini = () => {
    setProcessing(true);
    let req = "";
    if (code) {
      req = `help me with ${problems.Title}, I tried the code: ${code} +
       in ${language}`;
    } else {
      req = `help me with ${problems.Title} in ${language}`;
    }

    geminiService
      .run(req)
      .then((res) =>
        {
             setGeminiResp(res)
             return setProcessing(false)
        })
      .catch((err) =>
        {
            console.log(err)
            return setProcessing(false)
        });
      

    
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="bg-green-500 outline-none font-bold shadow-xl shadow-green-400 hover:shadow-green-500 min-w-20 hover:bg-green-500"
          onClick={handleGemini}
        >
          {processing ? "Processing..." : "Ask Gemini"}
        </Button>
      </DialogTrigger>
      {geminiResp ? (
        <DialogContent className="max-w-[850px] max-h-[400px] w-full overflow-x-auto overflow-y-auto">
          <div className="grid">
            <div className="w-full">
              <Markdown className="w-full">{geminiResp}</Markdown>
            </div>
          </div>
        </DialogContent>
      ) : (
        ""
      )}
    </Dialog>
  );
};

export default DialogComp;
