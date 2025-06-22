import React, { useEffect, useState } from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import styles from './about.module.css'; // Your CSS Module
import { services } from '../../constants';
import { fadeIn, textVariant } from '../../utils/motion';
import { SectionWrapper } from '../../HOC';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className={styles.cardTilt}>
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={styles.cardWrapper}
    >
      <div
        options={{ max: 45, scale: 1, speed: 450 }}
        className={styles.cardInner}
      >
        <img
          src={icon}
          alt={title}
          className={styles.cardIcon}
        />
        <h3 className={styles.cardTitle}>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const [scrSize, setScrSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScrSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id="about" className={styles.about}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className={styles.description}
      >
        I'm a MERN stack developer specializing in web and mobile app development using React.js, Node.js, MongoDB, and React Native. I build scalable, user-friendly solutions that help businesses grow and operate efficiently. Let’s collaborate to turn your business idea into a powerful digital product.
      </motion.p>



      <div className={styles.cardContainer}>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
