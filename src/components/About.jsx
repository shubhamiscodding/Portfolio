import React from "react";

const About = () => {
  return (
    <div className="bg-black text-white py-20 px-6 md:px-16 lg:px-24" id="about">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          About Me
        </h2>

        <p className="text-lg text-gray-300 leading-relaxed">
          Hey there! 👋 I'm <span className="text-blue-400 font-semibold">Shubham Modi</span>, a passionate **Full-Stack Developer** with a strong focus on **MERN Stack** development.  
          My coding journey started with curiosity and a love for **problem-solving**. Over time, I explored various technologies, built real-world projects, and contributed to open-source.
        </p>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-blue-400">My Journey 🚀</h3>
          <ul className="mt-4 space-y-4 text-gray-300 text-left md:text-center">
            <li>✅ **Started with C/C++** – Built logic with **DSA** & problem-solving.</li>
            <li>✅ **Explored Web Development** – Learned **HTML, CSS, JavaScript**.</li>
            <li>✅ **Mastered React & Node.js** – Built multiple **MERN stack** projects.</li>
            <li>✅ **Worked with Databases** – MongoDB, SQL, and Firebase.</li>
            <li>✅ **Currently Learning DevOps & Cloud** – Exploring **AWS & CI/CD pipelines**.</li>
          </ul>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#contact"
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2 rounded-full text-lg 
            font-semibold hover:scale-105 transition-transform duration-300 shadow-md"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
