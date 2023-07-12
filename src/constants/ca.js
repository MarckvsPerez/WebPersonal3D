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
      "Estudiant del grau en Multimèdia i del grau en Enginyeria Informàtica a la UOC",
    greeting: "Hola, sóc ",
  },

  about: {
    title: "INTRODUCCIÓ",
    subtitle: "Resum",
    text: "Sóc un apassionat programador amb una sòlida experiència en JavaScript, React, Node.js i Three.js. El meu enfocament principal és desenvolupar solucions innovadores i eficients que ofereixin experiències úniques als usuaris.",
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
      title: "Desenvolupador React.js",
      company_name: "TVUp / Pràctiques",
      icon: tvup,
      iconBg: "#383E56",
      date: "Març 2023 - Juliol 2023",
      points: [
        "Desenvolupament i manteniment d'aplicacions web utilitzant React.js i altres tecnologies relacionades.",
        "Col·laboració amb equips interfuncionals, incloent dissenyadors, gestors de producte i altres desenvolupadors, per crear productes d'alta qualitat.",
        "Implementació de disseny receptiu i assegurament de la compatibilitat entre navegadors.",
        "Participació en revisions de codi i proporcionant retroalimentació constructiva a altres desenvolupadors.",
      ],
    },
    {
      title: "Enginyer de software",
      company_name: "Capgemini",
      icon: capgemini,
      iconBg: "#383E56",
      date: "Juliol 2022 - Febrer 2023",
      points: [
        "Desenvolupament i personalització de solucions basades en Salesforce per satisfer les necessitats del client.",
        "Col·laboració amb equips interfuncionals, incloent administradors de sistemes, consultors de negocis i altres programadors, per implementar solucions eficients en Salesforce.",
        "Configuració i personalització de la plataforma Salesforce, incloent el disseny de fluxos de treball, regles de validació i automatització de processos empresarials.",
        "Implementació de ETL (Extracció, Transformació i Càrrega) per a la migració de dades des de fonts externes a Salesforce.",
      ],
    },
    {
      title: "Enginyer de software",
      company_name: "Capgemini / Pràctiques",
      icon: capgemini,
      iconBg: "#383E56",
      date: "Octubre 2021 - Juny 2022",
      points: [
        "Desenvolupament i personalització de solucions basades en Salesforce per satisfer les necessitats del client.",
        "Col·laboració amb equips interfuncionals, incloent administradors de sistemes, consultors de negocis i altres programadors, per implementar solucions eficients en Salesforce.",
        "Configuració i personalització de la plataforma Salesforce, incloent el disseny de fluxos de treball, regles de validació i automatització de processos empresarials.",
        "Integració d'aplicacions i sistemes externs amb Salesforce mitjançant l'ús d'API i eines d'integració.",
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
