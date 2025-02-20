import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <h1 className="bg-black text-4xl" id="contact">connect with me </h1>
      <div className="flex gap-6 justify-center bg-black py-6">
        <a target="_blank"
          href="https://x.com/shubham_modi_cg"
          className="text-gray-400 hover:text-blue-400 transition-transform transform hover:scale-110"
        >
          <FaTwitter className="text-3xl" />
        </a>
        <a target="_blank"
          href="https://www.linkedin.com/in/shubham-modi-cg/"
          className="text-gray-400 hover:text-blue-600 transition-transform transform hover:scale-110"
        >
          <FaLinkedin className="text-3xl" />
        </a>
        <a target="_blank"
          href="https://github.com/shubhamiscodding"
          className="text-gray-400 hover:text-white transition-transform transform hover:scale-110"
        >
          <FaGithub className="text-3xl" />
        </a>
      </div>
    </>
  );
}
