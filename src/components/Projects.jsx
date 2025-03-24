import { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: "FinCtrl",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Tailwindcss", "javascript"],
    image: "https://res.cloudinary.com/dqhn4dq02/image/upload/v1738918889/c8sw0fobwfaa0yzwcu2a.png",
    github: "https://github.com/shubhamiscodding/Fin_Ctrl",
    deployed: "https://fin-ctrl-frontend-1.onrender.com",
    video: "https://res.cloudinary.com/dqhn4dq02/video/upload/v1740999850/p5ditex5ags07kvajspz.mp4",
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
    image:
      "https://imgs.search.brave.com/pzcPM4fWUSpHnB1T5eWdnsjNVqN8kxUmOBus_89VKN0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YXByb3h5LnNhbG9u/LmNvbS93aWR0aC8x/MjAwL2h0dHBzOi8v/bWVkaWEyLnNhbG9u/LmNvbS8yMDI1LzAy/L3lvdXR1YmVfbG9n/b19pc19kaXNwbGF5/ZWRfb25fYV9tb2Jp/bGVfcGhvbmVfMTI0/Njk3Mjg0MS5qcGc",
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
]

const figmaProjects = [
  {
    id: 1,
    name: " Finctrl ",
    technologies: ["Figma", "Simple UI"],
    image: "https://res.cloudinary.com/dqhn4dq02/image/upload/v1738918889/c8sw0fobwfaa0yzwcu2a.png",
    figmaLink: "https://www.figma.com/proto/DNBtQzukvRqvlJOR15WNiD/FINAL-PROJECT?node-id=165-316&t=IJSgkeDiJ1yPqsuJ-1",
  },
  {
    id: 2,
    name: " smellwell ",
    technologies: ["Figma", " Simple UI", "Prototyping"],
    image:
      "https://imgs.search.brave.com/ELfHBTs87TF2P24kqZI3_46dZHTAEFr2ute2byxK3Zw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bmFtZWJyYW5kc3Bl/cmZ1bWUuY29tL2lt/YWdlcy93ZWxjb21l/LmpwZw",
    figmaLink:
      "https://www.figma.com/proto/9tFxecNpUhwc9yXIunCS2P/something-like-cloning?page-id=218%3A73&node-id=227-440&viewport=588%2C159%2C0.11&t=IH2rnykLPCUofh1R-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=227%3A440",
  },
  {
    id: 3,
    name: " cricknews ",
    technologies: ["Figma", "Prototyping"],
    image:
      "https://imgs.search.brave.com/hvUAlclO2Pq5ixG3UC93dXKraejWOu-SLSrSbuk9MzE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/LmNvbS9pbWFnZS1j/ZG4vaW1hZ2VzL2t0/czkyOHBkL3Byb2R1/Y3Rpb24vNzI5ZWYy/OTliNjI4ZTZmNDBk/ODViMmI2YWM2OWEy/ZWMyNTE2MmYwZi03/MzF4NzMxLnBuZz93/PTEwODAmcT03MiZm/bT13ZWJw",
    figmaLink:
      "https://www.figma.com/proto/9tFxecNpUhwc9yXIunCS2P/something-like-cloning?node-id=90-400&t=uwCXGdlQ3AxLspQy-1",
  },
  {
    id: 4,
    name: " instagram ",
    technologies: ["Figma", "Prototyping"],
    image:
      "https://imgs.search.brave.com/gPZT1daGnqAjIB8yW5fG0cUuGqNhb3ZbYQqVY8Gy6S8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi85Lzk1L0lu/c3RhZ3JhbV9sb2dv/XzIwMjIuc3ZnLzIy/MHB4LUluc3RhZ3Jh/bV9sb2dvXzIwMjIu/c3ZnLnBuZw",
    figmaLink:
      "https://www.figma.com/proto/9tFxecNpUhwc9yXIunCS2P/something-like-cloning?node-id=43-87&t=uwCXGdlQ3AxLspQy-1",
  },
  {
    id: 5,
    name: " one page social media uniqe design ",
    technologies: ["Figma"],
    image: "https://res.cloudinary.com/dqhn4dq02/image/upload/v1740113499/hinsjwtehr2aoxyj0f0s.png",
    figmaLink:
      "https://www.figma.com/proto/1rN6JDvA6MVeTwyABaoaHO/EXAM-BUT-UNIQE-IDEA?page-id=0%3A1&node-id=2-2&p=f&viewport=500%2C484%2C0.63&t=YXlQOTdePAZgLyKv-1&scaling=min-zoom&content-scaling=fixed",
  },
]

