import { Languages } from "@/constants/languages";
import { useState } from "react";
import Select from "react-select"

const options = Languages.map((lang) => ({
  id: lang.id,
  name: lang.name,
  label: lang.label,
  value: lang.value,
}));


interface LanguageDropDownProps{
    handleLanguageChange:(setLang:any)=>void;
}

const LanguageDropDown=()=>{
    const [language,setLanguage]=useState(options[0])

    const handleChange=(selectLang:any)=>{
        setLanguage(language);
    }

    return(
        <>
            <Select
                onChange={handleChange}
                value={language}
                options={options}
            />
        </>
    )
}

export default LanguageDropDown;