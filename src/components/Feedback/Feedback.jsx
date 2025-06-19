import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../../HOC";
import { fadeIn, textVariant } from "../../utils/motion";
import { testimonials } from "../../constants";

import styles from "./feedback.module.css";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className={styles.card}
  >
    <p className={styles.quote}>"</p>

    <div className={styles.testimonial}>{testimonial}</div>

    <div className={styles.userInfo}>
      <div className={styles.userDetails}>
        <p className={styles.name}>
          <span className={styles.highlight}>@</span> {name}
        </p>
        <p className={styles.role}>
          {designation} of {company}
        </p>
      </div>

      <img
        src={image}
        alt={`feedback_by-${name}`}
        className={styles.avatar}
      />
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={styles.cardsContainer}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
