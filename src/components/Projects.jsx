

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { Github, ArrowLeft, ArrowRight, Moon, Sun } from "lucide-react";
import { Badge } from "./ui/badge";

// Define the Button component
const Button = ({ children, className, variant, ...props }) => {
  const baseClasses = "inline-flex items-center justify-center px-4 py-2 rounded-md font-medium";
  const variantClasses = variant === "outline"
    ? "border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
    : "bg-gray-900 dark:bg-gray-800 hover:bg-gray-800 dark:hover:bg-gray-700 text-white";

  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
      {children}
    </button>
  );
};

// Project data
const projects = [
  {
    id: 1,
    name: "FinCtrl",
    description: "A comprehensive financial management system that helps you track expenses, manage budgets, and analyze spending patterns effectively.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Tailwindcss", "JavaScript"],
    image: "https://res.cloudinary.com/dqhn4dq02/image/upload/v1741248835/hudrwpm8ah1hnlfo0ahm.png",
    github: "https://github.com/shubhamiscodding/Fin_Ctrl",
    deployed: "https://fin-ctrl-frontend-1.onrender.com",
    color: "bg-blue-50 dark:bg-blue-950/20",
    logo: "https://res.cloudinary.com/dqhn4dq02/image/upload/v1741248835/hudrwpm8ah1hnlfo0ahm.png",
    type: "development",
    video: "https://res.cloudinary.com/dqhn4dq02/video/upload/v1740999850/p5ditex5ags07kvajspz.mp4"
  },
  {
    id: 2,
    name: "Progcap Clone",
    description: "A pixel-perfect clone of the Progcap platform, showcasing advanced React implementation and responsive design techniques.",
    technologies: ["React", "CSS", "JavaScript"],
    image: "https://cdn.prod.website-files.com/6193782af8f15b5c5763d1de/619b51335bf284cd78d1b5e1_Progcap_Logo.svg",
    github: "https://github.com/shubhamiscodding/progcap-clone",
    deployed: "https://progcap-clone.onrender.com",
    color: "bg-green-50 dark:bg-green-950/20",
    logo: "https://cdn.prod.website-files.com/6193782af8f15b5c5763d1de/619b51335bf284cd78d1b5e1_Progcap_Logo.svg",
    type: "development"
  },
  {
    id: 3,
    name: "Apollo Clone",
    description: "A faithful recreation of the Apollo healthcare platform interface, demonstrating attention to detail in UI/UX design.",
    technologies: ["HTML", "CSS"],
    image: "https://images.apollo247.in/images/pharmacy_logo.svg?tr=q-70,w-100,dpr-2,c-at_max",
    github: "https://github.com/shubhamiscodding/apolloclone",
    deployed: "https://apolloclone.onrender.com",
    color: "bg-purple-50 dark:bg-purple-950/20",
    logo: "https://images.apollo247.in/images/pharmacy_logo.svg?tr=q-70,w-100,dpr-2,c-at_max",
    type: "development"
  },
  {
    id: 4,
    name: "Youtube Clone",
    description: "A feature-rich YouTube clone that implements core functionalities using React and external APIs.",
    technologies: ["React", "API Integration"],
    image: "https://media2.salon.com/2025/02/youtube_logo_is_displayed_on_a_mobile_phone_1246972841.jpg",
    github: "https://github.com/shubhamiscodding/spotify-with-react/tree/main/you-vite-react",
    deployed: "https://youtube-frontend-ch16.onrender.com",
    color: "bg-red-50 dark:bg-red-950/20",
    logo: "https://media2.salon.com/2025/02/youtube_logo_is_displayed_on_a_mobile_phone_1246972841.jpg",
    type: "development"
  },
];

