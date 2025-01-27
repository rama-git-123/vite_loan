import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Breadcrumb from "../../components/breadcrumb/breadcrumb";
import LoansData from "../../data/loan.json";
import EMICalculator from "../../components/emicalculator/emicalculator";
import Faq from "../../components/faq/faq";
import LoanReview from "../../components/loanReview/loanReview";
const EducationLoan = ({ mainData }) => {
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
        page={"Education Loan"}
        //subPage={"Personal Loan"}
      />
      <div className=" container personal-loan education-loan">
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
            {LoansData?.educationLoanFeatures?.title}
          </h2>
          <div class="row text-center g-3">
            {LoansData?.educationLoanFeatures?.features.map((item, index) => (
              <div class="col-md-4 col-lg-2" key={index}>
                <div class="feature-card">
                  <i class="bi bi-box-fill loan-card-icon"></i>
                  <p class="mb-0 loan-card-text">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h2 className="margin-t-2 margin-b-2">Education Loan - Benefits</h2>
        <div className="row">
          <div className="col-md-4">
            <div class="card ">
              <div class="card-body">
                <h5 class="card-title">Avail high value loans</h5>
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
                <h5 class="card-title">Enjoy attractive interest rates</h5>
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
                <h5 class="card-title">Pre Admission Sanction</h5>
                <p class="card-text">
                  Applicants should be aged between 21 to 65 years, having
                  business vintage of a minimum of 3 years. The minimum business
                  turnover and a minimum annual turnover as per the ITR will be
                  required. The business should be profit-making for at least
                  the last 1 year.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="container mt-5">
          <h3 class="mb-3">
            {LoansData?.educationLoanFeaturesAndBenefits?.title}
          </h3>
          <p>{LoansData?.educationLoanFeaturesAndBenefits?.description}</p>
          <ul>
            {LoansData?.educationLoanFeaturesAndBenefits?.benefits.map(
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
              <h4>Education Loan Eligibility and Documents</h4>
              <p class="mb-0">
                Read on to know the criteria required to apply for our Home
                Loan.
              </p>
            </div>
            <button class="btn btn-danger">Apply</button>
          </div>
        </div>
        <div>
          <h2 className="margin-t-2 margin-b-2">Eligibility Criteria</h2>
          <p>
            Education loan eligibility criteria can vary depending on the
            country of study, the lender, and the type of loan you're applying
            for. However in a general overview the factors that often influence
            education loan eligibility are:
          </p>
          <ul>
            <li>
              <strong>Age</strong> Most lenders have a minimum and maximum age
              requirement for loan applicants. Typically, you need to be of
              legal age (18 or older) to apply for a loan.
            </li>
            <li>
              <strong>Course/Program Eligibility</strong> Education loans are
              often tied to specific educational programs or courses. Lenders
              may have a list of eligible institutions and programs that qualify
              for loans.
            </li>
            <li>
              <strong>Admission Offer</strong> Many lenders require proof of
              admission to an eligible educational institution before approving
              a loan application.
            </li>
            <li>
              <strong>Academic Performance</strong> Some lenders might consider
              your academic performance as part of the eligibility criteria.
              This could include factors like your high school or previous
              education grades.
            </li>
            <li>
              <strong>Co-borrower or Guarantor</strong> If you have limited
              credit history or income, some lenders might require a co-borrower
              or guarantor (usually a parent or guardian) who will share the
              responsibility of repaying the loan if you are unable to do so.
            </li>
            <li>
              <strong>Credit History</strong> Student's as well as their
              co-borrower/guarantor's credit history and credit score can play a
              significant role in determining your eligibility for an education
              loan. A good credit history can improve your chances of approval
              and may lead to more favorable loan terms.
            </li>
            <li>
              <strong>Income/Financial Ability</strong> Some lenders may
              consider your ability to repay the loan based on your income or
              your co-borrower's income.
            </li>
            <li>
              <strong>Loan Amount</strong> The loan amount you're requesting in
              relation to the cost of the program might affect your eligibility.
              Lenders may have specific limits on the loan amount they are
              willing to offer.
            </li>
            <li>
              <strong>Collateral or Security</strong> In some cases, lenders
              might require collateral or security against the loan, especially
              for larger loan amounts. This could be in the form of property,
              investments, or other valuable assets.
            </li>
            <li>
              <strong>Documentation</strong> You will likely need to provide
              various documents as part of your loan application, such as proof
              of identity, proof of admission, income documents, and more.
            </li>
          </ul>
          <h2 className="margin-t-2 margin-b-2">
            Documents Required to Apply for Education Loan
          </h2>
          <p>
            Documentation: You will likely need to provide various documents as
            part of your loan application, such as proof of identity, proof of
            admission, income documents, and more for both Student as well as
            the Guarantor or co-borrower.
          </p>
          <ul>
            <li>Student-Applicant</li>
            <li>Co-applicant/Guarantor</li>
            <li>Income Proof for Salaried Co-applicant/ Guarantor</li>
            <li>Income Proof for Self-employed Co-applicant/ Guarantor</li>
          </ul>
          <h6 className="margin-t-2 margin-b-2">
            Explore in detail by Visiting the Documents Required Page
          </h6>
        </div>
        <h2 className="margin-t-2 margin-b-2">Education Loan EMI Calculator</h2>
        <p>
          Using an Education Loan EMI (Equated Monthly Installment) calculator
          can help you estimate your monthly loan repayment amount.
        </p>
        <p>
          Follow these steps to use a Education Loan EMI calculator effectively:
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

        <div>
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
        <h6 className="margin-t-2 margin-b-2">
          How to Calculate the Educational Loans EMI?
        </h6>
        <h6 className="margin-t-2 margin-b-2">
          To use an Education Loan EMI Calculator:
        </h6>
        <ul>
          <li>
            <strong>Input Loan Details</strong> Enter the loan amount you plan
            to borrow, the applicable interest rate, and the repayment tenure
            (in months or years).
          </li>
          <li>
            <strong>Calculate</strong> Click the "Calculate" or "Calculate EMI"
            button to obtain the estimated monthly EMI amount.
          </li>
          <li>
            <strong>View Results</strong> The calculator will display the
            monthly EMI, as well as a breakup of the principal and interest
            components for each payment.
          </li>
          <li>
            <strong>Consider Variations</strong> You can experiment with
            different loan amounts, interest rates, and repayment tenures to see
            how they affect your EMI.
          </li>
          <li>
            <strong>Assess Affordability</strong> The calculated EMI can help
            you determine whether the repayment amount fits within your budget.
          </li>
          <li>
            <strong>Plan Your Finances</strong> Use the EMI calculation to plan
            your monthly finances and ensure timely repayment of the loan.
          </li>
        </ul>

        <div class="container">
          <h2 class="text-center mb-4 margin-t-2">
            Fees and Charges for Education Loan
          </h2>
          <p class="text-center margin-b-2">
            The fees and charges of education loans usually vary from lender to
            lender and from case to case. The aforementioned table will give you
            a fair idea of the fees and charges related to education loans:
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
                <td>0.5% to 4% of Loan Amount</td>
              </tr>
              <tr>
                <td>Loan Cancellation</td>
                <td>0</td>
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
                <td>Around Rs 590 per bounce</td>
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
        <LoanReview title={"Education Loan Reviews"} />
        <h2 class=" mb-4 margin-t-2">Learn more about Education Loans</h2>
        <Faq mainData={mainData} />
        <div className="container">
          <Faq mainData={mainData} />
        </div>
      </div>
    </>
  );
};

export default EducationLoan;
