import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-fixed bg-cover bg-[url('/path-to-image.jpg')]">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold text-white mb-10 animate-slideUp">About Me</h2>
        <p className="text-xl text-silver max-w-2xl mx-auto">
          I&apos;m a software engineer building scalable solutions for your broke ass
        </p>
      </div>
    </section>
  );
};

export default About;
