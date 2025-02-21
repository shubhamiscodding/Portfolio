import React, { useState } from "react";

const services = [
  {
    id: 1,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
  },
  {
    id: 2,
    title: "Backend Development",
    description: "Developing robust server-side logic and databases.",
  },
  {
    id: 3,
    title: "Database & Deployment",
    description: "Managing databases and deploying applications.",
  },
  {
    id: 4,
    title: "Tools & Version Control",
    description: "Using essential tools for development and collaboration.",
  },
];

const Service = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (id) => {
    setSelectedService(selectedService === id ? null : id); 
  };

  return (
    <div className="bg-black text-white py-20 w-full" id="service">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 w-full">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 tracking-wide text-gray-100">
          My Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className={`relative bg-gray-900 p-6 rounded-lg w-full h-auto
                transition-all duration-500 transform hover:scale-105 hover:shadow-lg 
                cursor-pointer border border-gray-700 ${selectedService === service.id ? "border-green-500" : ""}`}
              onClick={() => handleServiceClick(service.id)}
            >
              <div className="text-right text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-400">
                {service.id}
              </div>

              <h3 className="mt-2 text-xl sm:text-2xl font-bold text-gray-100">
                {service.title}
              </h3>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out w-full
                  ${selectedService === service.id ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"}`}
              >
                <p className="mt-2 text-gray-300 text-base sm:text-lg">{service.description}</p>

                
                <button className="mt-4 text-green-400 hover:text-blue-400 transition-all">
                  Read Less
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;