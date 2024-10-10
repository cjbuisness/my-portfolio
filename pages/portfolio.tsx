import { useState, useEffect } from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

const Portfolio = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('/data/portfolio.json') 
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched portfolio data:", data);
        if (data.projects && Array.isArray(data.projects)) {
          setProjects(data.projects);
        } else {
          console.error("Projects data is not an array or is undefined.");
        }
      })
      .catch((err) => console.error('Error loading portfolio:', err));
  }, []);
    

  return (
    <div className="min-h-screen bg-darkGray text-white">
      {/* Header */}
      <header className="py-11">
        <h1 className="text-5xl font-extrabold text-center mb-6 animate-fadeIn">
          My Projects
        </h1>
      </header>

      {/* Projects Section */}
      <section className="projects-section">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-8">
          {projects.length === 0 ? (
            <li className="text-center text-lg">No projects available.</li>
          ) : (
            projects.map((project, index) => (
              <li key={index} className="card hover:shadow-2xl">
                <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                <p>{project.description}</p>
                {/* Optional: List technologies */}
                <p className="text-sm text-teal-300">
                  {project.technologies.join(", ")}
                </p>
                {/* Optional: Link to project */}
                <a href={project.link} className="text-teal-300 underline mt-2 block">View Project</a>
              </li>
            ))
          )}
        </ul>
      </section>
    </div>
  );
};

export default Portfolio;
