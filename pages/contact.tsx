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
          <p className="text-2xl font-semibold text-gray-300 hover:text-gray-400 transition duration-300 ease-in-out animate-slideUp">
            <a href="mailto:cjbusinessadventure@gmail.com">cjbusinessadventure@gmail.com</a>
          </p>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-12 bg-gray-900 text-center">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-white mb-6 animate-slideUp">Let's Connect</h3>
          <div className="flex justify-center space-x-6 animate-fadeIn">
            <a href="https://www.linkedin.com/in/callan-hercules-1a9777189" className="text-gray-300 hover:text-teal-300 transition duration-300 ease-in-out">LinkedIn</a>
            <a href="https://github.com/cjbuisness" className="text-gray-300 hover:text-teal-300 transition duration-300 ease-in-out">GitHub</a>
            <a href="https://twitter.com" className="text-gray-300 hover:text-teal-300 transition duration-300 ease-in-out">Twitter</a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold text-white mb-8 animate-slideUp">Contact Form</h3>
          <form className="bg-gray-700 p-8 rounded-lg shadow-lg max-w-md mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              className="block w-full p-3 mb-4 bg-gray-600 text-gray-200 rounded-md focus:outline-none focus:ring focus:ring-gray-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="block w-full p-3 mb-4 bg-gray-600 text-gray-200 rounded-md focus:outline-none focus:ring focus:ring-gray-500"
              required
            />
            <textarea
              placeholder="Your Message"
              className="block w-full p-3 mb-4 bg-gray-600 text-gray-200 rounded-md focus:outline-none focus:ring focus:ring-gray-500"
              rows={4} // Corrected to pass a number
              required
            ></textarea>
            <button type="submit" className="w-full bg-silver text-darkGray py-2 rounded-md shadow-md transition duration-200 ease-in-out hover:bg-gray-600 transform scale-105">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
