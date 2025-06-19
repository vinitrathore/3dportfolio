import React from "react";
import styles from "./tech.module.css";

import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../HOC";
import { technologies } from "../../constants";

const Tech = () => {
  return (
    <div className={styles.container}>
      {technologies.map((technology) => (
        <div className={styles.item} key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
