import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero relative h-screen flex items-center justify-center bg-base-200">
        <h1 className="text-5xl font-bold text-gray-150 animate-fadeIn">
          Callan's Kickass Page
        </h1>
      </div>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-fixed bg-cover bg-[url('/path-to-image.jpg')] bg-center"
      >
        <div className="container mx-auto text-center bg-opacity-10 bg-blue-50 p-10 rounded-lg">
          <h2 className="text-5xl font-bold text-white mb-10 animate-slideUp">
            About Me
          </h2>
          <p className="text-xl text-silver max-w-2xl mx-auto mb-8">
            I&apos;m a software engineer building scalable solutions.
          </p>
          {/* Add a Call-to-Action Button */}
          <Link href="/portfolio" className="btn btn-black mt-4">
            View My Work
          </Link>
        </div>
      </section>

      {/* Additional Section (optional) */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 animate-slideUp">
            My Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-8">
            <div className="card bg-base-100 shadow-lg p-6">
              <h3 className="text-2xl font-semibold">JavaScript</h3>
              <p>Building interactive web applications.</p>
            </div>
            <div className="card bg-base-100 shadow-lg p-6">
              <h3 className="text-2xl font-semibold">React</h3>
              <p>Creating dynamic user interfaces with React.</p>
            </div>
            <div className="card bg-base-100 shadow-lg p-6">
              <h3 className="text-2xl font-semibold">Python</h3>
              <p>Developing scalable backend solutions.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
