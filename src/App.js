import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import WhyChoose from './components/WhyChoose';
import IndustryExperience from './components/IndustryExperience';
import PortfolioProjects from './components/PortfolioProjects';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './components/Responsive.css'

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Stats />
      <WhyChoose />
      <IndustryExperience />
      <PortfolioProjects />
      <Testimonials />
      <Footer />
      {/* Other sections will go here */}
    </div>
  );
}

export default App;
