import { Textarea } from "@/components/ui/textarea";

interface EditorInputProps {
  onChange: (input: string) => void;
}

const EditorInput: React.FC<EditorInputProps> = ({ onChange }) => {
  // Handle the change event and extract the value from the event target
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <Textarea
      className="w-full h-full bg-[#27272A]"
      placeholder="Custom Input"
      onChange={handleChange}
    />
  );
};

export default EditorInput;
