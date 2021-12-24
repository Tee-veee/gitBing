// ICON IMPORTS
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaPython } from "react-icons/fa";
import {
  SiJavascript,
  SiPhp,
  SiCplusplus,
  SiPowershell,
  SiTypescript,
} from "react-icons/si";
import { DiRuby } from "react-icons/di";

function RepoIcon({ languageState }) {
  // GETS KAY VALUES FROM PASSED IN OBJECT
  const languages = Object.keys(languageState).sort();

  // CREATE A FUNCTION WHICH IS PASSED IN A PARAM, CHECK PARAM VALUE AND OUTPUT RESULT BASED ON THAT
  const getIcons = (language) => {
    switch (language) {
      case "HTML":
        return (
          <AiFillHtml5 className="flex items-center justify-center text-red-600 mb-2 md:mb-0 md:mr-2" />
        );
      case "CSS":
        return (
          <FaCss3Alt className="flex items-center justify-center text-blue-600 mb-2 md:mb-0 md:mr-2" />
        );
      case "JavaScript":
        return (
          <SiJavascript className="flex items-center justify-center mb-2 md:mb-0 text-yellow-500 md:mr-2" />
        );
      case "Python":
        return (
          <FaPython className="md:col-start-3 flex items-center justify-center mb-2 md:mb-0 text-yellow-500 md:mr-2" />
        );
      case "PHP":
        return (
          <SiPhp className="flex items-center justify-center mb-2 md:mb-0 text-violet-500 md:mr-2" />
        );
      case "C++":
        return (
          <SiCplusplus className="flex items-center justify-center mb-2 md:mb-0 text-blue-500 md:mr-2" />
        );
      case "Shell":
        return (
          <SiPowershell className="flex items-center justify-center mb-2 md:mb-0 text-black md:mr-2" />
        );
      case "TypeScript":
        return (
          <SiTypescript className="flex items-center justify-center mb-2 md:mb-0 text-blue-500" />
        );
      case "Ruby":
        return (
          <DiRuby className="flex items-center justify-center mb-2 md:mb-0 text-red-500" />
        );
      default:
        return;
    }
  };

  // RENDER FUNCTION CREATED AND PASS IN PARAM WITH MAP
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center text-4xl">
      {languages.map((languageItem) => getIcons(languageItem))}
    </div>
  );
}

export default RepoIcon;
