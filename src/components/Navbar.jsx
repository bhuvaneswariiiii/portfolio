import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
      <div className="container py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Bhuna</div>
        
        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Links for Desktop */}
        <div className="space-x-6 hidden md:flex">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About Me</a>
          <a href="#service" className="hover:text-gray-400">Skills</a>
          <a href="#project" className="hover:text-gray-400">Projects</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>

        <button className="bg-gradient-to-r text-white hidden md:inline-block
        transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          <a
          href="/sd.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Resume
        </a>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4 mt-4">
            <a href="#home" className="hover:text-gray-400">Home</a>
            <a href="#about" className="hover:text-gray-400">About Me</a>
            <a href="#service" className="hover:text-gray-400">Skills</a>
            <a href="#project" className="hover:text-gray-400">Projects</a>
            <a href="#contact" className="hover:text-gray-400">Contact</a>
            <a
          href="/sd.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Resume
        </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
