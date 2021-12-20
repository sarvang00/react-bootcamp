import React from "react";

import Navbar from "./Navbar";
import Masthead from "./Masthead"
import PortfolioSection from "./PortfolioSection";
import AboutSection from "./AboutSection";
import ContactMeSection from "./ContactMeSection";

const App = () => {
  return (
    <div>
      <Navbar />
      <Masthead />
      <PortfolioSection />
      <AboutSection />
      <ContactMeSection />
    </div>
  );
}

export default App;
