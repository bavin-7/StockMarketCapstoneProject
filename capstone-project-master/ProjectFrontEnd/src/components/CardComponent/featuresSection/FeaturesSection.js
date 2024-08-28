import React from "react";
import Slider from "react-slick";
import "./FeaturesSection.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import featureData from "./featureData";

function FeaturesSection() {
  const features = featureData;

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "purple",
          color: "black",
          margin: "5px",
        }}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "purple",
          color: "black",
          margin: "5px",
        }}
        onClick={onClick}
      />
    );
  };

  // Configure the slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section className="features">
      <h2>Explore credit card features and benefits</h2>

      <div>
        <Slider {...settings}>
          {features.map((feature, index) => (
            <div key={index} className="featureCard">
              <div className="card-content">
                <img
                  src={feature.icon}
                  alt={feature.feature}
                  className="feature-icon"
                />
                <h3>{feature.feature}</h3>
              </div>
              <div className="benefit-content">
                <h4>{feature.benefit}</h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default FeaturesSection;
