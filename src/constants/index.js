import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  logocompanyids,
  devlogo,
  hopecare,
  hospitalsystem,
  infodeltasys_landing,
  unnamed,
  vinitids,
} from "../assets";

export const urls = {
  postUrl: `https://script.google.com/macros/s/AKfycbylJ-Ki7p61-1zZcCpKTQ8MUb9Vb5yw1SANGgEFTUKsCpuXDPQJW_KDaw5Ipw22KSU9/exec`,
  getUrl: `https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLg2kDkD3b3-ch0bzPtHoE4b30PLUH3fy__TUjNh1LPFrF9PMclrDdf8g4Swg1JqI6Qnj9jQNx0B-ZgwrQtwRSCWK6-W6yp-GfqdQCwLXIQepJAz39v1J9ZtQKrVfQUU9_6u2GAeEjx8zqh9QjNnyVSIRLj-vsqaEV7s-fX6Mdf3KdhVzg93JvzPfUzFdsozAgMoJg4kdSeLnaRpCNijcgmovQ71fZOsLG2X6XvOtbusHkBMaWHf8cDcd3ExATaTRHAtEIzcDaAsRhSxfN0YLBdA3djcIw&lib=MH46NatNxNwTQpBIwepAmnOdzRm4IKlxF`
};

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const skills = [
  { id: 1, name: "Python & FastAPI Backend" },
  { id: 2, name: "React Native & Android Developer" },
  { id: 3, name: "React.js & Full Stack Web" },
  { id: 4, name: "PostgreSQL & Supabase" },
];

const services = [
  {
    title: "Python & FastAPI Backend",
    subtitle: "High-Performance APIs & Microservices",
    icon: backend,
    description: "FastAPI REST endpoints, async task pipelines, Python backend logic, and scalable microservice architectures.",
  },
  {
    title: "React Native & Android Developer",
    subtitle: "Cross-Platform Mobile Apps",
    icon: mobile,
    description: "Production Android/iOS applications, Expo ecosystem, on-device OCR (Xtract), and 60fps native performance.",
  },
  {
    title: "Full Stack Web Developer",
    subtitle: "React.js, Node.js & Modern Web",
    icon: web,
    description: "Modern, responsive web applications, reusable component design, seamless UI/UX, and state management.",
  },
  {
    title: "PostgreSQL & Supabase Architect",
    subtitle: "Database & Cloud Infrastructure",
    icon: creator,
    description: "Relational database schema design, real-time Supabase subscriptions, migrations, and secure authentication.",
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
];

const experiences = [
  {
    title: "Full Stack & Mobile Engineer (Current)",
    company_name: "Devlogix Technology Pvt Ltd",
    icon: devlogo,
    iconBg: "#ffffff",
    date: "October 2025 - Present",
    points: [
      "Architecting enterprise web and cross-platform mobile solutions using Python, FastAPI, React Native, and PostgreSQL.",
      "Engineered the full-featured Hospital Information System (HIS) with digital prescription workflows, automated appointment scheduling, and patient triage.",
      "Developed the Xtract mobile application on Google Play for real-time on-device OCR text extraction.",
      "Built scalable RESTful API microservices with FastAPI, automated database migrations, and high-performance caching.",
    ],
  },
  {
    title: "Web Developer & React Lead",
    company_name: "Infodeltasys (infodeltasys.com)",
    icon: logocompanyids,
    iconBg: "#ffffff",
    date: "October 2024 - September 2025",
    points: [
      "Designed and developed the official corporate website and landing page for Infodeltasys (infodeltasys.com) with optimized SEO and modern UI.",
      "Developed responsive e-commerce web applications including Orejewels and Shreddersbay with real-time OTP authentication and payment gateway integration.",
      "Collaborated with cross-functional teams to build scalable frontend architectures and reusable component libraries.",
    ],
  },
];

const projects = [
  {
    name: "Xtract – Screen Text & OCR Extractor",
    description:
      "Published Android application on Google Play that allows users to extract text in real-time from any phone screen, images, and live camera feed using powerful on-device OCR.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "android",
        color: "green-text-gradient",
      },
      {
        name: "ocr",
        color: "pink-text-gradient",
      },
      {
        name: "play-store",
        color: "green-text-gradient",
      },
    ],
    image: unnamed,
    source_code_link: "https://play.google.com/store/apps/details?id=com.vinitrathore.Xtract&hl=en_IN",
    live_link: "https://play.google.com/store/apps/details?id=com.vinitrathore.Xtract&hl=en_IN",
    badge_label: "Play Store App",
  },
  {
    name: "HopeCare – Healthcare Management",
    description:
      "Full-stack healthcare platform for managing patient records, appointments, prescriptions, and doctor schedules with real-time charting and clinical coordination.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "pink-text-gradient",
      },
    ],
    image: hopecare,
    source_code_link: "https://hopecare.swiftcharting.com/",
    live_link: "https://hopecare.swiftcharting.com/",
    badge_label: "Live Healthcare SaaS",
  },
  {
    name: "Hospital Information System (HIS)",
    description:
      "Comprehensive clinical & hospital management platform (HIS/EMR) built with React Native and Expo. Features automated patient check-in, real-time triage queue, doctor consultation schedules, and intelligent prescription extraction (Extract) to digitize clinical workflows.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "expo",
        color: "green-text-gradient",
      },
      {
        name: "ehr-emr",
        color: "blue-text-gradient",
      },
      {
        name: "extract-ocr",
        color: "pink-text-gradient",
      },
    ],
    image: hospitalsystem,
    source_code_link: "https://hishospital.thedevlogix.com/",
    live_link: "https://hishospital.thedevlogix.com/",
    badge_label: "Live Clinical System",
  },
  {
    name: "Infodeltasys – Corporate Website",
    description:
      "Official landing page and corporate web presence for Infodeltasys (infodeltasys.com), highlighting custom software development, cloud solutions, and enterprise services.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "ui-ux",
        color: "green-text-gradient",
      },
      {
        name: "seo",
        color: "pink-text-gradient",
      },
    ],
    image: infodeltasys_landing,
    source_code_link: "https://infodeltasys.com/",
    live_link: "https://infodeltasys.com/",
    badge_label: "Official Website",
  },
  {
    name: "Shreddersbay",
    description:
      "A resale e-commerce platform where users can buy and sell pre-owned products, discover great deals, and connect directly with other users for smooth, secure transactions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/vinitrathore/",
  },
  {
    name: "Orejewels",
    description:
      "Luxury e-commerce jewellery web application enabling users to browse fine diamond and gold ornaments with dynamic pricing, real-time OTP verification, and seamless checkout experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node-express",
        color: "green-text-gradient",
      },
      {
        name: "razorpay",
        color: "pink-text-gradient",
      },
      {
        name: "otp-auth",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://orejewels.in/",
    live_link: "https://orejewels.in/",
    badge_label: "Live E-Commerce",
  },
  {
    name: "PrepGinni",
    description:
      "A comprehensive exam preparation resource offering students access to well-structured practice questions, mock tests, and study materials tailored for various competitive exams.",
    tags: [
    //   {
    //     name: "remix",
    //     color: "blue-text-gradient",
    //   },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/vinitrathore/",
  },
];

export const contactInfo = {
  phone: "+919648201277",
  displayPhone: "+91 9648201277",
  email: "vinitrathore1277@gmail.com",
  linkedin: "https://www.linkedin.com/in/vinitrathore1277/",
  github: "https://github.com/vinitrathore/",
};

export { services, technologies, experiences, projects, vinitids };
