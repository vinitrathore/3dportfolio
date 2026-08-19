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

const CalendarIcon = () => (
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
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const UploadIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="17 8 12 3 7 8"></polyline>
    <line x1="12" y1="3" x2="12" y2="15"></line>
  </svg>
);

const FileCheckIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#10b981"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <polyline points="9 15 11 17 15 13"></polyline>
  </svg>
);

const Contact = () => {
  const formRef = useRef();
  const fileInputRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "Full Stack Web App",
    budget: "$1,000 - $3,000",
    meetingDate: "",
    meetingTime: "02:00 PM - 04:00 PM",
    message: "",
  });

  const [attachedFile, setAttachedFile] = useState(null);
  const [fileBase64, setFileBase64] = useState("");
  const [loading, setLoading] = useState(false);

  // Minimum date allowed is today
  const todayDate = new Date().toISOString().split("T")[0];

  const handleChange = (e) => {
    const { name, value } = e.target;

    // If input is phone, restrict to 10 digits
    if (name === "phone") {
      if (value.length > 10) return;
      if (!/^\d*$/.test(value)) return;
    }

    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // 10MB size limit
      if (file.size > 10 * 1024 * 1024) {
        alert("File size exceeds 10MB limit. Please upload a smaller document.");
        return;
      }
      setAttachedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setFileBase64(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeFile = () => {
    setAttachedFile(null);
    setFileBase64("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (form.name && form.email && form.phone && form.message) {
      try {
        const formData = new FormData();
        formData.append("name", form.name);
        formData.append("email", form.email);
        formData.append("phone", form.phone);
        formData.append("company", form.company || "Individual / Not specified");
        formData.append("projectType", form.projectType);
        formData.append("budget", form.budget);
        formData.append("meetingDate", form.meetingDate || "Flexible / Not selected");
        formData.append("meetingTime", form.meetingTime || "Flexible");
        formData.append("message", form.message);

        // Append file data if attached
        if (attachedFile && fileBase64) {
          formData.append("fileName", attachedFile.name);
          formData.append("fileType", attachedFile.type);
          formData.append("fileData", fileBase64);
        }

        // Send to backend endpoint (Google Apps Script / Webhook)
        await fetch(urls.postUrl, {
          method: "POST",
          mode: "no-cors",
          body: formData,
        });

        setForm({
          name: "",
          email: "",
          phone: "",
          company: "",
          projectType: "Full Stack Web App",
          budget: "$1,000 - $3,000",
          meetingDate: "",
          meetingTime: "02:00 PM - 04:00 PM",
          message: "",
        });
        removeFile();

        alert("🎉 Thank you! Your project details, scheduled meeting request, and documents have been sent. I will review and connect with you shortly!");
      } catch (error) {
        console.error("Error submitting contact form:", error);
        alert("Oops! Something went wrong. Please reach out directly via email or phone.");
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please fill in all required fields (Name, Email, Phone, and Message).");
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <motion.div
        variants={fadeIn("up", "spring", 0.1, 0.75)}
        className={styles.formContainer}
      >
        <p className={styles.sectionSubText}>Let's build something great</p>
        <h3 className={styles.sectionHeadText}>Hire Me / Project Inquiry.</h3>
        <p className={styles.formDescription}>
          Have a project in mind or need dedicated engineering support? Submit your project requirements, attach specifications, or schedule a discovery call.
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className={styles.form}
        >
          {/* Row 1: Name & Company */}
          <div className={styles.formGrid}>
            <label className={styles.label}>
              <span className={styles.labelText}>Your Name *</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="e.g. John Doe"
                className={styles.input}
                required
              />
            </label>

            <label className={styles.label}>
              <span className={styles.labelText}>Company / Organization</span>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="e.g. TechCorp, Startup Ltd"
                className={styles.input}
              />
            </label>
          </div>

          {/* Row 2: Email & Phone */}
          <div className={styles.formGrid}>
            <label className={styles.label}>
              <span className={styles.labelText}>Your Email *</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="e.g. john@example.com"
                className={styles.input}
                required
              />
            </label>

            <label className={styles.label}>
              <span className={styles.labelText}>Your Phone / WhatsApp *</span>
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="10-digit number"
                className={styles.input}
                required
              />
            </label>
          </div>

          {/* Row 3: Project Type & Estimated Budget */}
          <div className={styles.formGrid}>
            <label className={styles.label}>
              <span className={styles.labelText}>Project Type</span>
              <select
                name="projectType"
                value={form.projectType}
                onChange={handleChange}
                className={styles.select}
              >
                <option value="Full Stack Web App">Full Stack Web App (React + FastAPI/Node)</option>
                <option value="React Native Mobile App">React Native Mobile App (Android / iOS)</option>
                <option value="FastAPI / Python Backend">FastAPI / Python REST API Microservices</option>
                <option value="Hospital Management System">Healthcare / Hospital Information System (HIS)</option>
                <option value="Database & Architecture">PostgreSQL / Supabase Database Architecture</option>
                <option value="UI/UX & Frontend Development">Modern Responsive Frontend & Web3D</option>
                <option value="Other Custom Software">Other Custom Engineering Project</option>
              </select>
            </label>

            <label className={styles.label}>
              <span className={styles.labelText}>Estimated Budget</span>
              <select
                name="budget"
                value={form.budget}
                onChange={handleChange}
                className={styles.select}
              >
                <option value="<$1,000">Less than $1,000 (INR 30K - 80K)</option>
                <option value="$1,000 - $3,000">$1,000 - $3,000 (INR 80K - 2.5 Lakhs)</option>
                <option value="$3,000 - $5,000">$3,000 - $5,000 (INR 2.5 - 4.5 Lakhs)</option>
                <option value="$5,000+">$5,000+ (INR 4.5 Lakhs+)</option>
                <option value="Flexible / Hourly">Flexible / Hourly Engagement</option>
              </select>
            </label>
          </div>

          {/* Row 4: Scheduled Meeting Date & Time */}
          <div className={styles.scheduleBox}>
            <div className={styles.scheduleHeader}>
              <CalendarIcon />
              <span>Schedule a Meeting / Discovery Call (Optional)</span>
            </div>
            <div className={styles.formGrid}>
              <label className={styles.label}>
                <span className={styles.labelText}>Preferred Date</span>
                <input
                  type="date"
                  name="meetingDate"
                  min={todayDate}
                  value={form.meetingDate}
                  onChange={handleChange}
                  className={styles.input}
                />
              </label>

              <label className={styles.label}>
                <span className={styles.labelText}>Preferred Time Window</span>
                <select
                  name="meetingTime"
                  value={form.meetingTime}
                  onChange={handleChange}
                  className={styles.select}
                >
                  <option value="09:00 AM - 11:00 AM">09:00 AM - 11:00 AM (IST)</option>
                  <option value="11:00 AM - 01:00 PM">11:00 AM - 01:00 PM (IST)</option>
                  <option value="02:00 PM - 04:00 PM">02:00 PM - 04:00 PM (IST)</option>
                  <option value="04:00 PM - 06:00 PM">04:00 PM - 06:00 PM (IST)</option>
                  <option value="06:00 PM - 08:00 PM">06:00 PM - 08:00 PM (IST)</option>
                  <option value="08:00 PM - 10:00 PM">08:00 PM - 10:00 PM (IST)</option>
                  <option value="Flexible / Anytime">Flexible / Any Time</option>
                </select>
              </label>
            </div>
          </div>

          {/* Row 5: Project Description */}
          <label className={styles.label}>
            <span className={styles.labelText}>Project Scope / Message *</span>
            <textarea
              rows={4}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Describe your project goals, technical requirements, deliverables, or timeline..."
              className={styles.textarea}
              required
            />
          </label>

          {/* Row 6: Document Upload */}
          <div className={styles.fileUploadContainer}>
            <span className={styles.labelText}>Attach Project Brief / Specifications (Optional)</span>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg,.zip"
              style={{ display: "none" }}
              id="project-doc-upload"
            />

            {!attachedFile ? (
              <label htmlFor="project-doc-upload" className={styles.uploadDropzone}>
                <div className={styles.uploadIconCircle}>
                  <UploadIcon />
                </div>
                <div className={styles.uploadTextWrap}>
                  <span className={styles.uploadPrimaryText}>Click to upload project document</span>
                  <span className={styles.uploadSecondaryText}>PDF, DOCX, TXT, PNG, JPG, or ZIP (Max 10MB)</span>
                </div>
              </label>
            ) : (
              <div className={styles.attachedFileBadge}>
                <div className={styles.attachedFileInfo}>
                  <FileCheckIcon />
                  <div className={styles.attachedFileNameWrap}>
                    <span className={styles.attachedFileName}>{attachedFile.name}</span>
                    <span className={styles.attachedFileSize}>
                      {(attachedFile.size / 1024).toFixed(1)} KB
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={removeFile}
                  className={styles.removeFileBtn}
                  title="Remove document"
                >
                  ✕
                </button>
              </div>
            )}
          </div>

          <button
            type="submit"
            className={styles.submitBtn}
            disabled={loading}
          >
            {loading ? "Submitting Inquiry..." : "🚀 Send Inquiry & Book Meeting"}
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
        variants={fadeIn("left", "tween", 0.1, 0.5)}
        className={styles.earthColumn}
      >
        <div className={styles.earthCard}>
          <div className={styles.earthBadge}>
            <span className={styles.liveDot} />
            <span>Available for Global & Remote Work</span>
          </div>
          <div className={styles.earthContainer}>
            <EarthCanvas />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
