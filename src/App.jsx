import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Background3D from "./components/Background3D";
import { ThemeProvider } from "./components/ThemeProvider";

export default function App() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.2]);

  return (
    <ThemeProvider>
      <div ref={containerRef} className="relative bg-black text-white min-h-screen">
        {/* Background */}
        <div className="fixed inset-0 z-0">
          <Background3D />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Navbar />

          {/* Hero fades on scroll */}
          <motion.div style={{ opacity }} className="relative z-10">
            <Hero />
          </motion.div>

          <About />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </div>
    </ThemeProvider>
  );
}
