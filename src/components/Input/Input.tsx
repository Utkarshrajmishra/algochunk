import { Card } from "@/components/ui/card";
import EditorInput from "./EditorInput";
import EditorOutput from "../Output/EditorOutput";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface EditorInputProps {
  onInputChange: (value: string) => void;
  input: string;
  output: any;
}

const Input: React.FC<EditorInputProps> = ({
  onInputChange,
  input,
  output,
}) => {
  return (
    <Tabs defaultValue="output" className="w-[400px] px-3">
      <TabsList className="grid w-full grid-cols-2 h-[40px] bg-zinc-200">
        <TabsTrigger value="output">Ouput</TabsTrigger>
        <TabsTrigger value="input">Input</TabsTrigger>
      </TabsList>
      <TabsContent value="output">
        <Card className="h-[155px]">
          <EditorOutput Output={output} />
        </Card>
      </TabsContent>
      <TabsContent value="input">
        <Card className="h-[155px] ">
          <EditorInput onChange={onInputChange} InputValue={input} />
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default Input;
