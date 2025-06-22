import React from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero';
import About from './About/About';
import Experience from './Experience/Experience';
import Tech from './Tech/Tech';
import Works from './Works/Works';
import Feedback from './Feedback/Feedback';
import Contact from './Contact/Contact';
import Loader from './Loader/Loader';
import styles from "./main.module.css"
import Stars from './canvas/Stars';
function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <Navbar />
                <Hero />
            </div>
            <About />
            <Experience />
            <Tech />
            <Works />
            <Feedback />
            <div style={{ position: "relative", zIndex: 0 }}>
                <Contact />
                <Stars />
            </div>

        </div>
    )
}

export default Main
