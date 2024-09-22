import React from 'react';
import HeroImage from '../assets/img.png';

const Hero = () => {
  return (
    <div className="bg-black text-white text-center py-16">
      <img
        src={HeroImage}
        alt="Profile"
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Bhuvaneswari K
        </span>
        , MTech Integrated at VIT Vellore
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        Eager to apply coding skills to real-world projects and collaborate on innovative software solutions.
      </p>
      <div className="mt-8 space-x-4">
        <button
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          <a href="https://www.linkedin.com/in/bhuvaneswari-kalavakollu-9bb774247/">
              Connect Me
            </a>
        </button>
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
  );
};

export default Hero;
