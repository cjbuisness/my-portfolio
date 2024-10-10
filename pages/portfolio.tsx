import { useState, useEffect } from 'react';

// Define the interface for a project
interface Project {
  title: string;
  description: string;
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
        setProjects(data.projects);
      })
      .catch((err) => console.error('Error loading portfolio:', err));
  }, []);

  return (
    <div className="min-h-screen bg-darkGray text-white">
      {/* Header */}
      <header className="py-12">
        <h1 className="text-5xl font-extrabold text-center mb-6 animate-fadeIn">
          My Projects
        </h1>
      </header>

      {/* Projects Section */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-8">
        {projects.map((project, index) => (
          <li key={index} className="bg-silver text-darkGray p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
            <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
