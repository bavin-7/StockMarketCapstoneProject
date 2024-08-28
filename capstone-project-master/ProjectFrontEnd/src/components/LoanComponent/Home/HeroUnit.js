import React from 'react';
import './HeroUnit.css'; // You should create a CSS file for your styles

const HeroUnit = () => {
  return (
    <>
    <div className="hero-unit">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="hero-heading">Credit Pulse</h1>
            <p className="hero-subheading">Your Gateway to financial freedom</p>
            <p className='hero-subheading2'>Finances made easier just for you</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default HeroUnit;