const placeholderImage = "https://via.placeholder.com/300x200?text=No+Image+Available"

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState("development");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoFinished, setVideoFinished] = useState(false);
  const [videoShown, setVideoShown] = useState(false);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  const activeProjects = activeTab === "development" ? projects : figmaProjects;
  const projectsToShow = 3; // Number of projects visible at once

  // Show the FinCtrl video on component mount
  useEffect(() => {
    // Only auto-show video if it hasn't been shown yet
    if (!videoShown) {
      const finCtrlProject = projects.find(p => p.id === 1);
      if (finCtrlProject && finCtrlProject.video) {
        setSelectedProject(finCtrlProject);
        setVideoShown(true);
      }
    }
  }, [videoShown]);

  // Auto-slide effect - only start after video is finished
  useEffect(() => {
    if (videoFinished) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) =>
          prev + projectsToShow >= activeProjects.length ? 0 : prev + 1
        );
      }, 5000); // Change slide every 5 seconds
      return () => clearInterval(interval);
    }
  }, [activeTab, activeProjects.length, videoFinished]);

  const handleVideoEnded = () => {
    setVideoFinished(true);
    // Close the modal after video finishes
    setTimeout(() => {
      closeModal();
    }, 1000); // Wait 1 second to close the modal after video ends
  };

  const cardVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
    hover: { scale: 1.05, transition: { duration: 0.3 } }
  };

  return (
    <section
      id="project"
      className="relative min-h-screen py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-black overflow-hidden"
    >
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
        <motion.h2
          className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h2>

        {/* Dropdown - Only show after video finishes */}
        {videoFinished && (
          <div className="flex justify-center mb-12">
            <motion.select
              className="px-6 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-gray-300 rounded-full shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300"
              onChange={(e) => setActiveTab(e.target.value)}
              value={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <option value="development">Development Projects</option>
              <option value="figma">Figma Designs</option>
            </motion.select>
          </div>
        )}

        {/* Carousel Container - Only show after video finishes */}
        {videoFinished && (
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{
                x: `-${currentIndex * (100 / projectsToShow)}%`,
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {activeProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  whileHover="hover"
                  className="flex-shrink-0 w-full md:w-1/3 relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
                  onClick={() => openModal(project)}
                >
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                      src={project.image || placeholderImage}
                      alt={project.name}
                      className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-100 mb-2">{project.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">Click to view details</p>

                  <div className="flex flex-wrap gap-3">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-3 py-1.5 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={16} className="mr-1" /> GitHub
                      </motion.a>
                    )}
                    {project.deployed && (
                      <motion.a
                        href={project.deployed}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-gradient-to-r from-green-600 to-green-400 text-white rounded-lg shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all duration-300 text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        Live
                      </motion.a>
                    )}
                    {project.figmaLink && (
                      <motion.a
                        href={project.figmaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-gradient-to-r from-purple-600 to-purple-400 text-white rounded-lg shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        Figma
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {Array(Math.ceil(activeProjects.length / projectsToShow)).fill().map((_, i) => (
                <motion.div
                  key={i}
                  className={`w-2 h-2 rounded-full ${Math.floor(currentIndex / projectsToShow) === i
                      ? 'bg-gradient-to-r from-blue-500 to-green-400'
                      : 'bg-gray-600'
                    }`}
                  whileHover={{ scale: 1.3 }}
                  onClick={() => setCurrentIndex(i * projectsToShow)}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedProject && (
        <motion.div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative bg-gradient-to-br from-gray-800 to-gray-900/95 backdrop-blur-lg border border-gray-700/50 text-white p-8 rounded-2xl w-11/12 max-w-3xl shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            {/* Only show close button if it's not the initial video play */}
            {(videoFinished || selectedProject.id !== 1) && (
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-300 hover:text-red-500 transition duration-300 text-2xl"
              >
                ×
              </button>
            )}

            <h2 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400">
              {selectedProject.name}
            </h2>

            {selectedProject.video && (
              <div className="mt-4 aspect-video w-full rounded-lg overflow-hidden shadow-lg">
                <video
                  src={selectedProject.video}
                  className="w-full h-full"
                  controls
                  autoPlay
                  muted
                  playsInline
                  onEnded={handleVideoEnded}
                  onLoadedMetadata={(e) => e.target.playbackRate = 2.0} // Set speed to 2X
                />
              </div>
            )}


            <div className="mt-6">
              <p className="text-gray-300 text-center mb-4">Technologies Used:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {(selectedProject.technologies || []).map((tech, index) => (
                  <motion.span
                    key={index}
                    className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-200 shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Only show close button if it's not the initial video play OR video has finished */}
            {(videoFinished || selectedProject.id !== 1) && (
              <motion.button
                onClick={closeModal}
                className="mt-6 w-full px-6 py-3 bg-gradient-to-r from-red-600 to-red-400 text-white rounded-lg font-medium shadow-lg shadow-red-500/20 hover:shadow-red-500/40 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Close
              </motion.button>
            )}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;