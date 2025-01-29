import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import Breadcrumb from "../components/breadcrumb/breadcrumb";
import LoanReview from "../components/loanReview/loanReview";
import LoansData from "../data/loan.json";
import Faq from "../components/faq/faq";
const CreditCard = ({ mainData }) => {
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
      <Breadcrumb location={location} page={"Credit cards"} />
      <div className="container credit-card margin-t-2">
        <nav
          className={`nav nav-tabs justify-content-center border-bottom-0 loan-nav ${
            isSticky ? "sticky-nav" : ""
          }`}
        >
          {LoansData?.creditNavTabs?.map((item, index) => (
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
        {/* <nav class="nav nav-tabs justify-content-center border-bottom-0 loan-nav">
        {LoansData?.creditNavTabs?.map((item, index) => (
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
      </nav> */}

        <div ref={sectionRefs["OVERVIEW"]} class="container my-5">
          <div class="credit-card-section">
            <h2>What is a Credit Card?</h2>
            <p>
              A credit card is a financial instrument that has a pre-loaded
              balance that the cardholder can use to make transactions and pay
              for them later. The card issuer will let you pay off the balance
              fully, interest-free, for up to 50 days from the date of payment.
              To avoid any fines, the cardholder can pay the minimum amount due
              (which can be anywhere between 5%-10% on the total amount owed).
              The balance, however, will be carried forward to the next month,
              and interest set by the credit card company will be levied.
            </p>
          </div>

          <div class="credit-card-section">
            <h2>Different Types of Credit Cards in India</h2>
            <p>
              Shopping Credit Cards - Shopping credit cards are curated to
              reward cardholders for their shopping expenses. They offer ample
              rewards in the form of points or cashback, which can be redeemed
              for merchandise, travel, or other rewards.
            </p>
            <p>
              Travel Credit Cards - Travel credit card is a type of credit card
              that offers exciting offers and deals related to travel. Most
              features and benefits offered by travel credit cards provide you
              savings on travel. From an air ticket booking to reward points
              accumulation, everything comes with a perk when done through
              travel credit card.
            </p>
            <p>
              Lifestyle Credit Cards - Lifestyle credit cards fulfill your
              lifestyle wants and suit your various needs. Get reward points for
              every swipe you make. Avail for shopping discounts and cashback on
              retail spends.
            </p>
            <p>
              Rewards Credit Cards - Rewards credit cards offer you some type of
              “reward”—typically cash back, points, or travel miles—for every
              dollar you spend, sometimes up to certain limits. Depending on the
              card, you can then use your rewards in a variety of ways.
            </p>
          </div>

          <h3 class="mt-5">Types of Cards</h3>
          <div class="container my-5">
            <div class="row text-center">
              <div class="col-md-3 mb-4">
                <div class="card p-3">
                  <i class="bi bi-bag card-icon"></i>
                  <h5 class="mt-3">Shopping</h5>
                </div>
              </div>

              <div class="col-md-3 mb-4">
                <div class="card p-3">
                  <i class="bi bi-airplane card-icon"></i>
                  <h5 class="mt-3">Travel</h5>
                </div>
              </div>

              <div class="col-md-3 mb-4">
                <div class="card p-3">
                  <i class="bi bi-brush card-icon"></i>
                  <h5 class="mt-3">Lifestyle</h5>
                </div>
              </div>

              <div class="col-md-3 mb-4">
                <div class="card p-3">
                  <i class="bi bi-gift card-icon"></i>
                  <h5 class="mt-3">Rewards</h5>
                </div>
              </div>

              <div class="col-md-3 mb-4">
                <div class="card p-3">
                  <i class="bi bi-fuel-pump card-icon"></i>
                  <h5 class="mt-3">Fuel</h5>
                </div>
              </div>

              <div class="col-md-3 mb-4">
                <div class="card p-3">
                  <i class="bi bi-building card-icon"></i>
                  <h5 class="mt-3">Business Credit Cards</h5>
                </div>
              </div>

              <div class="col-md-3 mb-4">
                <div class="card p-3">
                  <i class="bi bi-lock card-icon"></i>
                  <h5 class="mt-3">Secured Credit Cards</h5>
                </div>
              </div>

              <div class="col-md-3 mb-4">
                <div class="card p-3">
                  <i class="bi bi-cash-coin card-icon"></i>
                  <h5 class="mt-3">Cashback</h5>
                </div>
              </div>
            </div>
          </div>

          <h3 class="mt-5 margin-b-2">Credit Card Features</h3>
          <div class="row text-center">
            <div class="col-md-3 mb-4">
              <div class="card card-c p-3">
                <i class="bi bi-credit-card-2-front card-icon2"></i>
                <h6>Credit Limit</h6>
              </div>
            </div>
            <div class="col-md-3 mb-4">
              <div class="card card-c p-3">
                <i class="bi bi-cash-stack card-icon2"></i>
                <h6>Cash Alternative</h6>
              </div>
            </div>
            <div class="col-md-3 mb-4">
              <div class="card card-c p-3">
                <i class="bi bi-record-btn card-icon2"></i>
                <h6>Keep Records</h6>
              </div>
            </div>
            <div class="col-md-3 mb-4">
              <div class="card card-c p-3">
                <i class="bi bi-gift card-icon2"></i>
                <h6>Rewards & Offers</h6>
              </div>
            </div>
          </div>

          {/* section  */}
          <div ref={sectionRefs["FEATURES"]} class="container">
            <div class="credit-card-section">
              <h2>Features & Benefits of Credit Cards</h2>
              <p>
                The credit card segment continues to grow universally as
                innovative contenders enter the space with fresh and advanced
                features. Get a look at the basic features.
              </p>
              <div class="credit-card-features">
                <ul>
                  <li>
                    <b>Credit Limit:</b> Credit Limit refers to the maximum
                    amount you can use through your credit card at a given point
                    of time. You are liable to be charged a fee on exceeding the
                    given credit limit. Credit Limits may change from month to
                    month based on purchase and payment habits.
                  </li>
                  <li>
                    <b>Balance:</b> The balance on your credit card represents
                    the total amount you owe. This includes purchases, finance
                    charges, and fees. You may check your balance online, or by
                    calling customer service.
                  </li>
                  <li>
                    <b>APR:</b> APR refers to the term Annual Percentage Rate,
                    an interest rate applicable to the balance you carry forward
                    past the grace period.
                  </li>
                  <li>
                    <b>Grace Period:</b> Grace Period refers to the period of
                    time you are allowed to repay your balance in full before
                    being charged a fee. Typically, balance transfers and cash
                    advances do not have grace periods.
                  </li>
                  <li>
                    <b>Credit Card Fees:</b> The most common fees include annual
                    fees, finance charges, late fees, and over-the-limit fees.
                    You may avoid certain fees based on how you use your card,
                    for example by making credit card repayments on time.
                  </li>
                </ul>
              </div>

              <div
                ref={sectionRefs["ELIGIBILITY"]}
                class="credit-card-eligibility"
              >
                <div className="row">
                  <div class="col-md-9 mb-4">
                    <h2>Credit Card Eligibility and Documents</h2>
                    <p>
                      Read on to know the criteria required to apply for our
                      Credit Card.
                    </p>
                  </div>
                  <div class="col-md-3 mb-4">
                    <button type="button text" class="btn btn-primary">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* section */}

          <div class="container">
            <div class="credit-card-section">
              <h2>Credit Card Eligibility</h2>
              <p>
                Credit card eligibility refers to the criteria that an
                individual must meet in order to qualify for a credit card
                issued by a financial institution. These criteria can vary
                between different credit card issuers, but they generally
                include factors such as:
              </p>
              <ul>
                <li>
                  <b>Age:</b> Most credit card issuers require applicants to be
                  a certain age, typically 18 or older. Some may have a higher
                  age requirement.
                </li>
                <li>
                  <b>Income:</b> Credit card issuers often have a minimum income
                  requirement to ensure that applicants have the means to repay
                  the credit card debt.
                </li>
                <li>
                  <b>Credit Score:</b> A good credit score is important for
                  credit card eligibility. A higher credit score indicates a
                  history of responsible credit behavior and makes you more
                  likely to be approved for a credit card with favorable terms.
                </li>
                <li>
                  <b>Residential Status:</b> Depending on the issuer, you might
                  need to provide proof of your current address or residency.
                </li>
              </ul>
              <p>
                It's important to note that meeting these eligibility criteria
                does not guarantee approval for a credit card. The final
                decision rests with the credit card issuer based on their
                assessment of your application and creditworthiness.
                Additionally, different credit cards may have different
                eligibility criteria and features, so it's a good idea to
                carefully review the terms and conditions of the credit card
                you're interested in before applying.
              </p>

              <h2 ref={sectionRefs["DOCUMENTS"]}>
                Documents Required to Apply for a Credit Card
              </h2>
              <p>
                The documents needed to apply for a credit card can differ based
                on the issuing institution. However, the following are generally
                the frequently requested documents you would likely need to
                provide during the credit card application process:
              </p>
              <ol>
                <li>
                  <b>Identity Proof:</b> You'll need documents like your Aadhaar
                  Card, PAN card, Driver's License, Passport, or Voter's ID to
                  verify your identity.
                </li>
                <li>
                  <b>Address Proof:</b> You'll need to submit documents such as
                  an Electricity bill, Telephone bill, Aadhaar Card, or other
                  valid proof of your residential address.
                </li>
                <li>
                  <b>Annual ITR (Self-Employed):</b> For those who are
                  self-employed or have alternative income sources, providing
                  your annual Income Tax Returns (ITR) might be necessary to
                  demonstrate your financial status.
                </li>
                <li>
                  <b>Latest Salary Slips:</b> If you are a salaried individual,
                  submitting your recent salary slips can help demonstrate your
                  income and repayment capacity.
                </li>
              </ol>
            </div>
          </div>
          <div ref={sectionRefs["REVIEWS"]}>
            <LoanReview title={"Credit card"} />
          </div>

          <div ref={sectionRefs["FAQ's"]}>
            <Faq mainData={mainData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreditCard;
