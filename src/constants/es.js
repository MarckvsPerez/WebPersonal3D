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
    text: "Soy Marc, desarrollador Full Stack con dos años de experiencia en JavaScript y Java (Apex). Mi formación académica incluye los grados en Multimedia e Ingeniería Informática en la UOC, respaldando mi capacidad para abordar proyectos de manera integral y creativa. Además de mi experiencia en desarrollo web, he creado proyectos personales que resaltan mis habilidades en tecnologías como React y Node.js. Valoro la importancia del aprendizaje continuo y la satisfacción de entregar proyectos exitosos.",
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
