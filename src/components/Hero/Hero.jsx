import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./hero.module.css";
import { ComputersCanvas } from "../../components/canvas";
import { vinitids, resumePDF } from "../../assets";

const DownloadIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);

const PencilIcon = ({ small }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={small ? styles.pencilIconSmall : styles.pencilIcon}
    title="Writing..."
  >
    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
  </svg>
);

const roles = [
  "MERN Stack Developer",
  "JavaScript Developer",
  "Node.js Developer",
  "Python Developer",
  "Junior AI Engineer",
];

const Hero = () => {
  // Title pencil writing state
  const fullTitle = "Hi, I'm Vinit Kumar Rathore";
  const [titleIndex, setTitleIndex] = useState(0);
  const [isTitleDone, setIsTitleDone] = useState(false);

  // Status pill pencil writing state
  const [roleIndex, setRoleIndex] = useState(0);
  const [pillText, setPillText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Step 1: Pencil writes "Hi, I'm Vinit Kumar Rathore" letter by letter
  useEffect(() => {
    if (titleIndex < fullTitle.length) {
      const timer = setTimeout(() => {
        setTitleIndex((prev) => prev + 1);
      }, 75);
      return () => clearTimeout(timer);
    } else {
      setIsTitleDone(true);
    }
  }, [titleIndex]);

  // Step 2: Pencil writes the roles one by one without shifting layout
  useEffect(() => {
    if (!isTitleDone) return;

    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 35 : 70;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (pillText.length < currentRole.length) {
          setPillText(currentRole.slice(0, pillText.length + 1));
        } else {
          // Pause when role is fully written before deleting
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        if (pillText.length > 0) {
          setPillText(currentRole.slice(0, pillText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [pillText, isDeleting, isTitleDone, roleIndex]);

  const displayedTitle = fullTitle.slice(0, titleIndex);
  const prefix = displayedTitle.slice(0, 8); // "Hi, I'm "
  const namePart = displayedTitle.slice(8); // "Vinit Kumar Rathore"

  return (
    <section className={styles.heroSection}>
      <div className={styles.absoluteContainer}>
        <div className={styles.lineContainer}>
          <div className={styles.circle} />
          <div className={styles.violetGradient} />
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroHeaderRow}>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className={styles.heroProfileWrapper}
            >
              <img
                src={vinitids}
                alt="Vinit Kumar Rathore"
                className={styles.heroProfileImg}
              />
              <span className={styles.onlineBadge} title="Available for work" />
            </motion.div>

            <div className={styles.heroTextColumn}>
              <h1 className={styles.heroHeadText}>
                <span>{prefix}</span>
                {namePart && (
                  <span style={{ color: "var(--accent-purple)" }}>
                    {namePart}
                  </span>
                )}
                {!isTitleDone && <PencilIcon />}
              </h1>

              <div className={styles.heroStatusPill}>
                <span className={styles.pillDot} />
                <span>{pillText || (isTitleDone ? "" : "Writing...")}</span>
                {isTitleDone && <PencilIcon small />}
              </div>
            </div>
          </div>

          <p className={styles.heroSubText}>
            I build high-performance web applications, scalable Python/FastAPI backends, and robust React Native mobile apps.
          </p>

          <div className={styles.heroBtnGroup}>
            <a
              href={resumePDF}
              download="Vinit_Rathore_Resume.pdf"
              className={styles.resumeBtn}
              title="Download Vinit's Resume"
            >
              <DownloadIcon />
              <span>Download Resume</span>
            </a>
            <a href="#contact" className={styles.contactBtn}>
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      </div>

      <ComputersCanvas />

      <div className={styles.scrollContainer}>
        <a href="#about" aria-label="Scroll to About section">
          <div className={styles.scrollBox}>
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className={styles.scrollDot}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
