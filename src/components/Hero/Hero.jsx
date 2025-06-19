import React from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import { ComputersCanvas } from "../../components/canvas";

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.absoluteContainer}>
      {/* <h2 style={{color:"white"}}>{window.innerWidth}</h2>
      <h2 style={{color:"white"}}>{window.innerHeight}</h2> */}
      
        <div className={styles.lineContainer}>
          <div className={styles.circle} />
          <div className={styles.violetGradient} />
        </div>

        <div>
          <h1 className={styles.heroHeadText}>
            Hi, I'm <span style={{ color: "#915EFF" }}>Vinit</span>
          </h1>
          <p className={styles.heroSubText}>
            I develop 3D visuals, user <br className="sm:block hidden" />
            interfaces and web applications.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className={styles.scrollContainer}>
        <a href="#about">
          <div className={styles.scrollBox}>
            <motion.div
              animate={{ y: [0, 24, 0] }}
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
