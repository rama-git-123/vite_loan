import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Breadcrumb from "../../components/breadcrumb/breadcrumb";
import LoansData from "../../data/loan.json";
import EMICalculator from "../../components/emicalculator/emicalculator";
import Faq from "../../components/faq/faq";
import LoanReview from "../../components/loanReview/loanReview";
const LoanAgainstProprties = ({ mainData }) => {
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
    <>
      <Breadcrumb
        location={location}
        page={"Loan Against Property"}
        //subPage={"Personal Loan"}
      />
      <div className=" container personal-loan">
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
          <h2 class="text-center mb-4">
            {LoansData?.loanAgainstProprtiesFeatures?.title}
          </h2>
          <div class="row text-center g-3">
            {LoansData?.loanAgainstProprtiesFeatures?.features.map(
              (item, index) => (
                <div class="col-md-4 col-lg-2" key={index}>
                  <div class="feature-card">
                    <i class="bi bi-box-fill loan-card-icon"></i>
                    <p class="mb-0 loan-card-text">{item.description}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        <div class="container mt-5">
          <h3 class="mb-3">
            {LoansData?.loanAgainstProprtiesFeaturesAndBenefits?.title}
          </h3>
          <p>{LoansData?.homeLoanFeaturesAndBenefits?.description}</p>
          <ul>
            {LoansData?.loanAgainstProprtiesFeaturesAndBenefits?.benefits.map(
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
              <h4>Home Loan Eligibility and Documents</h4>
              <p class="mb-0">
                Read on to know the criteria required to apply for our Home
                Loan.
              </p>
            </div>
            <button class="btn btn-danger">Apply</button>
          </div>
        </div>
        <div>
          <h2 className="margin-t-2 margin-b-2">
            Eligibility Criteria for Loan against Property
          </h2>

          <ul>
            <li>
              <strong>Nationality:</strong> You need to be a Citizen of India
              with documents to prove your claim.
            </li>
            <li>
              <strong>Occupation and Income:</strong> Your lender will require
              you to furnish details regarding your occupation and income to
              prove your professional and financial stability to determine your
              creditworthiness.
            </li>
            <li>
              <strong>Credit History:</strong> Your three-digit Credit Score,
              indicative of your track record in respect of repayment of loans,
              and other forms of credit will be a deciding factor to prove your
              eligibility for a LAP.
            </li>
            <li>
              <strong>Banking Relationship:</strong> Should you have a healthy
              relationship with your lender, you will not be disapproved for a
              LAP. Additionally, your lender will offer you better terms and
              conditions in respect of loan value, interest rates, period of the
              loan, hidden charges, and processing fees.
            </li>
            <li>
              <strong>Market Value of Property:</strong> Your lender retains the
              right to decide the loan amount and terms and conditions of your
              mortgage loan based on the market value of your collateral
              property. Besides, the market value of the mortgaged property must
              be higher than the loan amount calculated on the current value of
              your property.
            </li>
            <li>
              <strong>Title of Property:</strong> Your lender will require you
              to be the current existent owner of the property, and in case of a
              co-application, you will require to prove multiple ownership clear
              title. Besides, the property must not be mortgaged with any other
              financial institution.
            </li>
          </ul>
          <h2 className="margin-t-2 margin-b-2">
            Documents Required to Apply for Loan Against Property
          </h2>
          <li>Proof of identity/residence</li>
          <li>Proof of income</li>
          <li>Property-related documents</li>
          <li>Proof of Business (for self-employed)</li>
          <li>Account statement for the last 6 months</li>
        </div>
        <div>
          <h2 className="margin-t-2 margin-b-2">
            Loan Against Property EMI Calculator
          </h2>
          <p>
            A Loan Against Property may be termed as a Mortgage Loan since to
            avail an LAP, you need to mortgage your property to cover risk of
            non-payment or default in repayment of the funds borrowed. For any
            lender to approve such a borrowing, the lender will first analyse
            your personal and financial profile, which will include criteria
            such nationality, age, occupation, income, and market value of the
            collateral you are willing to keep. A mortgage loan calculator then
            calculates the financial implications of such a loan based on
            certain parameters based on eligibility criteria to enable approval
            of your Mortgage Loan.
          </p>
          <h6 className="margin-t-2 margin-b-2">
            How is Loan Against Property EMI Calculated?
          </h6>
          <h6>
            Loan Against Property EMI (Equated Monthly Installment) is
            calculated using the following Compound Interest formula:
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
            Fees and Charges for Loan Against Property Loan
          </h2>
          <p class="text-center margin-b-2">
            The fees and charges of property loans usually vary from lender to
            lender and from case to case. The aforementioned table will give you
            a fair idea of the fees and charges related to property loans:
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
        <LoanReview title={"Loan Against Property Reviews"} />
        <div className="container">
          <Faq mainData={mainData} />
        </div>
      </div>
    </>
  );
};

export default LoanAgainstProprties;
