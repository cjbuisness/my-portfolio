import { useEffect, useState } from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

const Portfolio = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/data/portfolio.json');
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        console.log("Fetched portfolio data:", data);
        if (data.projects && Array.isArray(data.projects)) {
          setProjects(data.projects);
        } else {
          console.error("Projects data is not an array or is undefined.");
        }
      } catch (error) {
        console.error('Error loading portfolio:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-darkGray text-white">
      <header className="py-11">
        <h1 className="text-5xl font-extrabold text-center mb-6 animate-fadeIn">
          My Projects
        </h1>
      </header>
      <section className="projects-section">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-8">
          {projects.length === 0 ? (
            <li className="text-center text-lg">No projects available.</li>
          ) : (
            projects.map((project, index) => (
              <li key={index} className="card bg-base-100 hover:shadow-2xl transition-all duration-300">
                <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                <p>{project.description}</p>
                <p className="text-sm text-teal-300">
                  {project.technologies.join(", ")}
                </p>
                <a href={project.link} className="btn btn-white mt-2">View Project</a>
              </li>
            ))
          )}
        </ul>
      </section>
    </div>
  );
};

export default Portfolio;
