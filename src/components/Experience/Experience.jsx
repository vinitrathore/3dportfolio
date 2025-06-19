import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import styles from "./Experience.module.css"; // CSS Module
import { experiences } from "../../constants";
import { SectionWrapper } from "../../HOC";
import { textVariant } from "../../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
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
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
