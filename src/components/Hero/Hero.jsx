import React from "react";
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

const Hero = () => {
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
                alt="Vinit"
                className={styles.heroProfileImg}
              />
              <span className={styles.onlineBadge} title="Available for work" />
            </motion.div>

            <div>
              <h1 className={styles.heroHeadText}>
                Hi, I'm <span style={{ color: "var(--accent-purple)" }}>Vinit</span>
              </h1>
              <div className={styles.heroStatusPill}>
                <span className={styles.pillDot} />
                <span>Full Stack • Python & FastAPI • React Native</span>
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
