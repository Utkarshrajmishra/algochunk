import { Card } from "@/components/ui/card";
import EditorInput from "./EditorInput";
import EditorOutput from "../Output/EditorOutput";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Input = () => {
  return (
    <Tabs defaultValue="input" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="input">Input</TabsTrigger>
        <TabsTrigger value="output">Ouput</TabsTrigger>
      </TabsList>
      <TabsContent value="input">
        <Card className="h-[163px] ">
          <EditorInput />
        </Card>
      </TabsContent>
      <TabsContent value="output">
        <Card className="h-[163px]">
          <EditorOutput />
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default Input;
