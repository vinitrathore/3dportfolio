import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

import { navLinks } from "../../constants";
import { logo, menu, close } from "../../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navContainer}>
        <Link
          to="/"
          className={styles.logoContainer}
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className={styles.logoText}>
            Adrian &nbsp;
            <span className={styles.logoSpan}>| JavaScript Mastery</span>
          </p>
        </Link>

        <ul className={styles.navLinks}>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${styles.navLink} ${
                active === nav.title ? styles.activeLink : ""
              }`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className={styles.menuIcon}
            onClick={() => setToggle(!toggle)}
          />

          {toggle && (
            <div className={styles.mobileMenu}>
              <ul className={styles.mobileList}>
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`${styles.mobileLink} ${
                      active === nav.title ? "active" : ""
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
      </div>
    </nav>
  );
};

export default Navbar;
