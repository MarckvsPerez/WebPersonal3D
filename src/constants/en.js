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
  java,
  tailwind,
  threejs,
  capgemini,
  tvup,
  prestige,
  cursos,
  gym,
  marcWeb,
  uoc,
} from "../assets";

const texts = {
  personData: {
    greeting: "Hi, I'm ",
    firstName: "Marc",
    lastName: "Pérez Salat",
    intro: "Full Stack web developer specialized in JavaScript",
  },

  about: {
    title: "INTRODUCTION",
    subtitle: "Summary",
    text: "I'm Marc, a Full Stack developer with two years of experience in JavaScript and Java (Apex). My academic background includes degrees in Multimedia and Computer Engineering from UOC, supporting my ability to approach projects comprehensively and creatively. In addition to my web development experience, I have created personal projects that showcase my skills in technologies like React and Node.js. I value the importance of continuous learning and the satisfaction of delivering successful projects.",
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
      title: "UX/UI Specialist",
      icon: creator,
    },
  ],

  technologies: [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Vue JS",
      icon: vuejs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },

    {
      name: "Sass",
      icon: sass,
    },
    {
      name: "Tailwind",
      icon: tailwind,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Git",
      icon: git,
    },
  ],

  experiences: [
    {
      title: "Full Stack Developer",
      company_name: "Prestige Software",
      icon: prestige,
      iconBg: "#383E56",
      date: "September 2023 - Present",
      points: [
        "Develop and maintain server logic using Node.js.",
        "Development of screens for various business applications using JavaScript, following mockups designed by the design team.",
        "Active participation in planning and executing development projects, ensuring on-time and within-budget deliveries.",
      ],
    },
    {
      title: "Front-End Developer",
      company_name: "TVUp / Intern",
      icon: tvup,
      iconBg: "#383E56",
      date: "March 2023 - July 2023",
      points: [
        "Implementation of screens for the TiviFy application according to mockups provided by the design team, using React.js and TypeScript.",
        "Version control management through Git, including the creation and review of pull requests for effective collaboration with the development team.",
      ],
    },
    {
      title: "Front-End Developer",
      company_name: "Capgemini",
      icon: capgemini,
      iconBg: "#383E56",
      date: "July 2022 - February 2023",
      points: [
        "Development of pages and components in Salesforce using Apex, including the configuration of workflows, validation rules, and automation of business processes.",
        "Implementation of ETL (Extraction, Transformation, and Loading) processes using Talend and SQL for data migration from external sources to Salesforce.",
        "Participation in project management, including planning and tracking using Jira, to ensure successful, on-time, and within-budget deliveries.",
      ],
    },
    {
      title: "Front-End Developer",
      company_name: "Capgemini / Intern",
      icon: capgemini,
      iconBg: "#383E56",
      date: "October 2021 - June 2022",
      points: [
        "Development of pages and components in Salesforce using Apex, including the configuration of workflows, validation rules, and automation of business processes.",
        "Implementation of ETL (Extraction, Transformation, and Loading) processes using Talend and SQL for data migration from external sources to Salesforce.",
        "Participation in project management, including planning and tracking using Jira, to ensure successful, on-time, and within-budget deliveries.",
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