const figmaProjects = [
  {
    id: 1,
    name: "Finctrl",
    description: "A sleek Figma prototype for a financial management tool with a simple and intuitive UI.",
    technologies: ["Figma", "Simple UI"],
    image: "https://res.cloudinary.com/dqhn4dq02/image/upload/v1741248835/hudrwpm8ah1hnlfo0ahm.png",
    figmaLink: "https://www.figma.com/proto/DNBtQzukvRqvlJOR15WNiD/FINAL-PROJECT?node-id=165-316&t=IJSgkeDiJ1yPqsuJ-1",
    color: "bg-indigo-50 dark:bg-indigo-950/20",
    logo: "https://res.cloudinary.com/dqhn4dq02/image/upload/v1741248835/hudrwpm8ah1hnlfo0ahm.png",
    type: "figma"
  },
  {
    id: 2,
    name: "Smellwell",
    description: "A Figma design for a fragrance brand landing page, featuring prototyping and a clean UI.",
    technologies: ["Figma", "Simple UI", "Prototyping"],
    image: "https://imgs.search.brave.com/ELfHBTs87TF2P24kqZI3_46dZHTAEFr2ute2byxK3Zw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bmFtZWJyYW5kc3Bl/cmZ1bWUuY29tL2lt/YWdlcy93ZWxjb21l/LmpwZw",
    figmaLink: "https://www.figma.com/proto/9tFxecNpUhwc9yXIunCS2P/something-like-cloning?page-id=218%3A73&node-id=227-440&viewport=588%2C159%2C0.11&t=IH2rnykLPCUofh1R-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=227%3A440",
    color: "bg-pink-50 dark:bg-pink-950/20",
    logo: "https://imgs.search.brave.com/ELfHBTs87TF2P24kqZI3_46dZHTAEFr2ute2byxK3Zw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bmFtZWJyYW5kc3Bl/cmZ1bWUuY29tL2lt/YWdlcy93ZWxjb21l/LmpwZw",
    type: "figma"
  },
  {
    id: 3,
    name: "Cricknews",
    description: "A Figma prototype for a cricket news platform with interactive elements.",
    technologies: ["Figma", "Prototyping"],
    image: "https://imgs.search.brave.com/hvUAlclO2Pq5ixG3UC93dXKraejWOu-SLSrSbuk9MzE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/LmNvbS9pbWFnZS1j/ZG4vaW1hZ2VzL2t0/czkyOHBkL3Byb2R1/Y3Rpb24vNzI5ZWYy/OTliNjI4ZTZmNDBk/ODViMmI2YWM2OWEy/ZWMyNTE2MmYwZi03/MzF4NzMxLnBuZz93/PTEwODAmcT03MiZm/bT13ZWJw",
    figmaLink: "https://www.figma.com/proto/9tFxecNpUhwc9yXIunCS2P/something-like-cloning?node-id=90-400&t=uwCXGdlQ3AxLspQy-1",
    color: "bg-blue-50 dark:bg-blue-950/20",
    logo: "https://imgs.search.brave.com/hvUAlclO2Pq5ixG3UC93dXKraejWOu-SLSrSbuk9MzE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/LmNvbS9pbWFnZS1j/ZG4vaW1hZ2VzL2t0/czkyOHBkL3Byb2R1/Y3Rpb24vNzI5ZWYy/OTliNjI4ZTZmNDBk/ODViMmI2YWM2OWEy/ZWMyNTE2MmYwZi03/MzF4NzMxLnBuZz93/PTEwODAmcT03MiZm/bT13ZWJw",
    type: "figma"
  },
  {
    id: 4,
    name: "Instagram",
    description: "A Figma recreation of Instagram's interface with prototyping features.",
    technologies: ["Figma", "Prototyping"],
    image: "https://imgs.search.brave.com/gPZT1daGnqAjIB8yW5fG0cUuGqNhb3ZbYQqVY8Gy6S8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi85Lzk1L0lu/c3RhZ3JhbV9sb2dv/XzIwMjIuc3ZnLzIy/MHB4LUluc3RhZ3Jh/bV9sb2dvXzIwMjIu/c3ZnLnBuZw",
    figmaLink: "https://www.figma.com/proto/9tFxecNpUhwc9yXIunCS2P/something-like-cloning?node-id=43-87&t=uwCXGdlQ3AxLspQy-1",
    color: "bg-purple-50 dark:bg-purple-950/20",
    logo: "https://imgs.search.brave.com/gPZT1daGnqAjIB8yW5fG0cUuGqNhb3ZbYQqVY8Gy6S8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi85Lzk1L0lu/c3RhZ3JhbV9sb2dv/XzIwMjIuc3ZnLzIy/MHB4LUluc3RhZ3Jh/bV9sb2dvXzIwMjIu/c3ZnLnBuZw",
    type: "figma"
  },
  {
    id: 5,
    name: "One Page Social Media Unique Design",
    description: "A unique one-page social media design created in Figma with a creative layout.",
    technologies: ["Figma"],
    image: "https://res.cloudinary.com/dqhn4dq02/image/upload/v1740113499/hinsjwtehr2aoxyj0f0s.png",
    figmaLink: "https://www.figma.com/proto/1rN6JDvA6MVeTwyABaoaHO/EXAM-BUT-UNIQE-IDEA?page-id=0%3A1&node-id=2-2&p=f&viewport=500%2C484%2C0.63&t=YXlQOTdePAZgLyKv-1&scaling=min-zoom&content-scaling=fixed",
    color: "bg-teal-50 dark:bg-teal-950/20",
    logo: "https://res.cloudinary.com/dqhn4dq02/image/upload/v1740113499/hinsjwtehr2aoxyj0f0s.png",
    type: "figma"
  },
];

