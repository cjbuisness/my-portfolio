import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-11 bg-fixed bg-cover bg-[url('/path-to-image.jpg')]">
      <div className="container mx-auto text-center p-6 bg-opacity-90 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-5xl font-bold text-white mb-10 animate-slideUp">About Me</h2>
        <p className="text-xl text-silver max-w-2xl mx-auto mb-4">
          I&apos;m a dedicated software engineer, currently employed in the tech industry while pursuing my degree as a senior in Computer Science. 
          With a passion for technology and a love for problem-solving, I strive to build scalable solutions that make a difference.
        </p>
        <p className="text-xl text-silver max-w-2xl mx-auto mb-4">
          My journey in software development has equipped me with a diverse skill set. I have hands-on experience with various technologies, 
          including CSS, HTML, Git, GitHub, MySQL, Python, Java, JavaScript, TypeScript, C, Node.js, Next.js, React.js, and Tailwind CSS. 
          I'm also comfortable working with data formats such as JSON, YAML, and CSV, as well as scripting languages like .bat and .vbs.
        </p>
        <p className="text-xl text-silver max-w-2xl mx-auto mb-4">
          As I navigate my career, I enjoy exploring new tools and frameworks, always looking for ways to enhance my skills and stay updated with industry trends. 
          Whether it's collaborating on team projects or working independently, I thrive on challenges that allow me to innovate and create effective solutions.
        </p>
        <p className="text-xl text-silver max-w-2xl mx-auto mb-4">
          Outside of coding, I love contributing to open-source projects, attending tech meetups, and sharing my knowledge through mentoring fellow students. 
          I believe that learning is a continuous journey, and I'm excited about the opportunities that lie ahead as I grow both personally and professionally.
        </p>
        <p className="text-xl text-silver max-w-2xl mx-auto mb-6">
          Thank you for visiting my portfolio! Feel free to reach out if you'd like to connect or collaborate on exciting projects.
        </p>

        {/* Skills Section */}
        <h3 className="text-3xl font-bold text-white mb-6">Technical Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Node.js", "Python", "Java", "MySQL", "Tailwind CSS", "Git", "GitHub"].map(skill => (
            <div key={skill} className="bg-gray-700 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 text-center">
              <h4 className="text-lg font-semibold text-white">{skill}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
