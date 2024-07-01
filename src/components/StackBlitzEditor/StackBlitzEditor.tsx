import React, { useEffect } from "react";
import sdk from "@stackblitz/sdk";


interface stackblitzProps{
 width:string,
 height: string
}

const StackBlitzEditor: React.FC<stackblitzProps> = ({width, height}: stackblitzProps) => {
  useEffect(() => {
    // Embed the StackBlitz project
    sdk.embedProjectId("editor", "stackblitz-starters-hkpxas", {
      forceEmbedLayout: true,
      openFile: "src/App.tsx",
    });
  }, []);

  return (
    <section className={`${width} ${height}`}>
      <div id="editor" className="w-full h-full"></div>
    </section>
  );
};

export default StackBlitzEditor;
