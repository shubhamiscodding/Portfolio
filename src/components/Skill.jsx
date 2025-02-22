import React from "react";
import { 
  Code, 
  Database, 
  Globe, 
  Palette, 
  Server,
  Braces,
  FileCode2,
  Layout,
  Cpu,
  Figma as FigmaIcon,
  GitBranch
} from "lucide-react";

function SkillCard({ name, icon: Icon, description }) {
  return (
    <div className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700/50 hover:border-teal-500/50 transition-all duration-300 hover:shadow-teal-500/10">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative flex flex-col items-center text-center">
        <div className="p-4 bg-gray-700/50 rounded-2xl mb-4 group-hover:bg-teal-500/10 transition-colors duration-300">
          <Icon className="w-12 h-12 text-teal-400 group-hover:text-teal-300 transition-colors duration-300" />
        </div>
        
        <h3 className="text-xl font-semibold text-white group-hover:text-teal-300 transition-colors duration-300 mb-2">
          {name}
        </h3>
        
        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Skills() {
  const skills = [
    {
      name: "React",
      icon: Code,
      description: "Building modern web applications with React and its ecosystem"
    },
    {
      name: "JavaScript",
      icon: Braces,
      description: "Advanced JavaScript development including ES6+ features"
    },
    {
      name: "Node.js",
      icon: Server,
      description: "Server-side JavaScript runtime and backend development"
    },
    {
      name: "MongoDB",
      icon: Database,
      description: "NoSQL database design and implementation"
    },
    {
      name: "Tailwind CSS",
      icon: Palette,
      description: "Utility-first CSS framework for modern designs"
    },
    {
      name: "HTML5",
      icon: Layout,
      description: "Semantic markup and modern HTML features"
    },
    {
      name: "CSS3",
      icon: Globe,
      description: "Advanced styling and responsive design"
    },
    {
      name: "C++",
      icon: Cpu,
      description: "Object-oriented programming and algorithms"
    },
    {
      name: "Figma",
      icon: FigmaIcon,
      description: "UI/UX design and prototyping"
    },
    {
      name: "Git & Github & Postman",
      icon: GitBranch,
      description: "Version control and API testing"
    },
    {
      name: "Deployment",
      icon: Server,
      description: "Hosting and deployment of applications"
    }
  ];

  return (
    <section className="relative bg-black py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
            Technical Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and tools I work with.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <SkillCard 
              key={skill.name} 
              name={skill.name} 
              icon={skill.icon}
              description={skill.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}