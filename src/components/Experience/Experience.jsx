import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import styles from "./experience.module.css";
import { experiences } from "../../constants";
import { SectionWrapper } from "../../HOC";
import { textVariant } from "../../utils/motion";
import { useTheme } from "../../context/ThemeContext";

const ExperienceCard = ({ experience, isDark }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: isDark ? "#151030" : "#ffffff",
        color: isDark ? "#ffffff" : "#0f172a",
        boxShadow: isDark
          ? "0 10px 30px -10px rgba(0, 0, 0, 0.5)"
          : "0 10px 30px -10px rgba(0, 0, 0, 0.08)",
        borderRadius: "16px",
        border: isDark
          ? "1px solid rgba(255, 255, 255, 0.08)"
          : "1px solid rgba(0, 0, 0, 0.06)",
      }}
      contentArrowStyle={{
        borderRight: isDark ? "7px solid #151030" : "7px solid #ffffff",
      }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg, boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}
      icon={
        <div className={styles.cardIcon}>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className={styles.cardImage}
          />
        </div>
      }
    >
      <div>
        <h3 className={styles.cardTitle}>{experience.title}</h3>
        <p className={styles.cardCompany}>{experience.company_name}</p>
      </div>

      <ul className={styles.cardPoints}>
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`} className={styles.cardPoint}>
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} ${styles.centerText}`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} ${styles.centerText}`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className={styles.timelineContainer}>
        <VerticalTimeline lineColor={isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              isDark={isDark}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
