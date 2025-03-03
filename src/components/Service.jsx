
import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ChevronUp, Code, Database, Server, GitBranch } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "Building responsive and interactive user interfaces with modern frameworks like React, Next.js, and Vue. Creating pixel-perfect designs with CSS, Tailwind, and other styling solutions.",
    icon: <Code />,
    color: "from-blue-500 to-blue-400",
  },
  {
    id: 2,
    title: "Backend Development",
    description:
      "Developing robust server-side logic with Node.js, Express, and other frameworks. Creating RESTful APIs and implementing business logic for scalable applications.",
    icon: <Server />,
    color: "from-green-500 to-green-400",
  },
  {
    id: 3,
    title: "Database & Deployment",
    description:
      "Managing SQL and NoSQL databases like MongoDB, PostgreSQL, and Firebase. Deploying applications to cloud platforms including AWS, Vercel, and Netlify.",
    icon: <Database />,
    color: "from-blue-500 to-green-400",
  },
  {
    id: 4,
    title: "Tools & Version Control",
    description:
      "Using essential development tools like Git, GitHub, and CI/CD pipelines. Implementing best practices for collaboration and code quality.",
    icon: <GitBranch />,
    color: "from-green-400 to-blue-500",
  },
]

const Service = () => {
  const [selectedService, setSelectedService] = useState(null)

  const handleServiceClick = (id) => {
    setSelectedService(selectedService === id ? null : id)
  }

  return (
    <section
      id="service"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-gray-800 py-20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(10)].map((_, i) => (
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

      <div className="container mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-4 py-1 bg-gradient-to-r from-blue-500/10 to-green-400/10 rounded-full mb-6"
          >
            <span className="text-gray-300 font-medium">What I Offer</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400">Services</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              className="relative"
            >
              <motion.div
                className={`relative bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl w-full h-full
                  transition-all duration-300 transform cursor-pointer border border-gray-700
                  hover:shadow-lg hover:shadow-blue-500/10 group
                  ${selectedService === service.id ? "border-opacity-0" : "border-opacity-50"}`}
                onClick={() => handleServiceClick(service.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Glowing border effect when selected */}
                {selectedService === service.id && (
                  <motion.div
                    className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-green-400 rounded-xl blur-sm opacity-70 -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    exit={{ opacity: 0 }}
                  />
                )}

                <div className="flex justify-between items-start -mt-25">
                  <motion.div
                    className={`p-3 rounded-lg bg-gradient-to-r ${service.color} text-white`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {service.icon}
                  </motion.div>

                  <div className="text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400">
                    {service.id.toString().padStart(2, "0")}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-green-400 transition-all duration-300">
                  {service.title}
                </h3>

                <motion.div
                  className="overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: selectedService === service.id ? "auto" : 0,
                    opacity: selectedService === service.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-300 text-base mb-4">{service.description}</p>

                  <motion.button
                    className="text-sm font-medium px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600/20 to-green-500/20 text-white hover:from-blue-600/30 hover:to-green-500/30 transition-all flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {selectedService === service.id ? (
                      <>
                        Hide Details <ChevronUp size={16} />
                      </>
                    ) : (
                      <>
                        View Details <ChevronDown size={16} />
                      </>
                    )}
                  </motion.button>
                </motion.div>

                {selectedService !== service.id && (
                  <motion.div
                    className="absolute bottom-6 right-6"
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <ChevronDown size={20} className="text-gray-400" />
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Service
