import React from 'react';
import './IndustryExperience.css';
import SheetalImage1 from './assets/sheetal-website-image.jpg'

function IndustryExperience() {
  return (
    <section className="industry-section">
      <div className="industry-content">
        <h2>Built From 7+ Years of Industry Work</h2>
        <p>
          With 7+ years in data roles at top companies, I've worked on end-to-end projects, building tools and mentoring junior staff.
        </p>
        <ul>
          <li>Industry-relevant tools: Python, SQL, Tableau & more</li>
          <li>Build projects and portfolios that mirror real companies</li>
        </ul>
      </div>
      <div className="industry-image">
        <img src={SheetalImage1} alt="Industry experience screenshot" />
      </div>
    </section>
  );
}

export default IndustryExperience;
