import React, { useState } from "react";
import "./feedback.scss";

const Feedback = ({ mainData }) => {
  const feedbackItems = mainData?.feedback?.items || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrev = () => {
    if (isAnimating) return; // Prevent rapid clicks
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? feedbackItems.length - 1 : prevIndex - 1
      );
      setIsAnimating(false);
    }, 500); // Match CSS duration
  };

  const handleNext = () => {
    if (isAnimating) return; // Prevent rapid clicks
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === feedbackItems.length - 1 ? 0 : prevIndex + 1
      );
      setIsAnimating(false);
    }, 500); // Match CSS duration
  };

  return (
    <div className="feedback">
      <h2>{mainData?.feedback?.title}</h2>
      <div className="carousel-container">
        <div
          className="carousel-track"
          style={{
            display: "flex",
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {feedbackItems.map((item, index) => (
            <div className="fed-section" key={index}>
              <h3>{item?.testimonial}</h3>
              <p>{item?.name}</p>
              <p>{item?.designation}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <button className="arrow left" onClick={handlePrev}>
          &#10094;
        </button>
        <button className="arrow right" onClick={handleNext}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Feedback;
