import React, { createContext, useState, useEffect } from "react";

// Crea el contexto
const LanguageContext = createContext();

// Crea el proveedor del contexto
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const storedLanguage = localStorage.getItem("language");
    return storedLanguage || "es";
  });

  const changeLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    window.location.reload(); // Recarga la página
  };

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
