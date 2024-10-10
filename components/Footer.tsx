import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Importing icons from react-icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-silver py-6 mt-10">
      <div className="container mx-auto text-center">
        <p className="mb-2">&copy; {new Date().getFullYear()} My Portfolio. All Rights Reserved.</p>
        <p className="mb-4">
          Built with <span className="text-white">Next.js</span> & <span className="text-white">Tailwind CSS</span>
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/cjbuisness"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-300 transition duration-300 ease-in-out"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/callan-hercules-1a9777189"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-300 transition duration-300 ease-in-out"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-300 transition duration-300 ease-in-out"
          >
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
