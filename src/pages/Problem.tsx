import ProblemSwitch from "@/components/Problem/ProblemSwitch";
import Input from "@/components/Input/Input";
import EditorComp from "@/components/Editor/Editor";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import LanguageDropDown from "@/components/dropdown/languages";
import axios from "axios";

const Problem = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [LangId, setLangId] = useState(63);
  const [language, setLanguage] = useState("");
  const [processing, setProcessing] = useState(false);
  const [code, setCode] = useState<any>();

  const handleChangeLang = (newLang: any) => {
    setLangId(newLang.id);
    setLanguage(newLang.value);
  };

  const handleCodeChange = (codeType: string, code: string) => {
    if (codeType == "code") setCode(code);
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

        // get error status
        let status = err.response.status;
        //console.log("status", status);
        if (status === 429) {
          alert("Servers are busy, please try again later!");
        }
        return setProcessing(false);
      });
  };

  const checkStatus = async (token: any) => {
    console.log(import.meta.env.VITE_API_URL);
    const options = {
      method: "GET",
      url: import.meta.env.VITE_JUDGE_URL + "/" + token,
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

      // Processed - we have a result
      if (statusId === 1 || statusId === 2) {
        // still processing
        setTimeout(() => {
          checkStatus(token);
        }, 2000);
        return;
      } else {
        setProcessing(false);
        setOutput(response.data);
        //console.log("response.data", response.data);
        return;
      }
    } catch (err) {
      console.log("err", err);
      setProcessing(false);
    }
  };

  return (
    <>
      <div className="flex justify-between w-full px-3 py-2">
        <img src="./logo.png" width={40} height={40} />

        <div className="flex gap-2">
          <Button
            className="bg-green-500  shadow-green-400 font-bold text-white  w-fit h-10 shadow-xl hover:bg-green-500  hover:shadow-green-500"
            onClick={handleCompile}
          >
            {processing ? "Processing.." : "Compile and Excute"}
          </Button>
          <LanguageDropDown handleLanguageChange={handleChangeLang} />
        </div>
      </div>
      <div className="flex px-3 pb-1  w-full">
        <div className="flex flex-col gap-2 ">
          <ProblemSwitch/>
          <Input onInputChange={setInput} input={input} output={output} />
        </div>
        <div className="w-full p-1">
          <div className="mt-2">
            <EditorComp
              language={language}
              handleCodeChange={handleCodeChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Problem;
