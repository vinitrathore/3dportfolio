import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

import { navLinks } from "../../constants";
import { logo, menu, close } from "../../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
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
            window.scrollTo(0, 0);
            navigate("/")
          }}
        >
          <img src={logo} alt="logo" className={styles.logoImage} />
          <p className={styles.logoText}>
            Vinit&nbsp;
            <span className={styles.logoSpan}>| Software Developer</span>
          </p>
        </Link>

        <ul className={styles.navLinks}>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${styles.navLink} ${active === nav.title ? styles.activeLink : ""}`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className={styles.mobileMenuToggle}>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className={styles.menuIcon}
            onClick={() => setToggle(!toggle)}
          />
        </div>
        {toggle && (
          <div className={`${styles.mobileMenu} ${toggle?styles.navGet:styles.navClose}`}>
            
            
            <ul className={styles.mobileList}>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${styles.mobileLink} ${active === nav.title ? styles.active : styles.inactiveLink
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
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
