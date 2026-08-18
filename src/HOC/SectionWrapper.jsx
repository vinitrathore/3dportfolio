import React from "react";
import { motion } from "framer-motion";
import styles from "./sectionWrapper.module.css";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.02, margin: "0px 0px -20px 0px" }}
        className={styles.sectionWrapper}
      >
        {/* For anchor scrolling */}
        <span id={idName} className={styles.hashSpan}>&nbsp;</span>

        {/* Render the section component */}
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
