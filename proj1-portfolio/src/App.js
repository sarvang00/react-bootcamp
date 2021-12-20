import React from "react";

import Navbar from "./Navbar";
import Masthead from "./Masthead"
import PortfolioSection from "./PortfolioSection";
import AboutSection from "./AboutSection";
import ContactMeSection from "./ContactMeSection";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Masthead />
      <PortfolioSection />
      <AboutSection />
      <ContactMeSection />
      <Footer />
    </div>
  );
}

export default App;
