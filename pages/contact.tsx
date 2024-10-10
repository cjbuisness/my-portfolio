import React from 'react';

const Contact = () => {
  return (
    <div>
      {/* Contact Section */}
      <section id="contact" className="py-16 bg-fixed bg-cover bg-[url('/path-to-image.jpg')]">
        <div className="container mx-auto text-center">
          <h2 className="text-6xl font-bold text-white mb-8 animate-slideUp">Get in Touch</h2> 
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-4 animate-fadeIn">
            Whether you have a question, an idea, or just want to say hi, feel free to reach out.
          </p>
          <p className="text-2xl font-semibold text-black hover:text-gray-400 transition duration-300 ease-in-out animate-slideUp">
            <a href="mailto:cjbusinessadventure@gmail.com">cjbusinessadventure@gmail.com</a>
          </p>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-12 bg-gray-900 text-center">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-white mb-6 animate-slideUp">Let's Connect</h3>
          <div className="flex justify-center space-x-6 animate-fadeIn">
            <a href="www.linkedin.com/in/callan-hercules-1a9777189" className="text-gray-300 hover:text-teal-300 transition duration-300 ease-in-out">LinkedIn</a>
            <a href="https://github.com/cjbuisness" className="text-gray-300 hover:text-teal-300 transition duration-300 ease-in-out">GitHub</a>
            <a href="https://twitter.com" className="text-gray-300 hover:text-teal-300 transition duration-300 ease-in-out">Twitter</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
