import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/assets/hero-bg.jpg')` }}>
      <div className="bg-black bg-opacity-50 w-full h-full">
        <div className="max-w-6xl mx-auto px-4 py-24 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            LEADING CORPORATE AND INDUSTRIAL <span className="text-orange-500">SECURITY SERVICE</span>
          </h1>
          <p className="mt-4 text-lg font-medium">SECURING & ENSURING THE SAFETY OF EVERYTHING</p>
          <p className="mt-2 text-base max-w-3xl mx-auto">
            One-stop manpower security management services to suit all industrial and corporate security needs
          </p>
          <button className="mt-6 px-6 py-2 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition duration-300">
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
