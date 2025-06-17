import React, { useState, useEffect } from "react";
import { skills } from "../../../constants";
import styles from "./tyeffect.module.css"; // update with your actual CSS module path

const TypingEffect = () => {
  const [text, setText] = useState("");
  const [skillIndex, setSkillIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = skills[skillIndex].name;

    let typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setText(current.substring(0, charIndex + (isDeleting ? -1 : 1)));

      if (!isDeleting && charIndex === current.length) {
        setIsDeleting(true);
        typingSpeed = 1500; // pause before deleting
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setSkillIndex((prev) => (prev + 1) % skills.length);
      } else {
        setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, skillIndex]);

  return (
    <span className={styles.logoSpan}>
      {` ${text}`}
      <span className={styles.cursor}>|</span>
    </span>
  );
};

export default TypingEffect;
