import React from "react";

const Home = () => {
  return (
    <div>
      {/* Logo at the top */}
      <header className="flex items-center p-4 bg-white shadow-md">
        <img src="/logo.png" alt="Logo" className="h-12" />
        <h1 className="text-2xl font-bold ml-4">SECURITY & ALLIED SERVICES</h1>
      </header>

      {/* Banner with overlay text */}
      <div className="relative mt-4">
        {/* <img src="/banner.png" alt="Banner" className="w-full h-auto" /> */}
        <img src="/banner.png" alt="Banner" className="w-full h-auto" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold text-center drop-shadow-lg">
          CORPORATE SECURITY SERVICES
        </div>
      </div>
    </div>
  );
};

export default Home;
