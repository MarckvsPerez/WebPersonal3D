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
  nodejs,
  mongodb,
  git,
  sass,
  vuejs,
  salesforce,
  tailwind,
  threejs,
  capgemini,
  tvup,
  cursos,
  gym,
  marcWeb,
  uoc,
} from "../assets";

const texts = {
  personData: {
    firstName: "Marc",
    lastName: "Pérez Salat",
    intro:
      "I am a student of Multimedia degree and Computer Engineering degree at UOC",
    greeting: "Hi, I'm ",
  },

  about: {
    title: "INTRODUCTION",
    subtitle: "Summary",
    text: "I am a passionate programmer with solid experience in JavaScript, React, Node.js, and Three.js. My main focus is to develop innovative and efficient solutions that provide unique experiences to the users.",
  },

  experienceInfo: {
    title: "WHAT I'VE DONE SO FAR",
    subtitle: "Work Experience",
  },
  navLinks: [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Experience",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ],
  services: [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "UX Specialist",
      icon: creator,
    },
  ],

  technologies: [
    {
      name: "JavaScript",
      icon: javascript,
    },
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
      name: "Git",
      icon: git,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Vue JS",
      icon: vuejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Salesforce",
      icon: salesforce,
    },
    {
      name: "Sass",
      icon: sass,
    },
    {
      name: "Tailwind",
      icon: tailwind,
    },
  ],

  experiences: [
    {
      title: "React.js Developer",
      company_name: "TVUp / Internship",
      icon: tvup,
      iconBg: "#383E56",
      date: "March 2023 - July 2023",
      points: [
        "Developed and maintained web applications using React.js and other related technologies.",
        "Collaborated with cross-functional teams, including designers, product managers, and other developers, to create high-quality products.",
        "Implemented responsive design and ensured browser compatibility.",
        "Participated in code reviews and provided constructive feedback to other developers.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Capgemini",
      icon: capgemini,
      iconBg: "#383E56",
      date: "July 2022 - February 2023",
      points: [
        "Developed and customized Salesforce-based solutions to meet client needs.",
        "Collaborated with cross-functional teams, including system administrators, business consultants, and other programmers, to implement efficient solutions on Salesforce.",
        "Configured and customized the Salesforce platform, including designing workflows, validation rules, and business process automation.",
        "Implemented ETL (Extraction, Transformation, and Loading) for data migration from external sources to Salesforce.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Capgemini / Internship",
      icon: capgemini,
      iconBg: "#383E56",
      date: "October 2021 - June 2022",
      points: [
        "Developed and customized Salesforce-based solutions to meet client needs.",
        "Collaborated with cross-functional teams, including system administrators, business consultants, and other programmers, to implement efficient solutions on Salesforce.",
        "Configured and customized the Salesforce platform, including designing workflows, validation rules, and business process automation.",
        "Integrated external applications and systems with Salesforce using APIs and integration tools.",
      ],
    },
  ],

  myWork: {
    title: "My Work",
    subtitle: "Projects",
    text: "The following projects showcase my skills and experience through real examples of my work. Each project is briefly described with links to code repositories and live demos. It reflects my ability to solve complex problems, work with different technologies, and effectively manage projects.",
  },

  projects: [
    {
      name: "Marc Web",
      description:
        "Personal website developed with React, Vite, and Three.js showcasing information about my education, work experience, and the projects I have worked on.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "three.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: marcWeb,
      source_code_link: "https://github.com/MarckvsPerez/WebPersonal3D",
      web_link: "",
    },
    {
      name: "GymChunin",
      description:
        "Reactive web platform based on the MERN stack (MongoDB, Express, React, and Node.js) that allows users to register, search for weightlifting exercises, and like them. It also includes a user registration system for administrators to manage the website.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "next",
          color: "pink-text-gradient",
        },
        {
          name: "express",
          color: "blue-text-gradient",
        },
      ],
      image: gym,
      source_code_link: "https://github.com/MarckvsPerez/GymChuninClient",
      web_link: "https://gymchunin.netlify.app/",
    },
    {
      name: "My Courses",
      description:
        "Reactive web platform based on the MERN stack (MongoDB, Express, React, and Node.js) that allows me to showcase the courses I have taken and the technologies I know. It also includes a user registration system for managing the website.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "next",
          color: "pink-text-gradient",
        },
        {
          name: "express",
          color: "blue-text-gradient",
        },
      ],
      image: cursos,
      source_code_link: "https://github.com/MarckvsPerez/webPersonalClient",
      web_link: "https://marccourses.netlify.app/#/",
    },
  ],

  myFormation: {
    title: "MY EDUCATION",
    subtitle: "Education",
  },

  formation: [
    {
      university: uoc,
      name: "Multimedia Degree",
      specialty: "Web Engineering",
      start: "2019",
      end: "Present",
    },
    {
      university: uoc,
      name: "Computer Engineering Degree",
      specialty: "Web Engineering",
      start: "2021",
      end: "Present",
    },
  ],

  contact: {
    title: "Leave a Message",
    subtitle: "Contact",
    nameTag: "Your name",
    nameText: "What's your name?",
    emailTag: "Your email",
    emailText: "What's your email address?",
    messageTag: "Your message",
    messageText: "What's your message?",
    button: "Send",
    loading: "Sending...",
    alert: "Thank you. I will get back to you as soon as possible.",
  },
};

export default texts;
