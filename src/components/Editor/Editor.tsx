import { Editor } from "@monaco-editor/react";

interface EditorCompProps {
  language: string;
  handleCodeChange: (codeType: string, newCode: string) => void;
}

const EditorComp: React.FC<EditorCompProps> = ({
  language = "javascript",
  handleCodeChange,
}) => {
  const handleChange = (code: string | undefined) => {
    code && handleCodeChange("code", code);
  };

  return (
    <>
      <Editor
        height="88vh"
        width="full"
        defaultLanguage="javascript"
        language={language}
        theme="vs-dark"
        onChange={handleChange}
      />
    </>
  );
};

export default EditorComp;
