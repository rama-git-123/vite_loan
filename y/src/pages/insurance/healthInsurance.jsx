import Breadcrumb from "../../components/breadcrumb/breadcrumb";
import { Link, useLocation } from "react-router-dom";
import InsuranceContactForm from "../../components/insuranceContactForm/insuranceContactForm";
import Faq from "../../components/faq/faq";
const HealthInsuarance = ({ mainData }) => {
  const location = useLocation();
  return (
    <div className="all-insurance-container margin-t-2">
      <Breadcrumb
        location={location}
        page={"Health Insurance"}
        //subPage={"All Insurance"}
      />
      <div className="container health-insurance">
        <InsuranceContactForm title={"Health Insurance"} />
        {/* <h4 className="margin-t-2 margin-b-2">Health Insurance Features</h4> */}
        <div class="feature-section">
          <div class="section-title">
            <h4 className="margin-t-2 margin-b-2">Health Insurance Features</h4>
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

        <div class="section-content">
          <div class="section-title">
            <h4 className="margin-t-2 margin-b-2">What is Health Insurance?</h4>
          </div>
          <p>
            Health insurance is a type of coverage that helps you manage the
            cost of medical expenses and healthcare services. When you have
            health insurance, the insurance company pays a part or the entire
            amount of your medical bills, depending on the terms of the policy.
            This financial protection ensures that you can access necessary
            medical treatments without having to bear the full financial burden.
            Health insurance plans can cover a range of healthcare services,
            including doctor visits, hospital stays, surgeries, medications, and
            preventive care, depending on the specific plan you choose.
          </p>

          <div class="section-title">
            <h4 className="margin-t-2 margin-b-2">
              Types of Health Insurance:-
            </h4>
          </div>
          <p>
            <b>A. Indemnity Plan</b>
          </p>
          <p>
            An indemnity health insurance plan, also known as a fee-for-service
            plan, gives you the freedom to choose your healthcare providers and
            services. You pay for medical expenses upfront and then submit a
            claim to the insurance company for reimbursement based on the plan's
            coverage limits. This plan offers flexibility but requires managing
            paperwork and higher out-of-pocket costs.
          </p>

          <p>
            <b>B. Fixed Benefit Plan</b>
          </p>
          <p>
            A fixed benefit health insurance plan provides specific pre-defined
            payouts for certain medical events, such as hospitalization,
            surgeries, or critical illnesses. The plan pays out a predetermined
            amount regardless of the actual medical expenses incurred. It offers
            simplicity and helps cover specific costs, but may not cover all
            healthcare expenses.
          </p>
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
        <h4 className="margin-t-2 margin-b-2">
          What Does Health Insurance Cover?
        </h4>
        <ul>
          <li>
            <strong>Hospitalization:</strong> Inpatient hospital stays, room
            charges, surgery costs.
          </li>
          <li>
            <strong>Outpatient Care:</strong> Doctor visits, diagnostics,
            consultations.
          </li>
          <li>
            <strong>Medications:</strong> Prescription drugs and medicines.
          </li>
          <li>
            <strong>Emergency Care:</strong> ER visits, urgent care, ambulance
            services.
          </li>
          <li>
            <strong>Preventive Care:</strong> Vaccinations, screenings, wellness
            check-ups.
          </li>
          <li>
            <strong>Specialist Services:</strong> Specialist consultations,
            therapies, treatments.
          </li>
          <li>
            <strong>Maternity Care:</strong> Prenatal, childbirth, postnatal
            care.
          </li>
          <li>
            <strong>Diagnostic Tests:</strong> Lab tests, X-rays, imaging.
          </li>
          <li>
            <strong>Mental Health:</strong> Therapy, counseling, psychiatric
            care.
          </li>
        </ul>

        <h4 className="margin-t-2 margin-b-2">
          Learn a Few Terms About Health Insurance
        </h4>
        <ul>
          <li>
            <strong>Premium:</strong> The amount you pay for the insurance
            coverage.
          </li>
          <li>
            <strong>Deductible:</strong> The initial amount you pay before
            insurance coverage starts.
          </li>
          <li>
            <strong>Co-payment (Co-pay):</strong> A fixed amount you pay for
            each medical service.
          </li>
          <li>
            <strong>Network:</strong> Approved list of doctors, hospitals, and
            healthcare providers.
          </li>
          <li>
            <strong>Claim:</strong> Request for payment when you use your
            insurance coverage.
          </li>
          <li>
            <strong>Pre-existing Condition:</strong> Health issue existing
            before getting the insurance.
          </li>
          <li>
            <strong>Exclusion:</strong> Situations or treatments not covered by
            the insurance.
          </li>
          <li>
            <strong>Policy Limit:</strong> The maximum amount the insurer will
            pay for a claim.
          </li>
        </ul>
        <Faq mainData={mainData} />
      </div>
    </div>
  );
};
export default HealthInsuarance;