// Project Showcase (Carousel Style)
const ProjectShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [category, setCategory] = useState("development");

  const activeProjects = category === "development" ? projects : figmaProjects;

  const slideVariants = {
    enter: (direction) => ({
      zIndex: 0,
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = useCallback(
    (newDirection) => {
      setDirection(newDirection);
      setCurrentIndex((prevIndex) =>
        (prevIndex + newDirection + activeProjects.length) % activeProjects.length
      );
    },
    [activeProjects]
  );

  useEffect(() => {
    setCurrentIndex(0);
  }, [category]);

  useEffect(() => {
    const allProjects = [...projects, ...figmaProjects];
    allProjects.forEach((project) => {
      const img = new Image();
      img.src = project.image;
      img.onerror = () => {
        img.src = placeholderImage;
      };
    });
  }, []);

  return (
    <div className="max-w-sm md:max-w-4xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-20 py-20">
      <h2 className="text-3xl font-bold text-center mb-8 text-black dark:text-white">Carousel Showcase</h2>
      <div className="flex justify-center mb-12">
        <div className="inline-flex rounded-xl bg-gray-100 dark:bg-neutral-800 p-1 shadow-lg w-screen">
          <motion.button
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 w-[50%] ${category === "development"
              ? "bg-white dark:bg-neutral-900 text-blue-600 dark:text-blue-400 shadow-md"
              : "text-gray-600 dark:text-neutral-400 hover:text-gray-800 dark:hover:text-neutral-200"
              }`}
            onClick={() => setCategory("development")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Development
          </motion.button>
          <motion.button
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 w-[50%] ${category === "figma"
              ? "bg-white dark:bg-neutral-900 text-purple-600 dark:text-purple-400 shadow-md"
              : "text-gray-600 dark:text-neutral-400 hover:text-gray-800 dark:hover:text-neutral-200"
              }`}
            onClick={() => setCategory("figma")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Figma Designs
          </motion.button>
        </div>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <div className="relative h-80 w-full">
            {activeProjects.map((project, index) => {
              const offset = ((index - currentIndex + activeProjects.length) % activeProjects.length);
              const isActive = offset === 0;
              const zIndex = activeProjects.length - Math.abs(offset);

              return (
                <motion.div
                  key={project.id}
                  className="absolute inset-0 origin-bottom"
                  style={{
                    zIndex,
                    opacity: isActive ? 1 : 0.7,
                  }}
                  animate={{
                    scale: isActive ? 1 : 0.95,
                    rotateZ: offset * (Math.random() > 0.5 ? 3 : -3),
                    translateZ: isActive ? 0 : -100,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                >
                  <img
                    src={project.image || placeholderImage}
                    alt={project.name}
                    className="h-full w-full rounded-3xl cover bg-black"
                    draggable="false"
                    onError={(e) => (e.target.src = placeholderImage)}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={`${category}-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold dark:text-white text-black">
              {activeProjects[currentIndex].name}
            </h3>
            <p className="text-lg text-gray-500 mt-8 dark:text-neutral-300">
              {activeProjects[currentIndex].description.split(" ").map((word, i) => (
                <motion.span
                  key={`${category}-${currentIndex}-${i}`}
                  className="inline-block"
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  {word}
                </motion.span>
              ))}
            </p>
            <div className="flex gap-4 mt-4">
              {category === "development" && (
                <>
                  <motion.a
                    href={activeProjects[currentIndex].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center justify-center px-8 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                    <span className="relative">GitHub</span>
                  </motion.a>
                  <motion.a
                    href={activeProjects[currentIndex].deployed}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center justify-center px-8 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                    <span className="relative">Visit Now</span>
                  </motion.a>
                </>
              )}
              {category === "figma" && (
                <motion.a
                  href={activeProjects[currentIndex].figmaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center justify-center px-8 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-purple-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                  <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                  <span className="relative">Figma Prototype</span>
                </motion.a>
              )}
            </div>
          </motion.div>

          <div className="flex gap-4 pt-12 md:pt-0">
            <motion.button
              className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
              onClick={() => paginate(-1)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous project"
            >
              <ArrowLeft className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
            </motion.button>
            <motion.button
              className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
              onClick={() => paginate(1)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next project"
            >
              <ArrowRight className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="min-h-screen">
      <ProjectShowcase />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      </div>
    </div>
  );
};

export default Projects;