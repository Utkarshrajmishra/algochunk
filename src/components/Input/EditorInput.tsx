import { Textarea } from "@/components/ui/textarea";

interface EditorInputProps {
  onChange: (input: string) => void,
  InputValue:string,
}

const EditorInput: React.FC<EditorInputProps> = ({ onChange, InputValue="" }) => {
  // Handle the change event and extract the value from the event target
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <Textarea
      className="w-full h-full bg-[#27272A]"
      placeholder="Custom Input"
      onChange={handleChange}
      value={InputValue}
    />
  );
};

export default EditorInput;
