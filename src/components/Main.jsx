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
function Main() {
    return (
        <div class={styles.main}>
            <div class={styles.header}>
                <Navbar />
                <Hero />
            </div>
            {/* <About />
            <Experience />
            <Tech />
            <Works />
            <Feedback />
            <Contact />
            <Loader /> */}
        </div>
    )
}

export default Main
