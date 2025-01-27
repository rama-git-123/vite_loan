import Breadcrumb from "../../components/breadcrumb/breadcrumb";
import { Link, useLocation } from "react-router-dom";
import InsuranceContactForm from "../../components/insuranceContactForm/insuranceContactForm";
import Faq from "../../components/faq/faq";
const GeneralInsuarance = ({ mainData }) => {
  const location = useLocation();
  return (
    <div className="all-insurance-container">
      <Breadcrumb
        location={location}
        page={"General Insurance"}
        //subPage={"All Insurance"}
      />
      <div className="container general-insurance">
        <InsuranceContactForm title={"General Insurance"} />
        {/* <h4 className="margin-t-2 margin-b-2">Health Insurance Features</h4> */}
        <div class="feature-section">
          <div class="section-title">
            <h4 className="margin-t-2 margin-b-2">
              General Insurance Features
            </h4>
          </div>

          <div class="feature-icons">
            <div class="feature-icon">
              <i class="bi bi-coin"></i>
              <p>Multi-purpose Professional</p>
            </div>
            <div class="feature-icon">
              <i class="bi bi-coin"></i>
              <p>Higher Insurance Amount</p>
            </div>
            <div class="feature-icon">
              <i class="bi bi-coin"></i>
              <p>Pocket-Friendly Interest Rates</p>
            </div>
            <div class="feature-icon">
              <i class="bi bi-coin"></i>
              <p>Easy Processing</p>
            </div>
          </div>
        </div>
        <div>
          <h4 className="margin-t-2 margin-b-2">What is General Insurance?</h4>
          <p>
            General insurance is like a shield for things other than your health
            or life. It covers your car, home, travel, and more. If something
            bad happens, like an accident, theft, or damage, the insurance
            company helps you pay for the repairs or replacements. It's like
            having a backup plan for unexpected events that could cost you a lot
            of money.
          </p>
          <h4 className="margin-t-2 margin-b-2">Type of General Insurance:</h4>
          <ul>
            <li>
              <strong>Motor Insurance:</strong> Coverage for your vehicle,
              protecting you from financial losses due to accidents, theft, or
              damage.
            </li>
            <li>
              <strong>Health Insurance:</strong> Covers your medical expenses,
              helping you afford healthcare services and treatments when you're
              sick or injured.
            </li>
            <li>
              <strong>Travel Insurance:</strong> Offers coverage for unexpected
              events during your trips, including trip cancellations, medical
              emergencies, lost luggage, and more.
            </li>
            <li>
              <strong>Home Insurance:</strong> Provides financial protection for
              your home and belongings against events like theft, fire, and
              natural disasters.
            </li>
            <li>
              <strong>Marine Insurance:</strong> Covers losses and damages to
              ships and cargo during sea voyages, providing financial protection
              for maritime activities.
            </li>
            <li>
              <strong>Rural Insurance:</strong> Provides coverage for
              agricultural assets, livestock, and rural properties, protecting
              farmers and rural communities from financial losses due to various
              risks.
            </li>
            <li>
              <strong>Mobile Insurance:</strong> Covers the cost of repairing or
              replacing your smartphone if it gets damaged, stolen, or lost.
            </li>
            <li>
              <strong>Bicycle Insurance:</strong> Provides coverage for your
              bicycle against theft, damage, and accidents.
            </li>
            <li>
              <strong>Commercial Insurance:</strong> Coverage for businesses,
              safeguarding them from financial losses due to property damage,
              liability, business interruptions, and other risks specific to
              their industry and operations.
            </li>
          </ul>
        </div>
        <div class="section-content">
          <div class="section-title">
            <h4 className="margin-t-2 margin-b-2">Best Services</h4>
          </div>

          <div class="best-services">
            <div class="service-icon">
              <i class="bi bi-coin"></i>
              <p>24×7 Support</p>
              <p>Client is our most important priority</p>
            </div>
            <div class="service-icon">
              <i class="bi bi-coin"></i>
              <p>Easy Claim System</p>
              <p>Express your desires and needs to us</p>
            </div>
            <div class="service-icon">
              <i class="bi bi-coin"></i>
              <p>Easy installments</p>
              <p>Less complicated payment system</p>
            </div>
            <div class="service-icon">
              <i class="bi bi-coin"></i>
              <p>Strongly Secured</p>
              <p>We can secure your precious assets</p>
            </div>
          </div>
        </div>

        <Faq mainData={mainData} />
      </div>
    </div>
  );
};
export default GeneralInsuarance;
