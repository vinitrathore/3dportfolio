import React from "react";
import { motion } from "framer-motion";
import styles from "./sectionWrapper.module.css"; // your modular styles
import { staggerContainer } from "../utils/motion"; // adjust path as needed

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
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
