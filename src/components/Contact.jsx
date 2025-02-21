import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="w-screen max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl ">
      <h1 className="bg-black text-4xl text-center w-screen" id="contact">
        Connect with me
      </h1>
      <div className="flex flex-wrap gap-6 justify-center bg-black py-6 w-screen">
        <a
          target="_blank"
          href="https://x.com/shubham_modi_cg"
          className="text-gray-400 hover:text-blue-400 transition-transform transform hover:scale-110"
        >
          <FaTwitter className="text-3xl w-10 h-10" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/shubham-modi-cg/"
          className="text-gray-400 hover:text-blue-600 transition-transform transform hover:scale-110"
        >
          <FaLinkedin className="text-3xl w-10 h-10" />
        </a>
        <a
          target="_blank"
          href="https://github.com/shubhamiscodding"
          className="text-gray-400 hover:text-white transition-transform transform hover:scale-110"
        >
          <FaGithub className="text-3xl w-10 h-10" />
        </a>
      </div>
    </div>
  );
}
