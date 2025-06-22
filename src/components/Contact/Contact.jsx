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
    phone: ""
  });

  const [loading, setLoading] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   if(name===phone){
  //     value.length===10
  //   }
  //   setForm({ ...form, [name]: value });
  // };
  const handleChange = (e) => {
  const { name, value } = e.target;

  // If input is phone, restrict to 10 digits
  if (name === "phone") {
    if (value.length > 10) return; // Prevent updating state if more than 10 digits
    if (!/^\d*$/.test(value)) return; // Optional: block non-numeric input
  }

  setForm({ ...form, [name]: value });
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
   if (form.name && form.email && form.message && form.phone)
{

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
          phone: "",
        });

        alert("Information send successfully.")
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    } else {
      alert("fill all required field");
    }
  };

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
            <span className={styles.labelText}>Your Phone</span>
            <input
              type='text'
              name='phone'
              value={form.phone}
              onChange={handleChange}
              placeholder="What's your contact number?"
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
