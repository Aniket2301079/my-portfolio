import React, { useState } from "react";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

const App = () => {
  const [showLanding, setShowLanding] = useState(true);

  const handleExploreClick = () => {
    setShowLanding(false); // Hide landing page and show main website
  };

  return (
    <div className="bg-black dark:white">
      {showLanding ? (
        <LandingPage onExploreClick={handleExploreClick} />
      ) : (
        <>
          <div id="home">
            <Navbar />
          </div>

          <Hero />
          <div id="about"></div>
          <About />
          <div id="skill"></div>

          <Skills />
          <div id="project"></div>
          <ProjectCard />

          <div id="contact"></div>
          <Contact />
          <Footer />
          <WhatsAppButton />
        </>
      )}
    </div>
  );
};

export default App;
