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
      "Estudiante del grado en Multimedia y del grado en Ingeniería Informática en la UOC",
    greeting: "Hola, soy ",
  },

  about: {
    title: "INTRODUCCIÓN",
    subtitle: "Resumen",
    text: "Soy un apasionado programador con sólida experiencia en JavaScript, React, Node.js y Three.js. Mi enfoque principal es desarrollar soluciones innovadoras y eficientes que brinden experiencias únicas a los usuarios.",
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
      title: "Especialista en UX",
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
      title: "Desarrollador React.js",
      company_name: "TVUp / Prácticas",
      icon: tvup,
      iconBg: "#383E56",
      date: "Marzo 2023 - Julio 2023",
      points: [
        "Desarrollo y mantenimiento de aplicaciones web utilizando React.js y otras tecnologías relacionadas.",
        "Colaboración con equipos interfuncionales, incluyendo diseñadores, gerentes de producto y otros desarrolladores, para crear productos de alta calidad.",
        "Implementación de diseño receptivo y asegurando la compatibilidad entre navegadores.",
        "Participación en revisiones de código y proporcionando retroalimentación constructiva a otros desarrolladores.",
      ],
    },
    {
      title: "Ingeniero de software",
      company_name: "Capgemini",
      icon: capgemini,
      iconBg: "#383E56",
      date: "Julio 2022 - Febrero 2023",
      points: [
        "Desarrollo y personalización de soluciones basadas en Salesforce para satisfacer las necesidades del cliente.",
        "Colaboración con equipos interfuncionales, incluyendo administradores de sistemas, consultores de negocio y otros programadores, para implementar soluciones eficientes en Salesforce.",
        "Configuración y personalización de la plataforma Salesforce, incluyendo el diseño de flujos de trabajo, reglas de validación y automatización de procesos empresariales.",
        "Implementación de ETL (Extracción, Transformación y Carga) para la migración de datos desde fuentes externas a Salesforce.",
      ],
    },
    {
      title: "Ingeniero de software",
      company_name: "Capgemini / Prácticas",
      icon: capgemini,
      iconBg: "#383E56",
      date: "Octubre 2021 - Junio 2022",
      points: [
        "Desarrollo y personalización de soluciones basadas en Salesforce para satisfacer las necesidades del cliente.",
        "Colaboración con equipos interfuncionales, incluyendo administradores de sistemas, consultores de negocio y otros programadores, para implementar soluciones eficientes en Salesforce.",
        "Configuración y personalización de la plataforma Salesforce, incluyendo el diseño de flujos de trabajo, reglas de validación y automatización de procesos empresariales.",
        "Integración de aplicaciones y sistemas externos con Salesforce mediante el uso de API y herramientas de integración.",
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
