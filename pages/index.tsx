import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center bg-gradient-to-r from-darkGray to-silver">
        <h1 className="text-5xl font-bold text-white animate-fadeIn">Welcome to My Portfolio</h1>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 bg-fixed bg-cover bg-[url('/path-to-image.jpg')]">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-10 animate-slideUp">About Me</h2>
          <p className="text-xl text-silver max-w-2xl mx-auto">
            I&apos;m a software engineer building scalable solutions...
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
