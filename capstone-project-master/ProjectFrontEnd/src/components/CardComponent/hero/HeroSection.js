// HeroSection.js
import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-text">
        Find the best credit card for you
      </div>
      <img src='/Resources/herocard.png' alt="Bank" />
    </section>
  );
}

export default HeroSection;
