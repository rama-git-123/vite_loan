import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import Breadcrumb from "../../components/breadcrumb/breadcrumb";
import LoansData from "../../data/loan.json";
import EMICalculator from "../../components/emicalculator/emicalculator";
import Faq from "../../components/faq/faq";
import LoanReview from "../../components/loanReview/loanReview";
const GoldLoan = ({ mainData }) => {
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
      <Breadcrumb
        location={location}
        page={"Gold Loan"}
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
          <h2 class="text-center mb-4">{LoansData?.goldLoanFeatures?.title}</h2>
          <div class="row text-center g-3">
            {LoansData?.goldLoanFeatures?.features.map((item, index) => (
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
          <h3 class="mb-3">{LoansData?.goldLoanFeaturesAndBenefits?.title}</h3>
          <p>{LoansData?.goldLoanFeaturesAndBenefits?.description}</p>
          <ul>
            {LoansData?.goldLoanFeaturesAndBenefits?.benefits.map(
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
              <h4>Gold Loan Eligibility and Documents</h4>
              <p class="mb-0">
                Read on to know the criteria required to apply for our Gold
                Loan.
              </p>
            </div>
            <button class="btn btn-danger">Apply</button>
          </div>
        </div>
        <div>
          <h2 className="margin-t-2 margin-b-2">Eligibility Criteria</h2>

          <ul>
            <li>
              <strong>Age:</strong> Typically, borrowers should be 18 years or
              older.
            </li>
            <li>
              <strong>Ownership</strong> You must own the gold being pledged.
            </li>
            <li>
              <strong>Gold Quality:</strong> The gold should meet the lender's
              purity standards.
            </li>
            <li>
              <strong>Identification</strong> Valid government-issued ID for
              identity verification.
            </li>
          </ul>
          <h2 ref={sectionRefs["DOCUMENTS"]} className="margin-t-2 margin-b-2">
            Documents Required to Apply for Gold Loan
          </h2>
          <ul>
            <li>Identity and signature proof</li>
            <li>Voter ID</li>
            <li>Passport</li>
            <li>Aadhaar Card</li>
            <li>Driving License</li>
            <li>PAN Card</li>
            <li>Employee Identity Card (in case of government employees)</li>
            <li>Address Proof</li>
            <li>Rent Agreement</li>
            <li>Bank Statement</li>
            <li>Voter ID Card</li>
            <li>Passport</li>
            <li>Driving License</li>
            <li>
              Telephone/Electricity/Water/Credit Card bill or Property tax
            </li>
            <li>Two post-dated cheques for security purposes</li>
            <li>Passport-size photographs</li>
          </ul>
        </div>
        <div>
          <h2 className="margin-t-2 margin-b-2">
            How to Apply for Gold Loan at Ruloans?
          </h2>
          <p>
            To apply for a gold loan, you can follow these general steps. Keep
            in mind that the specific process might vary depending on the lender
            and the country you're in. Here are few points to keep in mind
            before Applying Gold Loan:
          </p>
          <ul>
            <li>
              <strong>Choose a Lender:</strong> Research and choose a reputable
              lender that offers gold loans. This could be a bank, a financial
              institution, or a specialized gold loan company.
            </li>
            <li>
              <strong>Check Eligibility:</strong> Review the eligibility
              criteria set by the lender. Typically, you'll need to be of a
              certain age and own gold jewelry that meets the lender's criteria.
            </li>
            <li>
              <strong>Visit the Branch or Website:</strong> You can either visit
              the nearest branch of the lender or apply online through their
              official website or mobile app, if available.
            </li>
            <li>
              <strong>Gold Evaluation:</strong> If applying in person, bring the
              gold you want to pledge as collateral to the lender's branch. They
              will evaluate the gold's purity, weight, and value to determine
              the loan amount you're eligible for. If applying online, you might
              need to visit the branch for this step. These days, a few fintech
              companies offer this service at the customer’s doorstep as well.
            </li>
          </ul>
        </div>
        <div ref={sectionRefs["EMI CALCULATOR"]}>
          <h2 className="margin-t-2 margin-b-2">Gold Loan EMI Calculator</h2>

          <h6 className="margin-t-2 margin-b-2">
            How is Loan Against Property EMI Calculated?
          </h6>
          <h6>
            Gold Loan EMI (Equated Monthly Installment) is calculated using the
            following Compound Interest formula:
          </h6>
          <p className="margin-t-2 margin-b-2">
            EMI = [P * r * (1 + r)^n] / [(1 + r)^n - 1]
          </p>
          <h6 className="margin-t-2 margin-b-2">Where:</h6>
          <ul>
            <li>EMI = Equated Monthly Installment</li>
            <li>P = Loan Against Property principal amount</li>
            <li>
              r = Monthly interest rate (Annual interest rate divided by 12,
              expressed as a decimal)
            </li>
            <li>n = Loan Against Property tenure in months</li>
          </ul>
        </div>

        <div ref={sectionRefs["FEES AND CHARGES"]} class="container">
          <h2 class="text-center mb-4 margin-t-2">
            Fees and Charges for Gold Loan
          </h2>
          <p class="text-center margin-b-2">
            The fees and charges of gold loans usually vary from lender to
            lender and from case to case. The aforementioned table will give you
            a fair idea of the fees and charges related to gold loans:
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
                <td>0.2% to 0.6% of loan amount</td>
              </tr>
              <tr>
                <td>Loan Cancellation</td>
                <td>1%</td>
              </tr>
              <tr>
                <td>Stamp Duty Charges</td>
                <td>As per actuals</td>
              </tr>
              <tr>
                <td>Legal Fees</td>
                <td>Nil</td>
              </tr>
              <tr>
                <td>Penal Charges</td>
                <td>Nil</td>
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
          <LoanReview title={"Gold Loan Reviews"} />
        </div>
        <div ref={sectionRefs["FAQ's"]} className="container">
          <Faq mainData={mainData} />
        </div>
      </div>
    </>
  );
};

export default GoldLoan;
