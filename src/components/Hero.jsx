import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Hero = () => {
  const navigate = useNavigate(); // Hook for navigation
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black text-white py-16 flex items-center justify-center space-x-12 pt-52">
      {/* Profile Image */}
      <img
        src="https://res.cloudinary.com/dqhn4dq02/image/upload/v1740113553/jm7lzaefxenoz27qzxfz.jpg"
        alt="Profile"
        className="w-80 h-80 object-cover transform 
        transition-transform duration-300 hover:scale-105 rounded-full"
      />

      {/* Static Text */}
      <div className="text-left">
        <h1 className="text-7xl font-bold">
          I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Shubham Modi.
          </span>
        </h1>

        <p className="mt-4 text-lg text-gray-300">
          I specialize in building modern and responsive web applications. &&  <br />
          i am a Marn Stack Devloper .
        </p>

        {/* Buttons */}
        <div className="mt-8 space-x-8">
          {/* Navigate to Contact Page */}
          <button
            onClick={handleScrollToContact} // Scroll to Contact section
            className="bg-gray-800 text-white transform transition-transform duration-300 hover:scale-110 px-5 py-3.5 rounded-md shadow-md"
          >
            Contact With Me
          </button>

          {/* Navigate to Resume Page */}
          <button
            onClick={() => navigate("/resume")} // Navigate to Resume page
            className="bg-green-800 text-white transform transition-transform duration-300 hover:scale-110 px-5 py-3.5 rounded-md shadow-md"
          >
            Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
