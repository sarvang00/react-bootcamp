import React from "react";

import Navbar from "./Navbar";
import Masthead from "./Masthead"
import PortfolioSection from "./PortfolioSection";
import AboutSection from "./AboutSection";

const App = () => {
  return (
    <div>
      <Navbar />
      <Masthead />
      <PortfolioSection />
      <AboutSection />
    </div>
  );
}

export default App;
