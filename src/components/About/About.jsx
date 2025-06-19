import React, { useEffect, useState } from 'react';
import {Tilt} from 'react-tilt';
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
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
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
