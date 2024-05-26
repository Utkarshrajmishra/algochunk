import { Languages } from "@/constants/languages";
import { useState } from "react";
import Select from "react-select";
import { Styles } from "@/constants/styles";
const options = Languages.map((lang) => ({
  id: lang.id,
  name: lang.name,
  label: lang.label,
  value: lang.value,
}));

interface LanguageDropDownProps {
  handleLanguageChange: (setLang: any) => void;
}

const LanguageDropDown: React.FC<LanguageDropDownProps> = ({
  handleLanguageChange,
}) => {
  const [language, setLanguage] = useState(options[0]);

  const handleChange = (selectLang: any) => {
    setLanguage(selectLang);
    handleLanguageChange(selectLang);
  };

  return (
    <>
      <Select
        styles={Styles}
        onChange={handleChange}
        value={language}
        options={options}
      />
    </>
  );
};

export default LanguageDropDown;
