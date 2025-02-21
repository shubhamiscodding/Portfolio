import React, { useState } from "react";

const projects = [
  {
    id: 1,
    name: "FinCtrl",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Tailwindcss", "javascript"],
    image: "https://res.cloudinary.com/dqhn4dq02/image/upload/v1738918889/c8sw0fobwfaa0yzwcu2a.png",
    github: "https://github.com/shubhamiscodding/Fin_Ctrl",
    deployed: "https://fin-ctrl-frontend-1.onrender.com",
  },
  {
    id: 2,
    name: "Progcap Clone",
    technologies: ["react", "CSS", "javascript"],
    image: "https://cdn.prod.website-files.com/6193782af8f15b5c5763d1de/619b51335bf284cd78d1b5e1_Progcap_Logo.svg",
    github: "https://github.com/shubhamiscodding/progcap-clone",
    deployed: "https://progcap-clone.onrender.com",
  },
  {
    id: 3,
    name: "Apollo Clone",
    technologies: ["HTML", "CSS"],
    image: "https://images.apollo247.in/images/pharmacy_logo.svg?tr=q-70,w-100,dpr-2,c-at_max",
    github: "https://github.com/shubhamiscodding/apolloclone",
    deployed: "https://apolloclone.onrender.com",
  },
  {
    id: 4,
    name: "Youtube",
    technologies: ["React", "Api"],
    image: "https://imgs.search.brave.com/pzcPM4fWUSpHnB1T5eWdnsjNVqN8kxUmOBus_89VKN0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YXByb3h5LnNhbG9u/LmNvbS93aWR0aC8x/MjAwL2h0dHBzOi8v/bWVkaWEyLnNhbG9u/LmNvbS8yMDI1LzAy/L3lvdXR1YmVfbG9n/b19pc19kaXNwbGF5/ZWRfb25fYV9tb2Jp/bGVfcGhvbmVfMTI0/Njk3Mjg0MS5qcGc",
    github: "https://github.com/shubhamiscodding/spotify-with-react/tree/main/you-vite-react",
    deployed: "https://youtube-frontend-ch16.onrender.com",
  },
  {
    id: 5,
    name: "PodBean",
    technologies: ["HTML", "CSS"],
    image: "https://pbcdn1.podbean.com/fs1/site/images/logo-img2.png",
    github: "https://github.com/shubhamiscodding/podbeanclon",
    deployed: "https://podbeanclon.onrender.com/",
  },
];

const figmaProjects = [
  {
    id: 1,
    name: " Finctrl ",
    technologies: ["Figma" , "Simple UI"],
    image: "https://res.cloudinary.com/dqhn4dq02/image/upload/v1738918889/c8sw0fobwfaa0yzwcu2a.png",
    figmaLink: "https://www.figma.com/proto/DNBtQzukvRqvlJOR15WNiD/FINAL-PROJECT?node-id=165-316&t=IJSgkeDiJ1yPqsuJ-1",
  },
  {
    id: 2,
    name: " smellwell ",
    technologies: ["Figma" , " Simple UI" , "Prototyping"],
    image: "https://imgs.search.brave.com/ELfHBTs87TF2P24kqZI3_46dZHTAEFr2ute2byxK3Zw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bmFtZWJyYW5kc3Bl/cmZ1bWUuY29tL2lt/YWdlcy93ZWxjb21l/LmpwZw",
    figmaLink: "https://www.figma.com/proto/9tFxecNpUhwc9yXIunCS2P/something-like-cloning?page-id=218%3A73&node-id=227-440&viewport=588%2C159%2C0.11&t=IH2rnykLPCUofh1R-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=227%3A440",
  },
  {
    id: 3,
    name: " cricknews ",
    technologies: ["Figma" , "Prototyping"],
    image: "https://imgs.search.brave.com/hvUAlclO2Pq5ixG3UC93dXKraejWOu-SLSrSbuk9MzE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/LmNvbS9pbWFnZS1j/ZG4vaW1hZ2VzL2t0/czkyOHBkL3Byb2R1/Y3Rpb24vNzI5ZWYy/OTliNjI4ZTZmNDBk/ODViMmI2YWM2OWEy/ZWMyNTE2MmYwZi03/MzF4NzMxLnBuZz93/PTEwODAmcT03MiZm/bT13ZWJw",
    figmaLink: "https://www.figma.com/proto/9tFxecNpUhwc9yXIunCS2P/something-like-cloning?node-id=90-400&t=uwCXGdlQ3AxLspQy-1",
  },
  {
    id: 4,
    name: " instagram ",
    technologies: ["Figma" , "Prototyping"],
    image: "https://imgs.search.brave.com/gPZT1daGnqAjIB8yW5fG0cUuGqNhb3ZbYQqVY8Gy6S8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi85Lzk1L0lu/c3RhZ3JhbV9sb2dv/XzIwMjIuc3ZnLzIy/MHB4LUluc3RhZ3Jh/bV9sb2dvXzIwMjIu/c3ZnLnBuZw",
    figmaLink: "https://www.figma.com/proto/9tFxecNpUhwc9yXIunCS2P/something-like-cloning?node-id=43-87&t=uwCXGdlQ3AxLspQy-1",
  },
  {
    id: 5,
    name: " one page social media uniqe design ",
    technologies: ["Figma"],
    image: "https://res.cloudinary.com/dqhn4dq02/image/upload/v1740113499/hinsjwtehr2aoxyj0f0s.png",
    figmaLink: "https://www.figma.com/proto/1rN6JDvA6MVeTwyABaoaHO/EXAM-BUT-UNIQE-IDEA?page-id=0%3A1&node-id=2-2&p=f&viewport=500%2C484%2C0.63&t=YXlQOTdePAZgLyKv-1&scaling=min-zoom&content-scaling=fixed",
  },
];

