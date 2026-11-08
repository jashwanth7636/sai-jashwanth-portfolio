import React from "react";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { ScrollProgress } from "./components/ScrollProgress";
import { CustomCursor } from "./components/CustomCursor";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Focus } from "./components/Focus";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { ResumeCTA } from "./components/ResumeCTA";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import "./styles.css";

export function App() {
  // Lenis smooth scroll integration
  useSmoothScroll();

  return (
    <div className="portfolio-app-root style2-theme">
      {/* Top progress indicator & subtle non-touch custom cursor */}
      <ScrollProgress />
      <CustomCursor />

      {/* Sticky Technical Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Focus />
        <Experience />
        <Education />
        <ResumeCTA />
        <Contact />
      </main>

      {/* Minimal Technical Footer */}
      <Footer />
    </div>
  );
}

export default App;
