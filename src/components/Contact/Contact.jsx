import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { urls, contactInfo } from "../../constants";
import { EarthCanvas } from "../../components/canvas";
import { SectionWrapper } from "../../HOC";
import { fadeIn } from "../../utils/motion";

import styles from "./contact.module.css";

const PhoneIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const MailIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

const LinkedInIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const GitHubIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // If input is phone, restrict to 10 digits
    if (name === "phone") {
      if (value.length > 10) return;
      if (!/^\d*$/.test(value)) return;
    }

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (form.name && form.email && form.message && form.phone) {
      try {
        const formData = new FormData();
        formData.append("name", form.name);
        formData.append("email", form.email);
        formData.append("phone", form.phone);
        formData.append("message", form.message);

        // Use no-cors mode so Google Apps Script 302 redirect doesn't get blocked by browser CORS
        await fetch(urls.postUrl, {
          method: "POST",
          mode: "no-cors",
          body: formData,
        });

        setForm({
          name: "",
          email: "",
          message: "",
          phone: "",
        });

        alert("Thank you! Your message has been sent successfully.");
      } catch (error) {
        console.error("Error submitting contact form:", error);
        alert("Oops! Something went wrong. Please reach out directly via email or phone.");
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please fill in all required fields.");
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <motion.div
        variants={fadeIn("up", "spring", 0.1, 0.75)}
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
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className={styles.input}
              required
            />
          </label>

          <label className={styles.label}>
            <span className={styles.labelText}>Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className={styles.input}
              required
            />
          </label>

          <label className={styles.label}>
            <span className={styles.labelText}>Your Phone</span>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="What's your contact number?"
              className={styles.input}
              required
            />
          </label>

          <label className={styles.label}>
            <span className={styles.labelText}>Your Message</span>
            <textarea
              rows={4}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className={styles.textarea}
              required
            />
          </label>

          <button
            type="submit"
            className={styles.submitBtn}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Direct Contact Channels */}
        <div className={styles.directContactSection}>
          <p className={styles.directContactTitle}>Or connect directly</p>
          <div className={styles.contactGrid}>
            <a
              href={`tel:${contactInfo.phone}`}
              className={styles.contactCard}
              title="Call or WhatsApp"
            >
              <div className={styles.contactIconWrap}>
                <PhoneIcon />
              </div>
              <div className={styles.contactDetails}>
                <span className={styles.contactLabel}>Phone</span>
                <span className={styles.contactValue}>{contactInfo.displayPhone}</span>
              </div>
            </a>

            <a
              href={`mailto:${contactInfo.email}`}
              className={styles.contactCard}
              title="Send an email"
            >
              <div className={styles.contactIconWrap}>
                <MailIcon />
              </div>
              <div className={styles.contactDetails}>
                <span className={styles.contactLabel}>Email</span>
                <span className={styles.contactValue}>{contactInfo.email}</span>
              </div>
            </a>

            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactCard}
              title="Visit LinkedIn Profile"
            >
              <div className={styles.contactIconWrap}>
                <LinkedInIcon />
              </div>
              <div className={styles.contactDetails}>
                <span className={styles.contactLabel}>LinkedIn</span>
                <span className={styles.contactValue}>vinitrathore1277</span>
              </div>
            </a>

            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactCard}
              title="Visit GitHub Profile"
            >
              <div className={styles.contactIconWrap}>
                <GitHubIcon />
              </div>
              <div className={styles.contactDetails}>
                <span className={styles.contactLabel}>GitHub</span>
                <span className={styles.contactValue}>vinitrathore</span>
              </div>
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "spring", 0.25, 0.75)}
        className={styles.earthColumn}
      >
        <div className={styles.earthContainer}>
          <EarthCanvas />
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
