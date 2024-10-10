import React from 'react';

const Contact = () => {
  return (
    <div>

      {/* About Section */}
      <section id="about" className="py-11 bg-fixed bg-cover bg-[url('/path-to-image.jpg')]">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-10 animate-slideUp">Contact Me!!</h2> 
          <p className="text-xl text-silver max-w-2xl mx-auto hover:text-gray-600 animate-slideUp">
            cjbusinessadventure@gmail.com
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
