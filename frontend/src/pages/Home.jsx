import { useEffect, useState } from "react";
import axios from "axios";
import { FaMapMarkerAlt, FaArrowRight, FaEnvelope } from "react-icons/fa";

export default function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects")
      .then(res => setProjects(res.data.slice(0, 2))) // show first 2 projects
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-50 text-gray-900">
      
      {/* Hero Section */}
      <section className="w-full max-w-6xl px-6 py-15 mx-auto flex flex-col md:flex-row items-start md:items-center gap-10">
        <div className="flex-1">
          <h1 className="text-6xl font-extrabold text-gray-900">Hello! I'm Ramsha Imran</h1>
          <div className="flex items-center mt-4 text-lg text-purple-800 gap-2">
            <span>Software Engineer</span>
            <FaMapMarkerAlt />
            <span>Pakistan,karachi</span>
          </div>
          <p className="mt-6 text-gray-700 max-w-xl">
           Enthusiastic and motivated Software Engineering graduate with hands-on experience in web and mobile development, gained through academic projects and teaching roles. Skilled in frontend and backend technologies, database management, and agile methodologies. Eager to contribute to a dynamic development environment, enhance technical skills, and support organizational growth.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/about"
              className="px-6 py-3 bg-purple-800 text-white font-semibold rounded-lg shadow hover:bg-purple-700 transition"
            >
              About
            </a>
           <button
    onClick={() => {
      const email = "ramshaimran8056@gmail.com"; // replace with your email
      navigator.clipboard.writeText(email)
        .then(() => alert(`Email copied: ${email}`))
        .catch((err) => console.error("Failed to copy email:", err));
    }}
    className="px-6 py-3 border border-purple-800 text-purple-800 font-semibold rounded-lg flex items-center gap-2 hover:bg-yellow-50 transition"
  >
    <FaEnvelope /> Copy mail
  </button>
          </div>
        </div>
        <div className="flex-1">
          <img
            src="src/assets/hero.jpg"
            alt="Hero"
            className="w-full rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Selected Work Section */}
     {/* Selected Work Section */}
<section className="w-full max-w-6xl px-6 pb-10 mx-auto">
  <div className="flex justify-between items-center mb-8">
    <h2 className="text-3xl font-semibold text-gray-900">My Projects</h2>
    <a
      href="/projects"
      className="flex items-center gap-2 text-purple-800 font-medium hover:underline"
    >
      View All <FaArrowRight />
    </a>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {projects.map((project, i) => (
      <div
        key={i}
        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition flex flex-col"
      >
        {/* Card content */}
        <div className="p-6 flex-1">
          <h3 className="text-xl font-semibold">{project.title}</h3>

        
          <p className="mt-2 text-gray-700">{project.description}</p>
        </div>

        {/* Fixed footer button */}
        <div className="p-6 ">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="w-full inline-block text-center px-4 py-2 bg-purple-800 text-white rounded-lg hover:bg-purple-700 transition"
          >
            View Project
          </a>
        </div>
      </div>
    ))}
  </div>
</section>

    </div>
  );
}
