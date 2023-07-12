import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { formation, myFormation } from "../constants";

const FormationCard = ({ index, name, specialty, start, end, university }) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="card  sm:w-[360px]  w-full"
    >
      <div className="inner bg-black-200 rounded-3xl ">
        <div className="back p-10 flex items-center flex-col">
          <p className="text-white font-black text-[36px]">{name}</p>

          <div className="mt-1">
            <p className="text-white tracking-wider text-[18px]">{specialty}</p>

            <div className="mt-7 flex justify-between items-center gap-1">
              <div className="flex-1 flex flex-col">
                <p className="mt-1 text-secondary text-[12px]">
                  {start} - {end}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="front p-10 flex items-center">
          <img src={university} />
        </div>
      </div>
    </motion.div>
  );
};

const Formation = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px] `}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>{myFormation.title}</p>
          <h2 className={styles.sectionHeadText}>{myFormation.subtitle}</h2>
        </motion.div>
      </div>
      <div
        className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap  gap-7  place-content-center`}
      >
        {formation.map((formation, index) => (
          <FormationCard key={formation.name} index={index} {...formation} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Formation, "");
