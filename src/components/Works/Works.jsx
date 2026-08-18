import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import styles from "./works.module.css";
import { SectionWrapper } from "../../HOC";
import { projects } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import globalStyles from "./globalStyles.module.css";

const ExternalIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const PlayStoreIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M3.609 1.814L13.792 12 3.61 22.186a2.036 2.036 0 0 1-.61-.926V2.74c0-.342.22-.673.609-.926zm11.233 11.236l2.368-2.368-11.83-6.83 9.462 9.198zm0-2.098l-9.462 9.196 11.83-6.828-2.368-2.368zm1.053 1.05l3.869-2.234a1.328 1.328 0 0 0 0-2.302l-3.869-2.235-2.022 2.022 2.022 2.022z" />
  </svg>
);

const GitHubIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
  badge_label,
}) => {
  const isPlayStore = live_link && live_link.includes("play.google.com");
  const isInfodeltasys = live_link && live_link.includes("infodeltasys.com");

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.75)}
      className={styles.cardMotionWrapper}
    >
      <Tilt
        options={{
          max: 20,
          scale: 1.01,
          speed: 400,
        }}
        className={styles.card}
      >
        <div
          className={styles.cardImageContainer}
          style={{ cursor: live_link || source_code_link ? "pointer" : "default" }}
          onClick={() => {
            const target = live_link || source_code_link;
            if (target) window.open(target, "_blank", "noopener,noreferrer");
          }}
        >
          <img
            src={image}
            alt={name}
            className={styles.cardImage}
            loading="lazy"
          />

          {live_link && (
            <div className={styles.liveBadge}>
              <span className={styles.liveDot} />
              <span>{badge_label || (isPlayStore ? "Google Play App" : "Live Project")}</span>
            </div>
          )}
        </div>

        <div className={styles.projectContent}>
          <h3 className={styles.projectTitle}>{name}</h3>
          <p className={styles.projectDescription}>{description}</p>
        </div>

        <div className={styles.projectTags}>
          {tags.map((tag) => (
            <span key={`${name}-${tag.name}`} className={styles.tagPill}>
              <span className={tag.color}>#{tag.name}</span>
            </span>
          ))}
        </div>

        <div className={styles.cardActions}>
          {live_link && (
            <a
              href={live_link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.liveBtn}
            >
              {isPlayStore ? (
                <>
                  <PlayStoreIcon />
                  <span>Google Play</span>
                </>
              ) : isInfodeltasys ? (
                <>
                  <ExternalIcon />
                  <span>Visit Website</span>
                </>
              ) : (
                <>
                  <ExternalIcon />
                  <span>Live Demo</span>
                </>
              )}
            </a>
          )}
          {source_code_link && !isPlayStore && !isInfodeltasys && (
            <a
              href={source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.codeBtn}
              title="View Code Repository"
            >
              <GitHubIcon />
              <span>Code</span>
            </a>
          )}
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
          The following projects highlight my skills and experience through real-world applications. Each project demonstrates my ability to solve complex problems, work with modern technology stacks, and deliver impactful, production-grade solutions.
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

export default SectionWrapper(Works, "projects");
