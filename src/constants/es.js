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
    greeting: "Hola, soy ",
    firstName: "Marc",
    lastName: "Pérez Salat",
    intro: "Desarrollador web Full Stack especializado en JavaScript",
  },

  about: {
    title: "INTRODUCCIÓN",
    subtitle: "Resumen",
    text: "Soy un desarrollador Full Stack con dos años de experiencia en la creación de aplicaciones web y conocimientos en JavaScript, React, Node.js y Three.js. Mi formación académica incluye los grados en Multimedia e Ingeniería Informática en la UOC, lo que respalda mi habilidad para abordar proyectos de manera integral y creativa.",
  },

  experienceInfo: {
    title: "QUÉ HE HECHO HASTA AHORA",
    subtitle: "Experiencia Laboral",
  },
  navLinks: [
    {
      id: "about",
      title: "Sobre mí",
    },
    {
      id: "work",
      title: "Experiencia",
    },
    {
      id: "contact",
      title: "Contacto",
    },
  ],
  services: [
    {
      title: "Desarrollador Frontend",
      icon: web,
    },
    {
      title: "Desarrollador Backend",
      icon: backend,
    },
    {
      title: "Desarrollador React",
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
      title: "Desenvolupador Full Stack",
      company_name: "Prestige Software",
      icon: prestige,
      iconBg: "#383E56",
      date: "Setembre 2023 - Actualment",
      points: [
        "Desenvolupar i mantenir la lògica del servidor utilitzant Node.js.",
        "Desenvolupament de pantalles per a diverses aplicacions empresarials utilitzant JavaScript, seguint mockups dissenyats per l'equip de disseny.",
        "Participar activament en la planificació i execució de projectes de desenvolupament, assegurant entregues a temps i dins del pressupost.",
      ],
    },
    {
      title: "Desenvolupador Front-End",
      company_name: "TVUp / Becari",
      icon: tvup,
      iconBg: "#383E56",
      date: "Març 2023 - Juliol 2023",
      points: [
        "Implementació de pantalles per a l'aplicació TiviFy segons els mockups proporcionats per l'equip de disseny, utilitzant React.js i TypeScript.",
        "Gestió del control de versions a través de Git, incloent la creació i revisió de pull requests per a col·laborar eficaçment amb l'equip de desenvolupament.",
      ],
    },
    {
      title: "Desenvolupador Front-End",
      company_name: "Capgemini",
      icon: capgemini,
      iconBg: "#383E56",
      date: "Juliol 2022 - Febrer 2023",
      points: [
        "Desenvolupament de pàgines i components en Salesforce utilitzant Apex, la qual cosa inclou la configuració de fluxos de treball, regles de validació i l'automatització de processos empresarials.",
        "Implementació de processos d'ETL (Extracció, Transformació i Càrrega) mitjançant Talend i SQL per a la migració de dades des de fonts externes a Salesforce.",
        "Participació en la gestió de projectes, incloent la planificació i seguiment utilitzant Jira, per garantir entregues d'èxit a temps i dins del pressupost.",
      ],
    },
    {
      title: "Desenvolupador Front-End",
      company_name: "Capgemini / Becari",
      icon: capgemini,
      iconBg: "#383E56",
      date: "Octubre 2021 - Juny 2022",
      points: [
        "Desenvolupament de pàgines i components en Salesforce utilitzant Apex, la qual cosa inclou la configuració de fluxos de treball, regles de validació i l'automatització de processos empresarials.",
        "Implementació de processos d'ETL (Extracció, Transformació i Càrrega) mitjançant Talend i SQL per a la migració de dades des de fonts externes a Salesforce.",
        "Participació en la gestió de projectes, incloent la planificació i seguiment utilitzant Jira, per garantir entregues d'èxit a temps i dins del pressupost.",
      ],
    },
  ],

  myWork: {
    title: "Mi trabajo",
    subtitle: "Proyectos",
    text: "Los siguientes proyectos muestran mis habilidades y experiencia a través de ejemplos reales de mi trabajo. Cada proyecto se describe brevemente con enlaces a repositorios de código y demos en vivo. Refleja mi capacidad para resolver problemas complejos, trabajar con diferentes tecnologías y gestionar proyectos de manera efectiva.",
  },

  projects: [
    {
      name: "Marc Web",
      description:
        "Sitio web personal desarrollado con React, Vite y Three.js que presenta información sobre mi formación, experiencia laboral y los proyectos que he realizado.",
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
        "Plataforma web reactiva basada en la pila MERN (MongoDB, Express, React y Node.js) que permite a los usuarios registrarse, buscar ejercicios de musculación y dar 'me gusta'. Además, incluye un sistema de registro de usuarios administradores para gestionar la página web.",
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
        "Plataforma web reactiva basada en la pila MERN (MongoDB, Express, React y Node.js) que permite ver los cursos que he realizado y las tecnologías que conozco. Además incluye un sistema de registro de usuarios para administrar la web.",
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
    title: "QUÉ HE ESTUDIADO",
    subtitle: "Formación",
  },

  formation: [
    {
      university: uoc,
      name: "Grado Multimedia",
      specialty: "Ingeniería Web",
      start: "2019",
      end: "Actualmente",
    },
    {
      university: uoc,
      name: "Grado Ingeniería Informática",
      specialty: "Ingeniería Web",
      start: "2021",
      end: "Actualmente",
    },
  ],

  contact: {
    title: "Deja un mensaje",
    subtitle: "Contacto",
    nameTag: "Tu nombre",
    nameText: "¿Cuál es tu nombre?",
    emailTag: "Tu email",
    emailText: "¿Cuál es tu correo electrónico?",
    messageTag: "Tu mensaje",
    messageText: "¿Cuál es tu mensaje?",
    button: "Enviar",
    loading: "Enviando...",
    alert: "Gracias. Te responderé lo antes posible.",
  },
};

export default texts;
