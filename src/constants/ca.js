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
    greeting: "Hola, sóc ",
    firstName: "Marc",
    lastName: "Pérez Salat",
    intro: "Desenvolupador web Full Stack especialitzat en JavaScript",
  },

  about: {
    title: "INTRODUCCIÓ",
    subtitle: "Resum",
    text: "Sóc en Marc, un desenvolupador Full Stack amb dos anys d'experiència en JavaScript i Java (Apex). La meva formació acadèmica inclou els graus en Multimèdia i Enginyeria Informàtica a la UOC, recolzant la meva capacitat per abordar projectes de manera integral i creativa. A més de la meva experiència en desenvolupament web, he creat projectes personals que destaquen les meves habilitats en tecnologies com React i Node.js. Valoro la importància de l'aprenentatge continu i la satisfacció de lliurar projectes d'èxit.",
  },

  experienceInfo: {
    title: "QUÈ HE FET FINS ARA",
    subtitle: "Experiència Laboral",
  },
  navLinks: [
    {
      id: "about",
      title: "Sobre mi",
    },
    {
      id: "work",
      title: "Experiència",
    },
    {
      id: "contact",
      title: "Contacte",
    },
  ],

  services: [
    {
      title: "Desenvolupador Frontend",
      icon: web,
    },
    {
      title: "Desenvolupador Backend",
      icon: backend,
    },
    {
      title: "Desenvolupador React",
      icon: mobile,
    },
    {
      title: "Especialista en UX/UI",
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
      title: "Desarrollador Full Stack",
      company_name: "Prestige Software",
      icon: prestige,
      iconBg: "#383E56",
      date: "Septiembre 2023 - Actualmente",
      points: [
        "Desarrollar y mantener la lógica del servidor utilizando Node.js.",
        "Desarrollo de pantallas para diversas aplicaciones empresariales utilizando JavaScript, siguiendo mockups diseñados por el equipo de diseño.",
        "Participar activamente en la planificación y ejecución de proyectos de desarrollo, asegurando entregas a tiempo y dentro del presupuesto",
      ],
    },
    {
      title: "Desarrollador Front-End",
      company_name: "TVUp / Becario",
      icon: tvup,
      iconBg: "#383E56",
      date: "Marzo 2023 - Julio 2023",
      points: [
        "Implementación de pantallas para la aplicación TiviFy según los mockups proporcionados por el equipo de diseño, utilizando React.js y TypeScript",
        "Gestión del control de versiones a través de Git, incluyendo la creación y revisión de pull requests para colaborar eficazmente con el equipo de desarrollo.",
      ],
    },
    {
      title: "Desarrollador Front-End",
      company_name: "Capgemini",
      icon: capgemini,
      iconBg: "#383E56",
      date: "Julio 2022 - Febrero 2023",
      points: [
        "Desarrollo de paginas y componentes en Salesforce utilizando Apex lo que incluye la configuración de flujos de trabajo, reglas de validación y la automatización de procesos empresariales.",
        "Implementación de procesos de ETL (Extracción, Transformación y Carga) mediante Talend y SQL para la migración de datos desde fuentes externas a Salesforce",
        "Participación en la gestión de proyectos, incluyendo la planificación y seguimiento utilizando Jira, para garantizar entregas exitosas a tiempo y dentro del presupuesto",
      ],
    },
    {
      title: "Desarrollador Front-End",
      company_name: "Capgemini / Becario",
      icon: capgemini,
      iconBg: "#383E56",
      date: "Octubre 2021 - Junio 2022",
      points: [
        "Desarrollo de paginas y componentes en Salesforce utilizando Apex lo que incluye la configuración de flujos de trabajo, reglas de validación y la automatización de procesos empresariales.",
        "Implementación de procesos de ETL (Extracción, Transformación y Carga) mediante Talend y SQL para la migración de datos desde fuentes externas a Salesforce",
        "Participación en la gestión de proyectos, incluyendo la planificación y seguimiento utilizando Jira, para garantizar entregas exitosas a tiempo y dentro del presupuesto",
      ],
    },
  ],

  myWork: {
    title: "La meva feina",
    subtitle: "Projectes",
    text: "Els següents projectes mostren les meves habilitats i experiència a través d'exemples reals de la meva feina. Cada projecte es descriu breument amb enllaços als repositoris de codi i demos en viu. Reflecteix la meva capacitat per resoldre problemes complexos, treballar amb diferents tecnologies i gestionar projectes de manera efectiva.",
  },

  projects: [
    {
      name: "Marc Web",
      description:
        "Lloc web personal desenvolupat amb React, Vite i Three.js que presenta informació sobre la meva formació, experiència laboral i els projectes que he realitzat.",
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
        "Plataforma web reactiva basada en la pila MERN (MongoDB, Express, React y Node.js) que permet als usuaris registrar-se, buscar exercicis de musculació i donar 'm'agrada'. A més, inclou un sistema de registre d'usuaris administradors per gestionar la pàgina web",
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
      name: "Els meus cursos",
      description:
        "Plataforma web reactiva basada en la pila MERN (MongoDB, Express, React y Node.js) que permet veure els cursos que he realitzat i les tecnologies que conec. A més inclou un sistema de registre d'usuaris per administrar la web",
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
    title: "QUÈ HE ESTUDIAT",
    subtitle: "Formació",
  },

  formation: [
    {
      university: uoc,
      name: "Grau Multimèdia",
      specialty: "Enginyeria Web",
      start: "2019",
      end: "Actualment",
    },
    {
      university: uoc,
      name: "Grau Enginyeria Informàtica",
      specialty: "Enginyeria Web",
      start: "2021",
      end: "Actualment",
    },
  ],

  contact: {
    title: "Deixa un missatge",
    subtitle: "Contacte",
    nameTag: "El teu nom",
    nameText: "Quin és el teu nom?",
    emailTag: "El teu email",
    emailText: "Quin és el teu correu electrònic?",
    messageTag: "El teu missatge",
    messageText: "Quin és el teu missatge?",
    button: "Enviar",
    loading: "Enviant...",
    alert: "Gràcies. Et respondré el més aviat possible.",
  },
};

export default texts;
