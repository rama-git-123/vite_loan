import { Link, useLocation } from "react-router-dom";
import Breadcrumb from "../../components/breadcrumb/breadcrumb";
import LoansData from "../../data/loan.json";
import EMICalculator from "../../components/emicalculator/emicalculator";
import Faq from "../../components/faq/faq";
const PesonalLoan = ({ mainData }) => {
  const location = useLocation();
  return (
    <div className="container personal-loan">
      <Breadcrumb
        location={location}
        page={"Personal Loan"}
        //subPage={"Personal Loan"}
      />
      <nav class="nav nav-tabs justify-content-center border-bottom-0">
        {LoansData?.navTabs?.map((item, index) => (
          <Link
            to={item?.link}
            className={`nav-item nav-link ${index === 0 ? "active" : ""}`}
            key={index}
          >
            {item?.name}
          </Link>
          // <a class="nav-link active" href="#">
          //   {item.name}
          // </a>
        ))}
      </nav>

      <div class="container mt-5">
        <h2 class="text-center mb-4">
          {LoansData?.personalLoanFeatures?.title}
        </h2>
        <div class="row text-center g-3">
          {LoansData?.personalLoanFeatures?.features.map((item, index) => (
            <div class="col-md-4 col-lg-2" key={index}>
              <div class="feature-card">
                <img src="icon1.png" alt="Offers" />
                <p class="mb-0">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div class="container mt-5">
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
      <div class="container mt-5">
        <div class="p-4 bg-light border rounded-3 d-flex justify-content-between align-items-center">
          <div>
            <h4>Personal Loan Eligibility and Documents</h4>
            <p class="mb-0">
              Read on to know the criteria required to apply for our Personal
              Loan.
            </p>
          </div>
          <button class="btn btn-danger">Apply</button>
        </div>
      </div>

      <div class="container mt-5">
        <h3>Personal Loan Eligibility Criteria</h3>
        <p>
          To qualify for a personal loan, you have to meet certain criteria.
          Below are the important factors that lenders take into consideration
          to decide your eligibility for a personal loan.
        </p>
        <ul>
          <li>Age should fall under the range of 21 years to 60 years</li>
          <li>
            Net monthly income should be 15,000/- for salaried and
            self-employed, yearly transactions should be a minimum of 20 lakhs
          </li>
          <li>Credit score must be above 650</li>
          <li>Debt-to-income ratio</li>
          <li>Employment stability</li>
          <li>Maintained a good credit score</li>
          <li>Clear repayment history</li>
          <li>Must be a Resident Citizen of India</li>
        </ul>
      </div>

      <div class="container mt-5">
        <h3>Documents required to apply for Personal Loan</h3>
        <ul>
          <li>
            <strong>Identity Proof:</strong> Passport, Voter's ID, Driving
            License, PAN Card, Aadhaar Card
          </li>
          <li>
            <strong>Proof of Residence or Address Proof:</strong> Passport,
            Voter's ID, Driving License, PAN Card, Aadhaar Card, Electricity
            Bill, Telephone Bill, Ration Card
          </li>
          <li>
            <strong>Age Proof:</strong> Passport, Voter's ID, Driving License,
            PAN Card, Aadhaar Card
          </li>
          <li>
            <strong>Income Proof:</strong> 1 year Bank statement, 3 months
            Salary Slips
          </li>
          <li>
            <strong>Employment Proof:</strong> Employment Certificate, Office
            address proof
          </li>
          <li>
            <strong>GST or VAT Registration for Self-employed</strong>
          </li>
          <li>
            <strong>Photograph:</strong> Passport-size photographs
          </li>
          <li>
            <strong>Business proof:</strong> Business registration documents
            such as a partnership deed, Memorandum of Association (MOA),
            Articles of Association (AOA), etc.
          </li>
          <li>
            <strong>Income tax returns:</strong> Documents of the past 2-3 years
            to verify income and tax payment history
          </li>
        </ul>
      </div>
      <EMICalculator />
      <div class="container">
        <h2 class="text-center mb-4">Fees and Charges for Personal Loan</h2>
        <p class="text-center">
          The fees and charges of personal loans usually vary from lender to
          lender and from case to case. The aforementioned table will give you a
          fair idea of the fees and charges related to personal loans:
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
              <td>2999/- to 5% of Loan Amount</td>
            </tr>
            <tr>
              <td>Loan Cancellation</td>
              <td>Usually 3000 to 5% of Loan Amount</td>
            </tr>
            <tr>
              <td>Stamp Duty Charges</td>
              <td>150/- to 300/-</td>
            </tr>
            <tr>
              <td>Legal Fees</td>
              <td>As per actuals</td>
            </tr>
            <tr>
              <td>Penal Charges</td>
              <td>Usually 2% per month</td>
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
      <div class="container">
        <h2 class="text-center">Personal Loan Reviews</h2>

        <div class="review-container">
          <div class="review-card">
            <div class="star-rating">
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </div>
            <p>
              During the COVID-19 times, I was in urgent need of some funds for
              the treatment of my brother and I was not able to get it from
              anywhere. Even the bank I have my salary account refused to
              provide me a personal loan, then my friend told me about RULOANS
              and after contacting them, I was able to get a personal loan in a
              span of three days from standard chartered bank.
            </p>
            <div class="author-info">
              <img src="author1.jpg" alt="Author 1" />
              <h4>NEELIMA JAIN</h4>
            </div>
          </div>

          <div class="review-card">
            <div class="star-rating">
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </div>
            <p>
              RULOANS helped me in getting a personal loan for my wedding. I was
              pretty impressed by the rate of interest, terms and conditions
              they got me by negotiating from the bank. I can surely refer all
              of my colleagues to RULOANS for applying any type of loan.
            </p>
            <div class="author-info">
              <img src="author2.jpg" alt="Author 2" />
              <h4>SHEETAL JAIN</h4>
            </div>
          </div>

          <div class="review-card">
            <div class="star-rating">
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </div>
            <p>
              I took a personal loan through RULOANS and used it to clear my
              credit card dues. This way I saved some money as the interest
              charged on my credit card was much higher than the personal loan.
            </p>
            <div class="author-info">
              <img src="author3.jpg" alt="Author 3" />
              <h4>RAJESH DODIYA</h4>
            </div>
          </div>

          <div class="review-card">
            <div class="star-rating">
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </div>
            <p>
              The comparison table, which RULOANS have provided on their
              website, is best. As it is very useful for every loan seeker.
              Using that table i applied with YES bank as it suited best to my
              requirements.
            </p>
            <div class="author-info">
              <img src="author4.jpg" alt="Author 4" />
              <h4>PRITESH DESAI</h4>
            </div>
          </div>
        </div>
      </div>
      <Faq mainData={mainData} />
    </div>
  );
};

export default PesonalLoan;
