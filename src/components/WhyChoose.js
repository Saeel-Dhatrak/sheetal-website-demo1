import React from 'react';
import './WhyChoose.css';
import StatsImages from './assets/Stats-Images.PNG'

function WhyChoose() {
  return (
    <section className="why-choose-section">
      <h2>
        Why choose <span className="accent">Financial Plan</span> from Finance with Sheetal
      </h2>
      <div className="why-choose-content">
        <div className="why-choose-image">
          {/* Place your illustration here, update src as needed */}
          <img src={StatsImages} alt="Visual Learning Illustration" />
        </div>
        <div className="why-choose-info">
          <h3>Visual Learning That Sticks</h3>
          <p>
            All courses are crafted using illustrations and engaging notes that make concepts easy to remember.<br />
            You’ll understand not just ‘how’, but ‘why’—empowering you to use data with confidence.
          </p>
          <button className="choose-button">View courses</button>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
