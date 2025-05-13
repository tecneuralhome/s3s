import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WhyUsSection from './components/WhyUsSection';
import Footer from './components/Footer';
import './App.css'; 
// import FeaturesSection from './components/FeaturesSection';
function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      {/* <FeaturesSection />  */}
      <ServicesSection />
      <WhyUsSection />
      <Footer />
    </div>
  );
}

export default App;