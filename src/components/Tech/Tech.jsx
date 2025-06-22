import React from "react";
import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../HOC";
import { technologies } from "../../constants";

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "40px", // equivalent to Tailwind's gap-10
  },
  item: {
    width: "112px", // 28 * 4 = 112px
    height: "112px",
  },
};

const Tech = () => {
  return (
    <div style={styles.container}>
      {technologies.map((technology) => (
        <div style={styles.item} key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
