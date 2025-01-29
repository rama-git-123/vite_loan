import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import Breadcrumb from "../../components/breadcrumb/breadcrumb";
import LoansData from "../../data/loan.json";
import EMICalculator from "../../components/emicalculator/emicalculator";
import Faq from "../../components/faq/faq";
import LoanReview from "../../components/loanReview/loanReview";
const BusinessLoan = ({ mainData }) => {
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
        page={"Business Loan"}
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
        <h2 className="margin-t-2 margin-b-2" ref={sectionRefs["OVERVIEW"]}>
          Business Loan
        </h2>
        <div className="row">
          <div className="col-md-4">
            <div class="card ">
              <div class="card-body">
                <h5 class="card-title">Get high Business Loan Eligibility</h5>
                <p class="card-text">
                  Before applying for the loan, prepare a business plan, know
                  your credit score, decide the loan amount, do some market
                  research on available business loan options, and keep the
                  documents ready.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card ">
              <div class="card-body">
                <h5 class="card-title">Common Documents Required</h5>
                <p class="card-text">
                  Proof of address & photo identity proof of the promoters,
                  business proof, income proof, partnership deed for partnership
                  firm, articles of association, memorandum of association,
                  board resolution, PAN card, etc.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card ">
              <div class="card-body">
                <h5 class="card-title">Criteria for Business Loan Approval</h5>
                <p class="card-text">
                  Applicants should be aged between 21 to 65 years, having
                  business vintage of a minimum of 1-2 years. The minimum
                  business turnover and a minimum annual turnover as per the ITR
                  will be required. The business should be profit-making for at
                  least the last 1 year.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div ref={sectionRefs["FEATURES"]}>
          <h2 className="margin-t-2 margin-b-2">
            Features and Benefits of our Business Loans
          </h2>
          <ul>
            <li>Term Loans</li>
            <li>Working Capital Loans</li>
            <li>Business Expansion Loans</li>
            <li>Equipment Financing Loans</li>
            <li>Invoice Financing & Bill Discounting</li>
            <li>Machinery Loans</li>
          </ul>
        </div>
        <div class="container mt-5">
          <div class="p-4 bg-light border rounded-3 d-flex justify-content-between align-items-center">
            <div>
              <h4>Business Loan Eligibility and Documents</h4>
              <p class="mb-0">
                Read on to know the criteria required to apply for our Home
                Loan.
              </p>
            </div>
            <button class="btn btn-danger">Apply</button>
          </div>
        </div>
        <div ref={sectionRefs["ELIGIBILITY"]}>
          <h2 className="margin-t-2 margin-b-2">
            Eligibility Criteria & Eligible Entities
          </h2>
          <ul>
            <li>
              <strong>Business Type:</strong> Most lenders provide loans to
              various types of businesses, including sole proprietorships,
              partnerships, limited liability companies (LLCs), corporations,
              and more.
            </li>
            <li>
              <strong>Credit Score:</strong> A good credit score is often
              required to qualify for a business loan. Lenders use your credit
              history to assess your ability to repay the loan.
            </li>
            <li>
              <strong>Business Age:</strong> Some lenders require a minimum
              operational history for your business, usually ranging from a few
              months to a year or more.
            </li>
            <li>
              <strong>Annual Revenue:</strong> Lenders may have a minimum annual
              revenue requirement to ensure your business has a stable income.
            </li>
            <li>
              <strong>Collateral:</strong> Secured loans might require assets as
              collateral to secure the loan. Collateral can be real estate,
              equipment, inventory, or other valuable assets.
            </li>
            <li>
              <strong>Cash Flow:</strong> Lenders often evaluate your business's
              cash flow to determine your ability to repay the loan.
            </li>
            <li>
              <strong>Age Criteria:</strong> Minimum 21 years at the time of
              loan application & Maximum 65 years at the time of loan maturity.
            </li>
            <li>
              <strong>Eligible Entities:</strong> Individuals, MSMEs, Sole
              Proprietorships, Partnership Firms, Public and Private Limited
              Companies, Limited Liability Partnerships, retailers, traders,
              manufacturers, and other non-farm income-generating business
              entities engaged only in the services, trading, and manufacturing
              sectors.
            </li>
            <li>
              <strong>Business Vintage:</strong> Minimum 1 year or above.
            </li>
            <li>
              <strong>Business Experience:</strong> Minimum 1 year, with the
              business location remaining the same.
            </li>
            <li>
              <strong>Annual Turnover:</strong> Shall be defined by the
              Bank/NBFC.
            </li>
            <li>
              <strong>Credit Score:</strong> 700 or above (preferred by most
              private and public sector banks).
            </li>
            <li>
              <strong>Nationality:</strong> Indian citizens.
            </li>
            <li>
              <strong>Additional Criteria:</strong> Applicants must own either a
              residence, office, shop, or godown.
            </li>
          </ul>
        </div>
        <div ref={sectionRefs["DOCUMENTS"]}>
          <h2 className="margin-t-2 margin-b-2">
            Documentation for Business Loans
          </h2>
          <p>
            The list of documents required for a business loan to be submitted
            varies based on type of business entity. Submit the following
            documents to begin with the loan process:
          </p>
          <ul>
            <li>ITR for the past 2-3 years</li>
            <li>Current Bank Account Statement for the last 12 months</li>
            <li>Photocopy of PAN Card</li>
            <li>
              Address Proof for Residence such as Voter Card, Passport, Aadhaar
              Card, Telephone Bill, Electricity Bill
            </li>
            <li>
              Address proof for Business such as the Telephone Bill or
              Electricity Bill
            </li>
            <li>
              Last Financial Year's provisional Financials and future year's
              projections
            </li>
            <li>Company's business profile on the letterhead</li>
            <li>2 photographs of promoters and property owners</li>
            <li>Sanction letter and Repayment schedule of existing loan</li>
            <li>
              GST registration certificate and GST returns of latest 2 years
            </li>
            <li>D-Vat/Sale tax registration copy</li>
            <li>Udhayam Aadhaar registration certificate</li>
            <li>
              Rent agreement copy of factory and residence (if property is
              rented)
            </li>
            <li>
              Business Continuity proof of 3 years (3 years old ITR/Company
              registration etc)
            </li>
            <li>
              Company PAN Card, Certificate of Incorporation, MOA, AOA, List of
              Directors, and Shareholding pattern for Pvt Ltd companies
            </li>
            <li>
              Partnership Deed, Company PAN Card for Partnership Companies
            </li>
          </ul>
        </div>

        <div ref={sectionRefs["EMI CALCULATOR"]}>
          <h4 className="margin-t-2 margin-b-2">
            How to use Business Loan EMI Calculator
          </h4>
          <p>
            Using a business loan EMI (Equated Monthly Installment) calculator
            can help you estimate your monthly loan repayment amount.
          </p>
          <p>
            Follow these steps to use a business loan EMI calculator
            effectively:
          </p>
          <ul>
            <li>Enter loan amount, interest rate, tenure.</li>
            <li>Click Calculate.</li>
            <li>View EMI, total interest, repayment.</li>
            <li>Adjust tenure if needed.</li>
            <li>Consider extra costs.</li>
            <li>Check budget compatibility.</li>
            <li>Confirm with the lender before finalizing.</li>
          </ul>

          <EMICalculator title={"Business Loan"} />
        </div>

        <div ref={sectionRefs["FEES AND CHARGES"]} class="container">
          <h2 class="text-center mb-4 margin-t-2">
            Fees and Charges for Business Loan
          </h2>
          <p class="text-center margin-b-2">
            The fees and charges of business loans usually vary from lender to
            lender and from case to case. The aforementioned table will give you
            a fair idea of the fees and charges related to business loans:
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
                <td>1.5% to 5% of Loan Amount</td>
              </tr>
              <tr>
                <td>Loan Cancellation</td>
                <td>Usually 0 to 5% of Loan Amount</td>
              </tr>
              <tr>
                <td>Stamp Duty Charges</td>
                <td>60/- to 600/-</td>
              </tr>
              <tr>
                <td>Legal Fees</td>
                <td>Nil</td>
              </tr>
              <tr>
                <td>Penal Charges</td>
                <td>Nil</td>
              </tr>
              <tr>
                <td>EMI/ Cheque Bonus</td>
                <td>Approx 499/- to 599/-</td>
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
          <LoanReview title={"Business Loan Review"} />
        </div>

        <div ref={sectionRefs["FAQ's"]} className="container">
          <Faq mainData={mainData} />
        </div>
      </div>
    </>
  );
};

export default BusinessLoan;
