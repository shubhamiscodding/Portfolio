import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { ArrowLeft } from "lucide-react"; // Import icon

const Resume = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 flex items-center bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition duration-300"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Portfolio
      </button>

      {/* Resume Heading */}
      <h1 className="text-4xl font-bold mb-6">My Resume</h1>

      {/* Resume PDF Embed */}
      <iframe
        src="https://res.cloudinary.com/dqhn4dq02/image/upload/v1740114838/in3byxp5pcwlingjsuby.jpg" // Ensure resume.pdf is in the public folder
        className="w-full max-w-4xl h-[600px] border rounded-lg shadow-lg"
        title="Resume"
      ></iframe>

      {/* Download Button */}
      <a
        href="https://drive.google.com/file/d/1oklhsTdUrqervNohScwVhvXMESaEZn81/view"
        download="https://drive.google.com/file/d/1oklhsTdUrqervNohScwVhvXMESaEZn81/view"
        className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition duration-300"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
