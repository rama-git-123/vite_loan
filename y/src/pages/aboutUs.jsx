import { Link, useLocation } from "react-router-dom";
import Breadcrumb from "../components/breadcrumb/breadcrumb";
import clientImageIcon from "../assets/images/image-111.webp";
import clientImageIcon2 from "../assets/images/image-222.webp";
import clientImage from "../assets/images/about-page-intro.webp";
import authorImage from "../assets/images/founder.jpg";
import Faq from "../components/faq/faq";
import "./aboutus.scss";
const AboutUs = ({ mainData }) => {
  const location = useLocation();
  console.log("location", location);

  return (
    <div className="about-us">
       <Breadcrumb location={location} page={"About us"} />
      <div className="container">
        <div class="container mt-5">
          <div class="text-center mb-5">
            <h1>Who Are We?</h1>
            <p class="text-muted">
              INDIA'S LEADING LOAN DISTRIBUTION CHANNEL COMPANY
            </p>
            <p>
              About Us Established in 2024, My Scope has emerged as a
              dynamic and trustworthy financial institution, dedicated to
              providing comprehensive financial solutions across India. Under
              the visionary leadership of our Chairman, Bhabani Prasad Das
              Mahapatra, we specialize in offering a wide range of secured and
              unsecured loan products tailored to meet diverse needs. As a
              leading and rapidly growing NBFC (Non-Banking Financial Company)
              and DSA (Direct Selling Agent) with a PAN-India presence, we are
              committed to delivering innovative financial services to
              individuals and businesses alike.
            </p>
            <p>
              Our expertise extends beyond loans, offering robust investment
              solutions such as Systematic Investment Plans (SIP), Mutual Funds
              (MF), Fixed Deposits (FD), Recurring Deposits (RD), Life Insurance
              (LI), General Insurance (GI), and Health Insurance (HI). At
              My Scope, we aim to empower our clients by simplifying
              financial complexities and delivering personalized solutions. With
              a foundation of transparency, integrity, and customer
              satisfaction, we are setting new benchmarks in the financial
              services industry, ensuring financial stability and growth for
              all.
            </p>
          </div>

          <div class="row text-center">
            <div class="col-md-3 mb-4">
              <div class="card shadow border-0">
                <div class="card-body">
                  <h5 class="card-title text-danger">My Scope</h5>
                  <p class="card-text">
                    Your one-stop shop for comprehensive financial solutions.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-3 mb-4">
              <div class="card shadow border-0">
                <div class="card-body">
                  <h5 class="card-title text-danger">Service Offered</h5>
                  <p class="card-text">
                    Home Loans, Personal Loans, Credit Cards, Business Loans,
                    Balance Transfers And More.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-3 mb-4">
              <div class="card shadow border-0">
                <div class="card-body">
                  <h5 class="card-title text-danger">Nationwide Reach</h5>
                  <p class="card-text">
                    Serving clients in 100+ cities across India.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-3 mb-4">
              <div class="card shadow border-0">
                <div class="card-body">
                  <h5 class="card-title text-danger">Expertise</h5>
                  <p class="card-text">
                    Founded by financial professionals with 5+ years of
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="row align-items-center mt-5">
            <div class="col-md-7">
              <div class="d-flex align-items-start mb-4">
                <div class="icon-circle bg-primary text-white me-3">
                  <img src={clientImageIcon} />
                </div>
                <div>
                  <h5>Client Trust</h5>
                  <p>Serving over 1 million satisfied clients.</p>
                </div>
              </div>
              <div class="d-flex align-items-start mb-4">
                <div
                  class="icon-circle text-white"
                  style={{ marginRight: "15px" }}
                >
                  <img src={clientImageIcon2} />
                </div>
                <div className="innovative">
                  <h5>Innovative Technology</h5>
                  <p>
                    Utilize our proprietary Loan Calculator for tailored loan
                    options based on market trends. Connect with us to make
                    informed financial decisions and realize your dreams!
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-5">
              <img
                src={clientImage}
                alt="Teamwork Illustration"
                class="img-fluid"
              />
            </div>
          </div>

          <div class="mt-5">
            <h3>Benefits</h3>
            <div class="d-flex flex-wrap gap-2 mt-3">
              <span class="badge bg-subtle text-dark shadow-sm px-3 py-2">
                Improved Readability
              </span>
              <span class="badge bg-light text-dark shadow-sm px-3 py-2">
                Enhanced Clarity
              </span>
              <span class="badge bg-light text-dark shadow-sm px-3 py-2">
                Easy Navigation
              </span>
              <span class="badge bg-light text-dark shadow-sm px-3 py-2">
                Visual Appeal
              </span>
              <span class="badge bg-light text-dark shadow-sm px-3 py-2">
                Highlighting Key Services
              </span>
            </div>
          </div>
        </div>

        {/* second section */}
        <div class="message-section">
          <div class="container ">
            <div class="row align-items-center ">
              <div class="col-md-4 text-center">
              <img src={authorImage} />
              </div>

              <div class="col-md-8">
                <h3 class="text-primary">
                  We Empower Our Clients by Giving Right Financial Advice
                </h3>
                <p class="border-start border-3 ps-3 border-danger mt-3">
                  “Our value, motto & mission remains to instil the right
                  financial knowledge among our clients and bestow the finest
                  services to individuals seeking credit aid. Leveraging upon
                  new-age technologies, we endeavour to create a financial
                  environment where we can serve a large segment of the
                  population. With the mission to ‘help you borrow right,’ our
                  core aim remains to impart principled information and bridge
                  the gap between the credit-seeking individuals and authentic
                  lenders.”
                </p>
                <p class="fw-bold text-danger mb-0">Bhabani Prasad Das Mohapatra</p>
                <p class="text-muted">Founder of Ram balram Finserv</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row text-center margin-t-5">
          <div class="col-md-3 mb-4">
            <div class="card2 shadow-sm border-0 h-100">
              <div class="card-body">
                <div class="icon-circle bg-light text-primary mb-3 mx-auto">
                  <i class="bi bi-trophy-fill fs-1"></i>
                </div>
                <h3 class="card-title2">5+</h3>
                <p class="card-text2 text-muted">
                  Years of financial expertise
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-3 mb-4">
            <div class="card2 shadow-sm border-0 h-100">
              <div class="card-body">
                <div class="icon-circle bg-light text-danger mb-3 mx-auto">
                  <i class="bi bi-hand-index-fill fs-1"></i>
                </div>
                <h5 class="card-title2">50+</h5>
                <p class="card-text2 text-muted">Partner Banks & NBFC’s</p>
              </div>
            </div>
          </div>

          <div class="col-md-3 mb-4">
            <div class="card2 shadow-sm border-0 h-100">
              <div class="card-body">
                <div class="icon-circle bg-light text-primary mb-3 mx-auto">
                  <i class="bi bi-geo-alt-fill fs-1"></i>
                </div>
                <h5 class="card-title2">40+</h5>
                <p class="card-text2 text-muted">Reach in Cities</p>
              </div>
            </div>
          </div>

          <div class="col-md-3 mb-4">
            <div class="card2 shadow-sm border-0 h-100">
              <div class="card-body">
                <div class="icon-circle bg-light text-danger mb-3 mx-auto">
                  <i class="bi bi-people-fill fs-1"></i>
                </div>
                <h5 class="card-title2">1000 CR+</h5>
                <p class="card-text2 text-muted">Successful Disbursal</p>
              </div>
            </div>
          </div>
        </div>
        <div className="margin-b-2">
          <Faq mainData={mainData} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
