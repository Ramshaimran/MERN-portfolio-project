import { useEffect, useState } from "react";
import axios from "axios";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">My Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col"
          >
            {/* Optional: Image */}
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            )}

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
              <p className="mt-4 text-gray-600 flex-1">{project.description}</p>

              {/* Technologies as tags */}
              {project.technologies && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              <a
                href={project.link || "#"}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block bg-purple-800 hover:bg-purple-800 text-white py-2 px-4 rounded-xl text-center font-semibold transition-colors"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
