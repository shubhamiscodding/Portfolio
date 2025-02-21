import { useNavigate } from "react-router-dom"

const Hero = () => {
  const navigate = useNavigate()
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="bg-black text-white py-16 flex flex-col md:flex-row items-center justify-center md:space-x-8 lg:space-x-12 px-4 md:px-8 pt-24 md:pt-32 lg:pt-52">
      {/* Profile Image */}
      <img
        src="https://res.cloudinary.com/dqhn4dq02/image/upload/v1740113553/jm7lzaefxenoz27qzxfz.jpg"
        alt="Profile"
        className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover transform 
        transition-transform duration-300 hover:scale-105 rounded-full mb-8 md:mb-0"
      />

      {/* Static Text */}
      <div className="text-center md:text-left max-w-md lg:max-w-lg">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">
          I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Shubham Modi.
          </span>
        </h1>

        <p className="mt-4 text-base md:text-lg text-gray-300">
          I specialize in building modern and responsive web applications. <br className="hidden md:inline" />I am a
          MERN Stack Developer.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-8">
          {/* Navigate to Contact Page */}
          <button
            onClick={handleScrollToContact}
            className="bg-gray-800 text-white transform transition-transform duration-300 hover:scale-110 px-5 py-3 rounded-md shadow-md w-full sm:w-auto"
          >
            Contact With Me
          </button>

          {/* Navigate to Resume Page */}
          <button
            onClick={() => navigate("/resume")}
            className="bg-green-800 text-white transform transition-transform duration-300 hover:scale-110 px-5 py-3 rounded-md shadow-md w-full sm:w-auto"
          >
            Resume
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero