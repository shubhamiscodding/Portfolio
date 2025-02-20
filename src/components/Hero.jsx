import React, { useRef } from "react";
import HeroImage from "../assets/hero-image.png";
import "../index.css"; // Ensure Tailwind styles are loaded

const Hero = () => {
  const contactSectionRef = useRef(null); // Reference to Contact section

  // Function to smoothly scroll to the Contact section
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black text-white py-16 flex items-center justify-center space-x-12 pt-52">
      {/* Profile Image */}
      <img src="src/ph.jpg"
        alt="Profile"
        className="w-80 h-80 object-cover transform 
        transition-transform duration-300 hover:scale-105 rounded-full"
      />

      {/* Static Text */}
      <div className="text-left">
        <h1 className="text-7xl font-bold">
          I'm
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Shubham Modi.
          </span>
        </h1>

        <p className="mt-4 text-lg text-gray-300">
          I specialize in building modern and responsive web applications.
        </p>

        {/* Buttons */}
        <div className="mt-8 space-x-8">
          <button
            onClick={handleScrollToContact}
            className="bg-gray-800 text-white transform transition-transform duration-300 hover:scale-110 px-5 py-3.5 rounded-md shadow-md"
          >
            Contact With Me
          </button>
          <button className="bg-green-800 text-white transform transition-transform duration-300 hover:scale-110 px-5 py-3.5 rounded-md shadow-md">
            Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;