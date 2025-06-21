import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { urls } from "../../constants"
// import { styles } from "../styles";
import { EarthCanvas } from "../../components/canvas";
import { SectionWrapper } from "../../HOC";
import { slideIn } from "../../utils/motion";

import styles from "./contact.module.css";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
if(form.name && form.email&& form.message){

  try {
    const res = await fetch(urls.postUrl, {
      method: "POST",
      // headers: {
      //   "Content-Type": "application/json", // Add content type if sending JSON
      // },
      body: JSON.stringify(form), // Convert form data to JSON string

    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json(); // Corrected: .json() takes no arguments
    // console.log(data);
    setForm({
      name: "",
      email: "",
      message: "",
    })
    alert("email send successfully Vinit will contact you soon")
  } catch (error) {
    console.error("Error:", error);
  } finally {
    setLoading(false);
  }
}else{
  alert("fill all required field");
}
  };

  // const handleSubmit = (e) => {
  // e.preventDefault();
  // setLoading(true);

  //   emailjs
  //     .send(
  //       import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
  //       import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
  //       {
  //         from_name: form.name,
  //         to_name: "JavaScript Mastery",
  //         from_email: form.email,
  //         to_email: "sujata@jsmastery.pro",
  //         message: form.message,
  //       },
  //       import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
  //     )
  //     .then(
  //       () => {
  //         setLoading(false);
  //         alert("Thank you. I will get back to you as soon as possible.");
  //         setForm({ name: "", email: "", message: "" });
  //       },
  //       (error) => {
  //         setLoading(false);
  //         console.error(error);
  //         alert("Ahh, something went wrong. Please try again.");
  //       }
  //     );
  // };

  return (
    <div className={styles.container}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className={styles.formContainer}
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className={styles.form}
        >
          <label className={styles.label}>
            <span className={styles.labelText}>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className={styles.input}
            />
          </label>

          <label className={styles.label}>
            <span className={styles.labelText}>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className={styles.input}
            />
          </label>

          <label className={styles.label}>
            <span className={styles.labelText}>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What do you want to say?'
              className={styles.textarea}
            />
          </label>

          <button
            type='submit'
            className={styles.submitBtn}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className={styles.earthContainer}
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
