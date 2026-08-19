import React, { useState, useEffect } from "react";
import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../HOC";
import { technologies } from "../../constants";

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "28px",
    maxWidth: "100%",
  },
  item: {
    width: "112px",
    height: "112px",
  },
  mobileBadge: {
    width: "78px",
    height: "78px",
    borderRadius: "50%",
    background: "radial-gradient(circle at 30% 30%, #232631, #151030)",
    border: "2px solid rgba(145, 94, 255, 0.4)",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.5), inset 0 2px 4px rgba(255, 255, 255, 0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "14px",
    transition: "transform 0.2s ease",
  },
  mobileIcon: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
};

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div style={styles.container}>
      {technologies.map((technology) => (
        <div
          style={isMobile ? { width: "78px", height: "78px" } : styles.item}
          key={technology.name}
        >
          {isMobile ? (
            <div style={styles.mobileBadge} title={technology.name}>
              <img
                src={technology.icon}
                alt={technology.name}
                style={styles.mobileIcon}
                loading="lazy"
              />
            </div>
          ) : (
            <BallCanvas icon={technology.icon} />
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
