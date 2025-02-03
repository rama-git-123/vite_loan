import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import Breadcrumb from "../../components/breadcrumb/breadcrumb";
import LoansData from "../../data/loan.json";
import EMICalculator from "../../components/emicalculator/emicalculator";
import Faq from "../../components/faq/faq";
import LoanReview from "../../components/loanReview/loanReview";
const HomeLoan = ({ mainData }) => {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = {
    OVERVIEW: useRef(null),
    FEATURES: useRef(null),
    ELIGIBILITY: useRef(null),
    DOCUMENTS: useRef(null),
    "EMI CALCULATOR": useRef(null),
    "FEES AND CHARGES": useRef(null),
    REVIEWS: useRef(null),
    "FAQ's": useRef(null),
  };
  const handleScroll2 = (section, index) => {
    setActiveIndex(index); // Update active tab

    const element = sectionRefs[section]?.current;
    if (element) {
      const offset = 80; // Adjust this value to control spacing
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      // Add sticky class when scrolled past a certain point
      setIsSticky(window.scrollY > 50);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {" "}
      <Breadcrumb
        location={location}
        page={"Home Loan"}
        //subPage={"Personal Loan"}
      />
      <div className=" container personal-loan">
        <nav
          className={`nav nav-tabs justify-content-center border-bottom-0 loan-nav ${
            isSticky ? "sticky-nav" : ""
          }`}
        >
          {LoansData?.navTabs?.map((item, index) => (
            <a
              key={index}
              className={`nav-item nav-link ${
                index === activeIndex ? "active" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleScroll2(item.name, index);
              }}
            >
              {item?.name}
            </a>
          ))}
        </nav>

        <div ref={sectionRefs["OVERVIEW"]} class="container mt-5">
          <h2 class="text-center mb-4">{LoansData?.homeLoanFeatures?.title}</h2>
          <div class="row text-center g-3">
            {LoansData?.homeLoanFeatures?.features.map((item, index) => (
              <div class="col-md-4 col-lg-2" key={index}>
                <div class="feature-card">
                  <i class="bi bi-box-fill loan-card-icon"></i>
                  <p class="mb-0 loan-card-text">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div ref={sectionRefs["FEATURES"]} class="container mt-5">
          <h3 class="mb-3">{LoansData?.homeLoanFeaturesAndBenefits?.title}</h3>
          <p>{LoansData?.homeLoanFeaturesAndBenefits?.description}</p>
          <ul>
            {LoansData?.homeLoanFeaturesAndBenefits?.benefits.map(
              (item, index) => (
                <li key={index}>
                  <strong>{item.title}</strong>
                  {item.description}
                </li>
              )
            )}
          </ul>
        </div>
        <div ref={sectionRefs["ELIGIBILITY"]} class="container mt-5">
          <div class="p-4 bg-light border rounded-3 d-flex justify-content-between align-items-center">
            <div>
              <h4>Home Loan Eligibility and Documents</h4>
              <p class="mb-0">
                Read on to know the criteria required to apply for our Home
                Loan.
              </p>
            </div>
            <button class="btn btn-danger">Apply</button>
          </div>
        </div>

        <div class="container mt-5">
          <h3 className="margin-t-2 margin-b-2">Home Loan Eligibility </h3>
          <p>The basic home loan eligibility criteria are as follows:</p>
          <h6 className="margin-t-2 margin-b-1">Age </h6>
          <ul>
            <li>
              You must be above 21 years of age at the time of the commencing of
              your loan, and up to 65 years or less at loan maturity
            </li>
            <li>Salaried Person - 21 years to 58 years</li>
            <li>Self-Employed Person - 25 years to 65 years</li>
          </ul>
          <h6 className="margin-t-2 margin-b-1">Income </h6>
          <ul>
            <li>Salaried Person - Minimum Rs. 10,000 per month</li>
            <li>Self-Employed Person - Minimum Rs. 2,00,000 per year</li>
          </ul>
          <h6 className="margin-t-2 margin-b-1">Employment </h6>
          <ul>
            <li>
              Salaried Person - Minimum 2 to 3 years of Experience in MNC, or a
              Private or Public Limited Company
            </li>
            <li>
              Self-Employed Person - Minimum 3 years of Experience in the
              current field
            </li>
          </ul>
          <h6 className="margin-t-2 margin-b-1">Credit Score </h6>
          <ul>
            <li>
              A credit score of 750 is considered a good score for approval.
            </li>
          </ul>
        </div>

        <div ref={sectionRefs["DOCUMENTS"]} class="container mt-5">
          <h3>Documentation for Home Loan</h3>
          <h4 className="margin-t-2 margin-b-2">1. Salaried Individuals</h4>
          <ul>
            <li>Form 16</li>
            <li>Employee Identity Card</li>
            <li>3 Months Salary Slip</li>
            <li>6 Month Bank Account Statement</li>
            <li>Duration of Employment Evidence</li>
          </ul>
          <h4 className="margin-t-2 margin-b-2">
            2. Self-Employed Individuals
          </h4>
          <ul>
            <li>PAN</li>
            <li>Trade License</li>
            <li>Partnership Deed</li>
            <li>Article of Association</li>
            <li>Memorandum of Association</li>
            <li>Import Export Code</li>
            <li>SEBI Registration Certificate</li>
            <li>ROC Registration Certificate</li>
            <li>Financial Statement Audited by CA</li>
            <li>Profit & Loss Account Statement</li>
            <li>Balance Sheet</li>
            <li>6 Months Bank Account Statement</li>
            <li>Professional Practice License for Doctors, Consultants, etc</li>
            <li>
              Registration Certificate of Establishment for Shops, Factories,
              and Other Establishments
            </li>
            <li>Business Address Proof</li>
          </ul>
          <h4 className="margin-t-2 margin-b-2">
            3. Documents Required from all Non-Resident Indians (NRIs)
            Applicants
          </h4>
          <ul>
            <li>Income Proof Documents for NRI</li>
            <li>Property Papers</li>
            <li>Property Documents</li>
            <li>Sale Deed</li>
            <li>Stamped Agreement of Sale</li>
            <li>Allotment Letter</li>
            <li>No Objection Certificate or NOC</li>
            <li>Housing Society</li>
            <li>Builder</li>
            <li>Possession Certificate</li>
            <li>Land Tax Receipt</li>
            <li>Construction Cost Estimate</li>
            <li>Bank Account Statement of Payment Made to Seller or Builder</li>
            <li>Payment Receipt of Payment Made to Seller or Builder</li>
            <li>Incase of resale property share certificate is required</li>
            <li>Occupancy Certificate</li>
          </ul>
        </div>
        <div ref={sectionRefs["EMI CALCULATOR"]}>
          <h4 className="margin-t-2 margin-b-2">
            EMI Calculator for Home Loan
          </h4>
          <p>
            The monthly part-payment that you make to repay your Home Loan is
            known as an Equated Monthly Instalment (EMI). This monthly payment
            includes repayment of the principal amount of your loan divided over
            the period of the loan, with the agreed interest amount on the
            outstanding amount of your home loan. My Scopes online Home Loan EMI
            Calculator is essential to make an up-to-date decision to execute
            your Home Loan Plan at optimum levels. This EMI calculator online
            aids you to perform complex computing functions to calculate your
            Home Loan Equated Monthly Instalment accurately in an instant.
          </p>
          <EMICalculator />
        </div>

        <div ref={sectionRefs["FEES AND CHARGES"]} class="container">
          <h2 class="text-center mb-4 margin-t-2">
            Fees and Charges for Home Loan
          </h2>
          <p class="text-center margin-b-2">
            The fees and charges of home loans usually vary from lender to
            lender and from case to case. The aforementioned table will give you
            a fair idea of the fees and charges related to home loans:
          </p>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Particulars</th>
                <th>Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Loan Processing Fees</td>
                <td>0.25% to 2% of Loan Amount</td>
              </tr>
              <tr>
                <td>Loan Cancellation</td>
                <td>Nill - 5% (according to Bank/NBFC)</td>
              </tr>
              <tr>
                <td>Stamp Duty Charges</td>
                <td>As per the Value of the Property and State Tax</td>
              </tr>
              <tr>
                <td>Legal Fees</td>
                <td>As per actual</td>
              </tr>
              <tr>
                <td>Penal Charges</td>
                <td>Usually 2% per month</td>
              </tr>
              <tr>
                <td>EMI/ Cheque Bonus</td>
                <td>Approx 500/-</td>
              </tr>
            </tbody>
          </table>
          <p class="text-center">
            Other fees and charges that lenders may levy on your personal loan
            include documentation charges, verification charges, duplicate
            statement charges, NOC certificate charges and swap.
          </p>
        </div>
        {/* section */}
        <div ref={sectionRefs["REVIEWS"]}>
          <LoanReview title="Home loan Review" />
        </div>

        <div ref={sectionRefs["FAQ's"]} className="container">
          <Faq mainData={mainData} />
        </div>
      </div>
    </>
  );
};

export default HomeLoan;
