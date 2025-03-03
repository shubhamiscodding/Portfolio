import { motion } from "framer-motion"
import { Code, Database, Globe, Palette, Server, Braces, Layout, Cpu, FigmaIcon, GitBranch } from "lucide-react"

function SkillCard({ name, icon: Icon, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-blue-500/10"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-green-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      ></motion.div>

      <div className="relative flex flex-col items-center text-center">
        <motion.div
          className="p-4 bg-gray-700/50 rounded-2xl mb-4 group-hover:bg-blue-500/10 transition-colors duration-300"
          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="w-12 h-12 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
        </motion.div>

        <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300 mb-2">
          {name}
        </h3>

        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{description}</p>
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const skills = [
    {
      name: "React",
      icon: Code,
      description: "Building modern web applications with React and its ecosystem",
    },
    {
      name: "JavaScript",
      icon: Braces,
      description: "Advanced JavaScript development including ES6+ features",
    },
    {
      name: "Node.js",
      icon: Server,
      description: "Server-side JavaScript runtime and backend development",
    },
    {
      name: "MongoDB",
      icon: Database,
      description: "NoSQL database design and implementation",
    },
    {
      name: "Tailwind CSS",
      icon: Palette,
      description: "Utility-first CSS framework for modern designs",
    },
    {
      name: "HTML5",
      icon: Layout,
      description: "Semantic markup and modern HTML features",
    },
    {
      name: "CSS3",
      icon: Globe,
      description: "Advanced styling and responsive design",
    },
    {
      name: "C++",
      icon: Cpu,
      description: "Object-oriented programming and algorithms",
    },
    {
      name: "Figma",
      icon: FigmaIcon,
      description: "UI/UX design and prototyping",
    },
    {
      name: "Git & Github & Postman",
      icon: GitBranch,
      description: "Version control and API testing",
    },
    {
      name: "Deployment",
      icon: Server,
      description: "Hosting and deployment of applications",
    },
  ]

  return (
    <section className="relative bg-gradient-to-b from-black via-gray-900 to-gray-800 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-blue-500 to-green-400 opacity-5"
              initial={{
                x: Math.random() * 100,
                y: Math.random() * 100,
                scale: Math.random() * 0.3 + 0.2,
              }}
              animate={{
                y: [null, Math.random() * 100],
                x: [null, Math.random() * 100],
              }}
              transition={{
                duration: Math.random() * 15 + 15,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              style={{
                width: `${Math.random() * 80 + 40}px`,
                height: `${Math.random() * 80 + 40}px`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-4 py-1 bg-gradient-to-r from-blue-500/10 to-green-400/10 rounded-full mb-6"
          >
            <span className="text-gray-300 font-medium">My Skillset</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400">Expertise</span>
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            A comprehensive overview of my technical skills and tools I work with.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              description={skill.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}