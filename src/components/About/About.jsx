import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import styles from './about.module.css';
import { services, vinitids } from '../../constants';
import { resumePDF } from '../../assets';
import { fadeIn, textVariant } from '../../utils/motion';
import { SectionWrapper } from '../../HOC';

const DownloadSmallIcon = () => (
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
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);

const ServiceCard = ({ index, title, subtitle, description, icon }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.15, 0.75)}
    className={styles.cardMotionWrapper}
  >
    <Tilt className={styles.cardTilt} options={{ max: 25, scale: 1.02, speed: 400 }}>
      <div className={styles.cardWrapper}>
        <div className={styles.cardInner}>
          <div className={styles.cardIconContainer}>
            <img
              src={icon}
              alt={title}
              className={styles.cardIcon}
            />
          </div>

          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>{title}</h3>
            {subtitle && <p className={styles.cardSubtitle}>{subtitle}</p>}
            {description && <p className={styles.cardDescription}>{description}</p>}
          </div>
        </div>
      </div>
    </Tilt>
  </motion.div>
);

const About = () => {
  return (
    <div id="about" className={styles.about}>
      <motion.div variants={textVariant()} className={styles.headerWrapper}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className={styles.aboutTopRow}>
        <motion.div
          variants={fadeIn('right', 'spring', 0.1, 1)}
          className={styles.descriptionWrapper}
        >
          <p className={styles.description}>
            I'm a dedicated full-stack and mobile engineer specializing in <strong>Python with FastAPI backend architectures</strong>, <strong>React Native mobile apps</strong>, and <strong>React.js</strong> web applications. I architect high-performance REST APIs, real-time clinical workflows (HIS), on-device OCR utilities (Xtract), and scalable PostgreSQL/Supabase database systems.
          </p>

          <div className={styles.highlightsList}>
            <span className={styles.highlightPill}>
              <span className={styles.highlightDot} />
              Python & FastAPI Backend
            </span>
            <span className={styles.highlightPill}>
              <span className={styles.highlightDot} />
              React Native & Android Apps
            </span>
            <span className={styles.highlightPill}>
              <span className={styles.highlightDot} />
              React.js & Full Stack Web
            </span>
            <span className={styles.highlightPill}>
              <span className={styles.highlightDot} />
              PostgreSQL & Supabase
            </span>
          </div>
        </motion.div>

        {/* Prominent High-Resolution Profile Card */}
        <motion.div
          variants={fadeIn('left', 'spring', 0.25, 0.75)}
          className={styles.profileShowcase}
        >
          <div className={styles.profileImgWrapper}>
            <img
              src={vinitids}
              alt="Vinit Rathore"
              className={styles.profileImg}
            />
            <div className={styles.statusIndicator}>
              <span className={styles.liveGreenDot} />
              <span>Available for Work</span>
            </div>
          </div>

          <div className={styles.profileDetails}>
            <h3 className={styles.profileName}>Vinit Rathore</h3>
            <p className={styles.profileRole}>Full Stack & Mobile Engineer</p>
            <p className={styles.profileLocation}>Python • FastAPI • React Native</p>

            <a
              href={resumePDF}
              download="Vinit_Rathore_Resume.pdf"
              className={styles.aboutResumeBtn}
              title="Download Vinit's Resume"
            >
              <DownloadSmallIcon />
              <span>Download Resume</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* All 4 Implementation Cards */}
      <div className={styles.cardContainer}>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
