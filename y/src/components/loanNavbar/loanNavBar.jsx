import React, { useState } from "react";
import LoansData from "../../data/loan.json";
import { Link, useLocation } from "react-router-dom";
const LoanNavBar = ({ mainData }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();
  return (
    <div className="loan-navbar">
      <div className="container">
        <nav
          className={`nav nav-tabs justify-content-center border-bottom-0 loan-nav ${
            isSticky ? "sticky-nav" : ""
          }`}
        >
          {LoansData?.navTabs?.map((item, index) => (
            <a
              className={`nav-item nav-link ${
                index === activeIndex ? "active" : ""
              }`}
              key={index}
              href={item?.link}
              onClick={(e) => {
                // e.preventDefault(); // Prevent page reload
                setActiveIndex(index); // Update active tab
              }}
            >
              {item?.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};
export default LoanNavBar;
