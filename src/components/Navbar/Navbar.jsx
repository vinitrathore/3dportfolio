import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";
import { navLinks } from "../../constants";
import { menu, close, vinitids, resumePDF } from "../../assets";

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

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : styles.unscrolled}`}>
      <div className={styles.navContainer}>
        <Link
          to="/"
          className={styles.logoContainer}
          onClick={() => {
            setActive("");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div className={styles.avatarWrapper}>
            <img src={vinitids} alt="Vinit" className={styles.avatarImage} />
            <span className={styles.statusDot} title="Available for work" />
          </div>
          <p className={styles.logoText}>
            Vinit&nbsp;
            <span className={styles.logoSpan}>| Full Stack Developer</span>
          </p>
        </Link>

        {/* Right side controls: Links + Resume CTA */}
        <div className={styles.navRight}>
          <ul className={styles.navLinks}>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${styles.navLink} ${active === nav.title ? styles.activeLink : ""}`}
                onClick={() => setActive(nav.title)}
              >
                <a className={styles.anc} href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={resumePDF}
            download="Vinit_Rathore_Resume.pdf"
            className={styles.navResumeBtn}
            title="Download Resume"
          >
            <DownloadSmallIcon />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Toggle */}
          <div className={styles.mobileMenuToggle} onClick={() => setToggle(!toggle)}>
            <img
              src={toggle ? close : menu}
              alt="menu"
              className={styles.menuIcon}
            />
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {toggle && (
          <div className={styles.mobileMenu}>
            <ul className={styles.mobileList}>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${styles.mobileLink} ${
                    active === nav.title ? styles.active : ""
                  }`}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>

            <a
              href={resumePDF}
              download="Vinit_Rathore_Resume.pdf"
              className={styles.mobileResumeBtn}
              onClick={() => setToggle(false)}
            >
              <DownloadSmallIcon />
              <span>Download Resume</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
