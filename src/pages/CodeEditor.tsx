import ProblemSwitch from "@/components/Problem/ProblemSwitch";
import Input from "@/components/Input/Input";
import EditorComp from "@/components/Editor/Editor";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import LanguageDropDown from "@/components/dropdown/languages";
import axios from "axios";
import DialogComp from "@/components/Dailog/DialogComponent";
import {
  IoIosCheckmarkCircleOutline,
  IoIosCheckmarkCircle,
} from "react-icons/io";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { IoSaveOutline, IoSave } from "react-icons/io5"; // Imported IoSave
import {
  getStorage,
  editLocalStorage,
  saveProblem,
} from "@/utils/LocalStorage";
import { Link } from "react-router-dom";
import useProblemStore from "@/zustang/useProblemStore";
import toast, { Toaster } from "react-hot-toast";
import EditorOutput from "@/components/Output/EditorOutput";
import EditorInput from "@/components/Input/EditorInput";

const CodeEditor = () => {
  const { problems } = useProblemStore();
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [LangId, setLangId] = useState(63);
  const [language, setLanguage] = useState("");
  const [processing, setProcessing] = useState(false);
  const [code, setCode] = useState<any>();
  const [renderLikes, setRenderLikes] = useState(false);
  const [renderSolved, setSolved] = useState(false);
  const [isSaved, setIsSaved] = useState(false); // New state to track saved status

  const handleChangeLang = (newLang: any) => {
    setLangId(newLang.id);
    setLanguage(newLang.value);
  };

  const handleLike = () => {
    const status = !renderLikes;
    const newStatus = editLocalStorage(problems.ID, "Likes", status);
    toast.success("Like Updated!", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
    setRenderLikes(newStatus);
  };

  const SaveProblem = () => {
    saveProblem(problems.ID, "SavedProblem");
    toast.success("Problem saved successfully", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
    setIsSaved(true); // Update saved status
  };

  const completeProblem = () => {
    saveProblem(problems.ID, "CompletedProblems");
    toast.success("Marked completed", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  useEffect(() => {
    const isLiked = getStorage(problems.ID, "Likes");
    const completedProblem = getStorage(problems.ID, "CompletedProblems");
    const savedProblem = getStorage(problems.ID, "SavedProblem"); // Check if the problem is saved
    setSolved(completedProblem);
    setRenderLikes(isLiked);
    setIsSaved(savedProblem); // Set the initial saved status
  }, [problems.ID]);

  const handleCodeChange = (codeType: string, code: string) => {
    if (codeType === "code") setCode(code);
  };

  const handleCompile = () => {
    setProcessing(true);
    const Data = {
      language_id: LangId,
      source_code: btoa(code),
      stdin: btoa(input),
    };

    const options = {
      method: "POST",
      url: import.meta.env.VITE_JUDGE_URL,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
        "X-RapidAPI-Host": import.meta.env.VITE_JUDGE_HOST,
        "X-RapidAPI-Key": import.meta.env.VITE_JUDGE_KEY,
      },
      data: Data,
    };

    axios
      .request(options)
      .then((res) => {
        const token = res.data.token;
        checkStatus(token);
      })
      .catch((err) => {
        console.log(err);
        const status = err.response.status;
        if (status === 429) {
          alert("Servers are busy, please try again later!");
        }
        setProcessing(false);
      });
  };

  const checkStatus = async (token: any) => {
    const options = {
      method: "GET",
      url: `${import.meta.env.VITE_JUDGE_URL}/${token}`,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
        "X-RapidAPI-Host": import.meta.env.VITE_JUDGE_HOST,
        "X-RapidAPI-Key": import.meta.env.VITE_JUDGE_KEY,
      },
    };
    try {
      let response = await axios.request(options);
      let statusId = response.data.status?.id;

      if (statusId === 1 || statusId === 2) {
        setTimeout(() => {
          checkStatus(token);
        }, 2000);
        return;
      } else {
        setProcessing(false);
        setOutput(response.data);
        return;
      }
    } catch (err) {
      toast.error(`Error: ${err}`);
      setProcessing(false);
    }
  };

  return (
    <>
      <div className="flex justify-between w-full px-3 py-2 bg-neutral-900">
        <div className="flex gap-4 justify-between">
          <LanguageDropDown handleLanguageChange={handleChangeLang} />
        </div>
      </div>
      <div className="flex px-3 pb-1 w-full bg-neutral-900">
        <div className="p-1 w-[70%]">
          <div className="mt-2 ">
            <EditorComp
              language={language}
              handleCodeChange={handleCodeChange}
            />
          </div>
        </div>
        <div className="w-[30%] flex flex-col gap-3 p-3">
            <h2 className="mt-2 text-zinc-200 text-xl font-semibold">Ouput</h2>
          <div className="h-[180px]">
            <EditorOutput Output={output} />
          </div>
          <div className="flex flex-col gap-4">
            {" "}
            <div className="h-[180px]">
              {" "}
              <EditorInput onChange={setInput} InputValue={input} />
            </div>
            <Button
              className="bg-neutral-800 font-bold text-white w-fit h-10  hover:bg-neutral-700"
              onClick={handleCompile}
            >
              {processing ? "Processing.." : "Compile and Execute"}
            </Button>
          </div>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default CodeEditor;
