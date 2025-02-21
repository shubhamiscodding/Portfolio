import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom"; // Import Router and useNavigate
import "./App.css";
import { Home, Briefcase, Phone, Code2 } from "lucide-react";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume"; // Import Resume page

function App() {
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Section references
  const heroRef = useRef(null);
  const serviceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="box-content overflow-x-hidden">
              <div
                className="min-h-screen bg-gray-900 text-white"
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
              >
                {/* Sections */}
                <div ref={heroRef}>
                  <Hero />
                </div>
                <div ref={serviceRef}>
                  <Service />
                </div>
                <div ref={projectsRef}>
                  <Projects />
                </div>
                <div ref={contactRef}>
                  <Contact />
                </div>
                <Footer />

                {/* Draggable Navigation */}
                <div
                  className="fixed cursor-move z-50 flex bg-gray-900 items-center gap-4 p-3"
                  style={{ left: `${position.x}px`, top: `${position.y}px` }}
                  onMouseDown={handleMouseDown}
                >
                  <button
                    onClick={() => scrollToSection(heroRef)}
                    className="p-3 bg-gray-800 rounded-xl shadow-lg hover:bg-gray-700 transition-all"
                  >
                    <Home className="w-5 h-5 text-white" />
                  </button>
                  <button
                    onClick={() => scrollToSection(serviceRef)}
                    className="p-3 bg-gray-800 rounded-xl shadow-lg hover:bg-gray-700 transition-all"
                  >
                    <Briefcase className="w-5 h-5 text-white" />
                  </button>
                  <button
                    onClick={() => scrollToSection(projectsRef)}
                    className="p-3 bg-gray-800 rounded-xl shadow-lg hover:bg-gray-700 transition-all"
                  >
                    <Code2 className="w-5 h-5 text-white" />
                  </button>
                  <button
                    onClick={() => scrollToSection(contactRef)}
                    className="p-3 bg-gray-800 rounded-xl shadow-lg hover:bg-gray-700 transition-all"
                  >
                    <Phone className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          }
        />
        <Route path="/resume" element={<Resume />} /> {/* Add Resume Route */}
      </Routes>
    </Router>
  );
}

export default App;