const placeholderImage = "https://via.placeholder.com/300x200?text=No+Image+Available";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState("development");

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-5xl font-bold text-center mb-10 text-gray-100">My Projects</h2>

        {/* Dropdown for Selecting Development or Figma Projects */}
        <div className="flex justify-center mb-8">
          <select
            className="px-4 py-2 bg-gray-900 border border-gray-700 text-white rounded-lg"
            onChange={(e) => setActiveTab(e.target.value)}
            value={activeTab}
          >
            <option value="development">Development Projects</option>
            <option value="figma">Figma Designs</option>
          </select>
        </div>

        {/* Render Development Projects */}
        {activeTab === "development" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-800 
                hover:shadow-xl transform transition-all duration-500 hover:scale-105 cursor-pointer"
                onClick={() => openModal(project)}
              >
                <img
                  src={project.image || placeholderImage}
                  alt={project.name}
                  className="rounded-lg mb-4 w-full h-48 object-fill shadow-md"
                />
                <h3 className="text-2xl font-semibold text-gray-100">{project.name}</h3>
                <p className="text-gray-400 mt-2 text-lg">Click to view technologies</p>

                <div className="mt-6 flex gap-5">
                  <a
                    href={project.github}
                    className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 
                    text-white rounded-full shadow-md transition-transform transform hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    GitHub
                  </a>

                  <a
                    href={project.deployed}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-green-500 
                    text-white rounded-full shadow-md transition-transform transform hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Render Figma Projects */}
        {activeTab === "figma" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {figmaProjects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-800 
                hover:shadow-xl transform transition-all duration-500 hover:scale-105 cursor-pointer"
                onClick={() => openModal(project)}
              >
                <img
                  src={project.image || placeholderImage}
                  alt={project.name}
                  className="rounded-lg mb-4 w-full h-48 object-fill shadow-md"
                />
                <h3 className="text-2xl font-semibold text-gray-100">{project.name}</h3>
                <p className="text-gray-400 mt-2 text-lg">Click to view details</p>

                <div className="mt-6 flex gap-5">
                  <a
                    href={project.figmaLink}
                    className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 
                    text-white rounded-full shadow-md transition-transform transform hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Figma
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 bg-opacity-90 backdrop-blur-lg border border-gray-700 text-white p-8 rounded-2xl w-96 shadow-2xl transform transition-all duration-300 scale-100">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-300 hover:text-red-500 transition duration-300 text-2xl"
            >
              &times;
            </button>

            <h2 className="text-4xl font-extrabold text-center text-blue-400">{selectedProject.name}</h2>

            {/* Technologies or technologies */}
            {selectedProject.technologies ? (
              <>
                <p className="mt-4 text-lg text-gray-300 text-center">Technologies Used:</p>
                <ul className="mt-4 space-y-3">
                  {selectedProject.technologies.map((tech, index) => (
                    <li
                      key={index}
                      className="bg-gray-700 px-4 py-2 rounded-lg text-center text-gray-100 shadow-md transition-transform transform hover:scale-105"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p className="mt-4 text-lg text-center text-gray-300">Designed in Figma</p>
            )}

            <button
              onClick={closeModal}
              className="mt-5 px-4 py-2 bg-red-400 text-white font-bold rounded-lg shadow-lg w-full hover:bg-red-800 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
