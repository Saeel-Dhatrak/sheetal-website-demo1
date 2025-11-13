import React from 'react';
import './Hero.css';
import sheetalImage from './assets/sheetal-website-image2.jpg'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          File Tax <br />
          <span className="accent">step by step</span> <br />
          With Sheetal
        </h1>
        <p>
          Manage your finances with confidence.<br />
          Get expert guidance to simplify your taxes, grow your wealth, and secure your financial future.
        </p>
        <button className="hero-button">Start financing now</button>
      </div>
      <div className="hero-image">
        {/* Add your image file inside public or src and reference here */}
        <img src={sheetalImage} alt="Visual Learning Banner" />
      </div>
    </section>
  );
}

export default Hero;
