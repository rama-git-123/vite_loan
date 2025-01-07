import React, { useState } from "react";
import "./feedback.scss";
const Feedback = ({ mainData }) => {
  const images = [
    "https://via.placeholder.com/600x300?text=Slide+1",
    "https://via.placeholder.com/600x300?text=Slide+2",
    "https://via.placeholder.com/600x300?text=Slide+3",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrev = () => {
    if (isAnimating) return; // Prevent rapid clicks
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setIsAnimating(false);
    }, 500); // Match CSS animation duration
  };

  const handleNext = () => {
    if (isAnimating) return; // Prevent rapid clicks
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setIsAnimating(false);
    }, 500); // Match CSS animation duration
  };

  return (
    <div className="feedback">
      <h2 className="h2-font">{mainData?.feedback?.title}</h2>

      <div className="fed-section">
        <h3>{mainData?.feedback?.description}</h3>
        <p>{mainData?.feedback?.items[0].testimonial}</p>
        <h5>{mainData?.feedback?.items[0].name}</h5>
        <p>{mainData?.feedback?.items[0].designation}</p>
      </div>
      {/* <button className="arrow left" onClick={handlePrev}>
        &#10094;
      </button>
      <button className="arrow right" onClick={handleNext}>
        &#10095;
      </button> */}
    </div>
  );
};
export default Feedback;
