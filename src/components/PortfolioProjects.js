import React from 'react';
import './PortfolioProjects.css';
import PortfolioProjects1 from './assets/PortfolioProjects.PNG'

function PortfolioProjects() {
  return (
    <section className="portfolio-section">
      <div className="portfolio-image">
        <img src={PortfolioProjects1} alt="Portfolio projects dashboard" />
      </div>
      <div className="portfolio-content">
        <h2>Build Real Portfolio Projects</h2>
        <p>
          Work on data projects inspired by modern data teams—learn design, clean, and deliver data like a pro.
        </p>
        <ul>
          <li>Work on real data problems, not toy examples</li>
          <li>Build a portfolio that gets attention from employers</li>
        </ul>
      </div>
    </section>
  );
}

export default PortfolioProjects;
