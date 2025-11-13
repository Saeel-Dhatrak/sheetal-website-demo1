import React from 'react';
import './Stats.css';

function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-cards">
        <div className="stat-card">
          <div className="stat-number">200,000+</div>
          <div className="stat-label">YouTube subscribers</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">75,000+</div>
          <div className="stat-label">Newsletter readers</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">500,000+</div>
          <div className="stat-label">Lesson views</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">17+</div>
          <div className="stat-label">Industry partners</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">350+</div>
          <div className="stat-label">Success stories</div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
