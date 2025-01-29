import React, { useState } from "react";
import Breadcrumb from "../../components/breadcrumb/breadcrumb";
import LoansData from "../../data/loan.json";
import { Link, useLocation } from "react-router-dom";
import LoanNavBar from "../../components/loanNavbar/loanNavBar";

const Features = ({ mainData }) => {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();
  return (
    <div className="features">
      <Breadcrumb
        location={location}
        page={"Personal Loan"}
        //subPage={"Personal Loan"}
      />
      <div className=" container personal-loan">
        <LoanNavBar />
        {/* <nav
          className={`nav nav-tabs justify-content-center border-bottom-0 loan-nav ${
            isSticky ? "sticky-nav" : ""
          }`}
        >
          {LoansData?.navTabs?.map((item, index) => (
            <a
              className={`nav-item nav-link ${index === 0 ? "active" : ""}`}
              key={index}
              href={item?.link}
            >
              {item?.name}
            </a>
          ))}
        </nav> */}

        <div class="container mt-5">
          <h2 class="text-center mb-4">
            {LoansData?.personalLoanFeatures?.title}
          </h2>
          <div class="row text-center g-3">
            {LoansData?.personalLoanFeatures?.features.map((item, index) => (
              <div class="col-md-4 col-lg-2" key={index}>
                <div class="feature-card">
                  <i class="bi bi-box-fill loan-card-icon"></i>
                  <p class="mb-0 loan-card-text">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div class="container mt-5" id="featuresAndBenefits">
          <h3 class="mb-3">{LoansData?.featuresAndBenefits?.title}</h3>
          <p>{LoansData?.featuresAndBenefits?.description}</p>
          <ul>
            {LoansData?.featuresAndBenefits?.benefits.map((item, index) => (
              <li key={index}>
                <strong>{item.title}</strong>
                {item.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Features;
