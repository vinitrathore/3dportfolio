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
} from "../assets";
export const urls = {
  postUrl: `https://script.google.com/macros/s/AKfycbylJ-Ki7p61-1zZcCpKTQ8MUb9Vb5yw1SANGgEFTUKsCpuXDPQJW_KDaw5Ipw22KSU9/exec`,
  getUrl: `https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLg2kDkD3b3-ch0bzPtHoE4b30PLUH3fy__TUjNh1LPFrF9PMclrDdf8g4Swg1JqI6Qnj9jQNx0B-ZgwrQtwRSCWK6-W6yp-GfqdQCwLXIQepJAz39v1J9ZtQKrVfQUU9_6u2GAeEjx8zqh9QjNnyVSIRLj-vsqaEV7s-fX6Mdf3KdhVzg93JvzPfUzFdsozAgMoJg4kdSeLnaRpCNijcgmovQ71fZOsLG2X6XvOtbusHkBMaWHf8cDcd3ExATaTRHAtEIzcDaAsRhSxfN0YLBdA3djcIw&lib=MH46NatNxNwTQpBIwepAmnOdzRm4IKlxF`
}
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
    id: "contact",
    title: "Contact",
  },
];

export const skills = [
  { id: 1, name: "Software Engineer" },
  { id: 2, name: "Application Developer" },
  { id: 3, name: "Web Developer" },
  //  {id:4,name:"MERN Stack Developer"},
]

const services = [

  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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

];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Infodeltasys",
    icon: tesla,
    iconBg: "#383E56",
    date: "january 2024 - march 2024",
    points: [
      "Designing and developing a responsive website for scrap product resale using React.js and Node.js.",
      "Integrating real-time chat functionality for seamless buyer-seller interaction.",
      "Implementing secure user authentication, product listing, and profile management.",
      "Ensuring mobile-friendly UI/UX for a consistent experience across all devices.",
    ],

  },
  {
    title: "React Native Developer",
    company_name: "Infodeltasys",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "march 2024 - september 2024",
    points: [
      "Building and maintaining a resale platform for scrap products using the MERN stack and React Native.",
      "Implementing real-time chat features to connect buyers and sellers for seamless communication.",
      "Creating intuitive interfaces for users to list, browse, and manage scrap product listings.",
      "Developing secure authentication and efficient product listing workflows for smooth transactions.",
      "Ensuring responsive, mobile-friendly design for both web and Android platforms.",
      "Integrating notifications and real-time updates to enhance user engagement.",
      "Collaborating with designers and stakeholders to refine features and user experience.",
      "Writing clean, scalable code and optimizing performance across devices.",
    ],

  },
  {
    title: "Web Developer",
    company_name: "Infodeltasys",
    icon: meta,
    iconBg: "#383E56",
    date: "november 2024 - april 2025",
    points: [
      "Developed a luxury e-commerce website for selling diamond and gold jewelry.",
      "Integrated secure phone OTP verification for user authentication.",
      "Implemented payment gateway for seamless and secure transactions.",
      "Built responsive product pages with filters, images, and dynamic pricing.",
      "Created admin tools for managing inventory, orders, and customer data.",
    ],

  },
  {
    title: "Full stack Developer",
    company_name: "PrepGinni",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "june 2023 - Present",
    points: [
      "Automatically generates personalized courses and quizzes based on user-submitted syllabus.",
      "Covers a wide range of competitive exams with structured lessons and mock tests.",
      "Interactive quizzes with instant feedback to track progress and improve performance.",
      "Smart content planning ensures syllabus completion within available time.",
      "Mobile-friendly platform for learning anytime, anywhere.",
    ]

  },
];
const testimonials = [
  {
    testimonial:
      "The website delivered was not only visually stunning but also incredibly fast and responsive. It perfectly represents our brand!",
    name: "Ananya Mehta",
    designation: "Marketing Head",
    company: "JewelCraft India",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    testimonial:
      "We used to manually update sheets daily. Thanks to the automation setup, our workflow is now hands-free and error-free!",
    name: "Rohan Verma",
    designation: "Operations Manager",
    company: "SmartSupply Co",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    testimonial:
      "Their ability to integrate our website with Google Sheets for real-time order tracking saved us countless hours each week.",
    name: "Raman Raj",
    designation: "Founder",
    company: "GreenRoot Organics",
    image: "https://randomuser.me/api/portraits/men/39.jpg",
  },
];


// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
    // image: "https://randomuser.me/api/portraits/women/50.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
    // image: "https://randomuser.me/api/portraits/men/65.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
    // image: "https://randomuser.me/api/portraits/men/39.jpg",
//   },
// ];

const projects = [
  {
    name: "Shreddersbay",
    description: "A resale e-commerce platform where users can buy and sell pre-owned products, discover great deals, and connect directly with other users for smooth, secure transactions."
    , tags: [
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
        color: "green-text-gradient",
      },

    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Orejewels",
    description:
      "E-commerce jewellery web application that allows users to explore and purchase a wide range of ornaments, view detailed product information, and enjoy a seamless online shopping experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },

    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "PrepGinni",

    description: "A comprehensive exam preparation resource offering students access to well-structured practice questions, mock tests, and study materials tailored for various competitive exams.",
    tags: [
      {
        name: "rimix",
        color: "blue-text-gradient",
      },

      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "coudinary",
        color: "pink-text-gradient",
      },
      {
        name: "mongoDb",
        color: "pink-text-gradient",
      },

      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];



export { services, technologies, experiences, testimonials, projects };
