import React, { useEffect } from "react";
import sdk from "@stackblitz/sdk";

const StackBlitzEditor: React.FC = () => {
  useEffect(() => {
    // Embed the StackBlitz project
    sdk.embedProjectId("editor", "stackblitz-starters-hkpxas", {
      forceEmbedLayout: true,
      openFile: "src/App.tsx",
    });
  }, []);

  return (
    <section className="w-[100%] h-[100vh]">
      <div id="editor" className="w-full h-full"></div>
    </section>
  );
};

export default StackBlitzEditor;
