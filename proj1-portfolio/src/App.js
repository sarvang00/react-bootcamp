import React from "react";

import Navbar from "./Navbar";
import Masthead from "./Masthead"
import PortfolioSection from "./PortfolioSection";
import AboutSection from "./AboutSection";
import ContactMeSection from "./ContactMeSection";
import Footer from "./Footer";
import CopyrightSection from "./CopyrightSection";

const App = () => {
  return (
    <div>
      <Navbar />
      <Masthead />
      <PortfolioSection />
      <AboutSection />
      <ContactMeSection />
      <Footer />
      <CopyrightSection />
    </div>
  );
}

export default App;
