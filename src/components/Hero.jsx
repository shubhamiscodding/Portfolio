import React from 'react';
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown, Download, Github, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();
  
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-black pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-blue-500 to-green-400 opacity-10"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                y: [null, Math.random() * window.innerHeight],
                x: [null, Math.random() * window.innerWidth],
              }}
              transition={{
                duration: Math.random() * 20 + 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-4 py-1 bg-gradient-to-r from-blue-500/10 to-green-400/10 rounded-full mb-6"
            >
              <span className="text-gray-300 font-medium">Full Stack Developer</span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Hello, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400">
                Shubham Modi
              </span>
            </motion.h1>
            
            <motion.div
              className="text-xl md:text-2xl text-gray-300 mb-8 h-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <TypeAnimation
                sequence={[
                  'I build web applications',
                  1000,
                  'I create user experiences',
                  1000,
                  'I develop MERN stack solutions',
                  1000,
                  'I transform ideas into code',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <motion.a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-all duration-300 hover:scale-110"
                whileHover={{ y: -5 }}
              >
                <Github size={24} className="text-gray-300" />
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-all duration-300 hover:scale-110"
                whileHover={{ y: -5 }}
              >
                <Linkedin size={24} className="text-gray-300" />
              </motion.a>
              <motion.a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-all duration-300 hover:scale-110"
                whileHover={{ y: -5 }}
              >
                <Twitter size={24} className="text-gray-300" />
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <motion.button
                onClick={handleScrollToContact}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
              
              <motion.button
                onClick={() => navigate("/resume")}
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-400 text-white rounded-lg font-medium shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={18} className="mr-2" /> Resume
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Right content - Profile image */}
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Animated rings */}
              <motion.div 
                className="absolute inset-0 rounded-full border-2 border-blue-500/20"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute inset-0 rounded-full border-2 border-green-400/20"
                animate={{ 
                  scale: [1.1, 1, 1.1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Glowing effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-green-400 rounded-full blur-xl opacity-20"></div>
              
              {/* Profile image */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://res.cloudinary.com/dqhn4dq02/image/upload/v1740113553/jm7lzaefxenoz27qzxfz.jpg"
                  alt="Shubham Modi"
                  className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-gray-800 shadow-2xl z-10"
                />
                
                {/* Tech stack icons positioned around the image */}
                <motion.div 
                  className="absolute -top-4 -right-4 bg-gray-800 p-2 rounded-full shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-8 h-8" alt="React" />
                </motion.div>
                <motion.div 
                  className="absolute top-1/4 -right-8 bg-gray-800 p-2 rounded-full shadow-lg"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="w-8 h-8" alt="Node.js" />
                </motion.div>
                <motion.div 
                  className="absolute bottom-1/4 -right-4 bg-gray-800 p-2 rounded-full shadow-lg"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="w-8 h-8" alt="MongoDB" />
                </motion.div>
                <motion.div 
                  className="absolute -bottom-4 -right-4 bg-gray-800 p-2 rounded-full shadow-lg"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity }}
                >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" className="w-8 h-8 brightness-200" alt="Express" />
                </motion.div>
                <motion.div 
                  className="absolute -bottom-4 left-1/4 bg-gray-800 p-2 rounded-full shadow-lg"
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 2.8, repeat: Infinity }}
                >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-8 h-8" alt="JavaScript" />
                </motion.div>
                <motion.div 
                  className="absolute bottom-1/4 -left-4 bg-gray-800 p-2 rounded-full shadow-lg"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2.3, repeat: Infinity }}
                >
                  <img src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg" className="w-8 h-8" alt="Tailwind CSS" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll down indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={20} className="text-gray-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;