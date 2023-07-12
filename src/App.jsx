import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Formation,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

import { LanguageProvider } from "./constants/languageContext";

const App = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Formation />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;
