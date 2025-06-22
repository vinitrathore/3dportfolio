import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import styles from "./Works.module.css";
import { github } from "../../assets";
import { SectionWrapper } from "../../HOC";
import { projects } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import globalStyles from "./globalStyles.module.css"; // Assuming this is your custom utility JS object for text

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={styles.card}
      >
        <div className={styles.cardImageContainer}>
          <img
            src={image}
            alt="project_image"
            className={styles.cardImage}
          />

          {/* <div className={styles.cardImgHover}>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className={styles.githubIcon}
            >
              <img
                src={github}
                alt="source code"
                style={{ width: "50%", height: "50%", objectFit: "contain" }}
              />
            </div>
          </div> */}
        </div>

        <div className={styles.projectContent}>
          <h3 className={styles.projectTitle}>{name}</h3>
          <p className={styles.projectDescription}>{description}</p>
        </div>

        <div className={styles.projectTags}>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              style={{ color: tag.color, fontSize: "14px" }}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={globalStyles.sectionSubText}>My work</p>
        <h2 className={globalStyles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className={styles.overviewTextContainer}>
        <motion.p variants={fadeIn("", "", 0.1, 1)} className={styles.overviewText}>
          The following projects highlight my skills and experience through real-world applications. Each project demonstrates my ability to solve complex problems, work with diverse technologies, and deliver impactful solutions tailored to business needs.
          effectively.
        </motion.p>
      </div>

      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
