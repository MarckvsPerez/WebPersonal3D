import React, { useContext } from "react";

import LanguageContext from "../constants/languageContext";
import texts from "../constants/texts";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";

const Tech = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const { language } = useContext(LanguageContext);
  const { technologies } = texts[language];

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology, index) => {
        if (isMobile && index >= 5) {
          return null;
        }
        return (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        );
      })}
    </div>
  );
};

export default SectionWrapper(Tech, "");
