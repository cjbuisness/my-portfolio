const Footer = () => {
    return (
      <footer className="bg-gray-900 text-silver py-6 mt-10">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} My Portfolio. All Rights Reserved.</p>
          <p>
            Built with <span className="text-white">Next.js</span> & <span className="text-white">Tailwind CSS</span>
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  