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

const ArrowRightIcon = () => (
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
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const roles = [
  "Python & FastAPI Backend Developer",
  "React Native & Android Developer",
  "React.js & Full Stack Engineer",
  "PostgreSQL & Database Architect",
];

const Hero = () => {
  // Smooth typewriter state for roles
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 30 : 60;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedRole.length < currentRole.length) {
          setDisplayedRole(currentRole.slice(0, displayedRole.length + 1));
        } else {
          // Pause when role is fully typed
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedRole.length > 0) {
          setDisplayedRole(currentRole.slice(0, displayedRole.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedRole, isDeleting, roleIndex]);

  return (
    <section className={styles.heroSection}>
      <div className={styles.absoluteContainer}>
        {/* Left vertical glowing line & circle */}
        <div className={styles.lineContainer}>
          <div className={styles.circle} />
          <div className={styles.violetGradient} />
        </div>

        {/* Hero Content */}
        <div className={styles.heroContent}>
          {/* Top header row with Profile Avatar & Heading */}
          <div className={styles.heroHeaderRow}>
            <div className={styles.heroProfileWrapper}>
              <img
                src={vinitids}
                alt="Vinit Kumar Rathore"
                className={styles.heroProfileImg}
                loading="eager"
                decoding="async"
              />
              <span className={styles.onlineBadge} title="Available for work" />
            </div>

            <div className={styles.heroTextColumn}>
              <h1 className={styles.heroHeadText}>
                Hi, I'm{" "}
                <span className={styles.nameHighlight}>
                  Vinit Kumar Rathore
                </span>
              </h1>

              {/* Status Pill with Typewriter Role */}
              <div className={styles.heroStatusPill}>
                <span className={styles.pillDot} />
                <span className={styles.pillText}>
                  {displayedRole || "Software Developer"}
                </span>
                <span className={styles.cursor}>|</span>
              </div>
            </div>
          </div>

          <p className={styles.heroSubText}>
            I build high-performance REST APIs with FastAPI, cross-platform mobile apps with React Native, and full-stack web applications.
          </p>

          {/* Action Buttons */}
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
              <ArrowRightIcon />
            </a>
          </div>
        </div>
      </div>

      {/* 3D Computer Canvas */}
      <ComputersCanvas />

      {/* Scroll Down Indicator */}
      <div className={styles.scrollContainer}>
        <a href="#about" aria-label="Scroll to About section">
          <div className={styles.scrollBox}>
            <motion.div
              animate={{ y: [0, 22, 0] }}
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
