import { Editor } from "@monaco-editor/react";
const EditorComp = () => {
  return (
    <>
      <Editor
        height="89vh"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        theme="vs-dark"
       
      />
    </>
  );
};

export default EditorComp;
