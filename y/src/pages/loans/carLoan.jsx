import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Breadcrumb from "../../components/breadcrumb/breadcrumb";
import LoansData from "../../data/loan.json";
import EMICalculator from "../../components/emicalculator/emicalculator";
import Faq from "../../components/faq/faq";
import LoanReview from "../../components/loanReview/loanReview";
const CarLoan = ({ mainData }) => {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

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
    <div className=" container personal-loan car-loan">
      <Breadcrumb
        location={location}
        page={"Car Loan"}
        //subPage={"Personal Loan"}
      />
      <nav
        className={`nav nav-tabs justify-content-center border-bottom-0 loan-nav ${
          isSticky ? "sticky-nav" : ""
        }`}
      >
        {LoansData?.navTabs?.map((item, index) => (
          <Link
            to={item?.link}
            className={`nav-item nav-link ${index === 0 ? "active" : ""}`}
            key={index}
          >
            {item?.name}
          </Link>
        ))}
      </nav>

      <div class="container mt-5">
        <h2 class="text-center mb-4">{LoansData?.carLoanFeatures?.title}</h2>
        <div class="row text-center g-3">
          {LoansData?.carLoanFeatures?.features.map((item, index) => (
            <div class="col-md-4 col-lg-2" key={index}>
              <div class="feature-card">
                <i class="bi bi-box-fill loan-card-icon"></i>
                <p class="mb-0 loan-card-text">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div class="container mt-5">
        <h3 class="mb-3">{LoansData?.carLoanFeaturesAndBenefits?.title}</h3>
        <p>{LoansData?.carLoanFeaturesAndBenefits?.description}</p>
        <ul>
          {LoansData?.carLoanFeaturesAndBenefits?.benefits.map(
            (item, index) => (
              <li key={index}>
                <strong>{item.title}</strong>
                {item.description}
              </li>
            )
          )}
        </ul>
      </div>
      <div class="container mt-5">
        <div class="p-4 bg-light border rounded-3 d-flex justify-content-between align-items-center">
          <div>
            <h4>Car Loan Eligibility and Documents</h4>
            <p class="mb-0">
              Read on to know the criteria required to apply for our Home Loan.
            </p>
          </div>
          <button class="btn btn-danger">Apply</button>
        </div>
      </div>
      <div>
        <h2 className="margin-t-2 margin-b-2">Car Loan Eligibility</h2>
        <p>
          Car loan eligibility is about whether you can get a loan to buy a car.
          It depends on things like how much you earn, your credit score, and if
          you have other debts. Lenders use these details to decide if you can
          repay the loan. If you meet their criteria, you're eligible for the
          loan; if not, you might need to wait or improve your financial
          situation before getting a car loan.
        </p>
        <h6 className="margin-t-2 margin-b-2">
          Car Loan Eligibility Calculator Refer to the Calculator
        </h6>
        <h6 className="margin-t-2 margin-b-2">
          Car Loan Eligibility Criteria for Top Banks
        </h6>
        <p>
          Car loan eligibility criteria vary from one bank to another, but
          generally include factors such as your age (usually 21 to 65 years),
          minimum income (often around INR 20,000 per month), and stable
          employment. A good credit score, usually 650 or above, is important.
          Some banks might require you to be a salaried employee or
          self-employed, while others could need you to have a certain work
          experience or business vintage. Banks also consider your existing
          debts and liabilities to ensure you can manage the loan. Checking with
          each bank directly or using their online eligibility calculators can
          provide precise criteria tailored to their policies.
        </p>
        <h6 className="margin-t-2 margin-b-2">
          Car Loan Eligibility for Salaried Individuals/Self-Employed
          Individuals
        </h6>
        <h6 className="margin-t-2 margin-b-2">For Salaried Individuals</h6>
        <ul>
          <li>
            Individuals who are at least 21 years old at the time of loan
            application and no older than 60 at the end of the loan tenure
          </li>
          <li>
            Individuals who have worked for at least two years, with at least
            one year with the current employer
          </li>
          <li>
            Individuals with a minimum earning of Rs. 3,00,000 per year,
            including the income of the spouse/co-applicant.
          </li>
          <h6 className="margin-t-2 margin-b-2">
            For Self Employed Individuals
          </h6>
        </ul>
        <ul>
          <li>
            Individuals who are at least 21 years old at the time of application
            and no older than 65 at the end of the loan tenure.
          </li>
          <li>Those who have been in business for at least two years.</li>
          <li>Should earn at least Rs. 3,000,000 per year</li>
        </ul>
      </div>
      <div>
        <h6 className="margin-t-2 margin-b-2">
          Documents Required to Apply for Car Loan
        </h6>
        <ul>
          <li>KYC documents (Valid Photo ID Proofs)</li>
          <li>PAN Card</li>
          <li>Last 2 years' ITR as proof of income</li>
          <li>Salary Slip (latest 3 months)</li>
          <li>Salary account statement (latest 6 months)</li>
          <li>Signature Verification Proof</li>
        </ul>
        <h6 className="margin-t-2 margin-b-2">EMI Calculator for Car Loan</h6>
        <p>
          An EMI calculator is a useful tool that can help you estimate the
          monthly installments you will have to pay towards your used Car Loan
          within a specific period. By using the RuLoans EMI calculator, you can
          calculate your EMI beforehand, which can help you plan your finances
          better. Additionally, you can check your eligibility and compare
          different Loan options using RuLoans used Car Loan calculator.
        </p>
        <p>
          Using a Car Loan EMI (Equated Monthly Installment) calculator can help
          you estimate your monthly loan repayment amount. Follow these steps to
          use a Car Loan EMI calculator effectively:
        </p>
        <ul>
          <li>Enter Loan amount, interest rate, tenure.</li>
          <li>Click Calculate.</li>
          <li>View EMI, total interest, repayment.</li>
          <li>Adjust tenure if needed.</li>
          <li>Consider extra costs.</li>
          <li>Check budget compatibility.</li>
          <li>Confirm with the lender before finalizing.</li>
        </ul>
        <h6 className="margin-t-2 margin-b-2">
          How is Car Loan EMI Calculated?
        </h6>
        <h6 className="margin-t-2 margin-b-2">
          Car Loan EMI (Equated Monthly Installment) is calculated using the
          following formula:
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

      <div class="container">
        <h2 class="text-center mb-4 margin-t-2">
          Fees and Charges for Car Loan
        </h2>
        <p class="text-center margin-b-2">
          The fees and charges of car loans usually vary from lender to lender
          and from case to case. The aforementioned table will give you a fair
          idea of the fees and charges related to car loans:
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
              <td>1.5% to 4% of loan amount</td>
            </tr>
            <tr>
              <td>Loan Cancellation</td>
              <td>Usually around Rs 5,000</td>
            </tr>
            <tr>
              <td>Stamp Duty Charges</td>
              <td>As per actuals</td>
            </tr>
            <tr>
              <td>Legal Fees</td>
              <td>As per actual</td>
            </tr>
            <tr>
              <td>Penal Charges</td>
              <td>Usually @ 2% per month; 24% p.a.</td>
            </tr>
            <tr>
              <td>EMI/ Cheque Bonus</td>
              <td>Around Rs 400 per bounce</td>
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
      <LoanReview title={"Car Loan Reviews"} />
      <div className="container">
        <Faq mainData={mainData} />
      </div>
    </div>
  );
};

export default CarLoan;
