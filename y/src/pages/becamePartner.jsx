import BecomePartnerImage from "../assets/images/bacome-1.webp";
import BecomePartnerImage1 from "../assets/images/dsa-1.png";
const BeacamePartner = () => {
  return (
    <div className="became-partner-container">
      <div class="container my-5">
        <div class="row align-items-center">
          <div class="col-md-7">
            <h1 class="fw-bold">We are India’s Leading Loan Distributor</h1>
            <p class="mb-4">
              Earning Opportunity for all existing agents with Ruloans Loan
              Partner Program
            </p>
            <form class="row g-3">
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="First Name"
                />
              </div>
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Middle Name"
                />
              </div>
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last Name"
                />
              </div>
              <div class="col-md-6">
                <input
                  type="tel"
                  class="form-control"
                  placeholder="Mobile Number"
                />
              </div>
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Pan Number"
                />
              </div>
              <div class="col-md-6">
                <input type="email" class="form-control" placeholder="Email" />
              </div>
              <div class="col-md-6">
                <select class="form-select">
                  <option selected>Select Profession</option>
                  <option>Loan Agent</option>
                  <option>Financial Analyst</option>
                </select>
              </div>
              <div class="col-md-6">
                <select class="form-select">
                  <option selected>Select State</option>
                  <option>Maharashtra</option>
                  <option>Gujarat</option>
                </select>
              </div>
              <div class="col-md-6">
                <select class="form-select">
                  <option selected>Select City</option>
                  <option>Mumbai</option>
                  <option>Pune</option>
                </select>
              </div>
              <div class="col-12">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" />
                  <label class="form-check-label">
                    I agree to the <a href="#">terms & conditions</a> and{" "}
                    <a href="#">privacy policy</a>.
                  </label>
                </div>
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-danger w-100">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div class="col-md-5">
            <img src={BecomePartnerImage} />
          </div>
        </div>
      </div>
      {/* section -2 */}
      <div class="container my-5">
        <div class="text-center mb-5">
          <h1 class="fw-bold">Online DSA Registration</h1>
          <p class="lead">
            Online DSA registration with Ruloans is your gateway to becoming a
            successful Direct Sales Agent. Partner with India’s leading loan
            distributor, offering a wide range of financial products like home
            loans, business loans, personal loans, loans against property, car
            loans, education loans, gold loans, and insurance products. With 25
            years of experience and a presence in 4,000+ cities, we provide a
            smooth onboarding process and access to advanced tools like our EMI
            Calculator. Be a part of our journey to helping over 4 million
            clients make intelligent financial choices while earning attractive
            commissions.
          </p>
        </div>

        <div class="mb-5">
          <h2 class="fw-bold">Who is a DSA?</h2>
          <p>
            A direct selling agent (DSA) is an efficient link that channels
            communication between financial institutions like banks and
            non-banking financial corporations (NBFCs). DSAs are assigned
            primary duties that are associated with them, and they include:
          </p>
          <div class="row gy-4 align-items-center">
            <div class="col-lg-6 illustration">
              <img src={BecomePartnerImage1} alt="Bank Loan" />
            </div>
            <div class="col-lg-6">
              <div class="row gy-3">
                <div class="col-md-6">
                  <div class="feature-card">
                    <h5>Identifying Potential Customers</h5>
                    <p>
                      Searching and connecting with individuals who need
                      financial services.
                    </p>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="feature-card">
                    <h5>Guiding Borrowers</h5>
                    <p>
                      Educate customers on the merits of co-curricular
                      activities and how to apply for a loan.
                    </p>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="feature-card">
                    <h5>Ensuring Documentation</h5>
                    <p>
                      Ensuring the accuracy and availability of all necessary
                      paperwork.
                    </p>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="feature-card">
                    <h5>Closing Deals</h5>
                    <p>
                      Connect borrowers with lenders and finalize transactions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p>
            DSAs provide an extensive range of financial products, such as
            personal loans, home loans, business loans, loans against property,
            car loans, education loans, credit cards, auto loans, gold loans,
            and many more under one roof. They earn payouts based on loan
            disbursements they facilitate.
          </p>
        </div>
      </div>
      {/* section 3 */}
      <div class="container">
        <div class="partner-section">
          <h2>Who can Become a Partner with Ruloans?</h2>
          <p>
            Enhance your professional status. Fire up your entrepreneurial
            instincts and drive into victory! Any person with interpersonal
            skills and a passion for success can be a part of Team Ruloans.
          </p>

          <div class="partner-options">
            <div class="partner-option">
              <i class="bi bi-gear-wide-connected card-icon2"></i>
              <h5>Loan Agent</h5>
            </div>
            <div class="partner-option">
              <i class="bi bi-gear-wide-connected card-icon2"></i>
              <h5>Ex-Banker</h5>
            </div>
            <div class="partner-option">
              <i class="bi bi-gear-wide-connected card-icon2"></i>
              <h5>Financial Analyst</h5>
            </div>
            <div class="partner-option">
              <i class="bi bi-gear-wide-connected card-icon2"></i>
              <h5>Mutual Fund Agent</h5>
            </div>
            <div class="partner-option">
              <i class="bi bi-gear-wide-connected card-icon2"></i>
              <h5>Chartered Accountant</h5>
            </div>
            <div class="partner-option">
              <i class="bi bi-gear-wide-connected card-icon2"></i>
              <h5>Builder</h5>
            </div>
          </div>
        </div>

        <div class="partner-description">
          <h3>About Loan Agent Partner</h3>
          <p>
            You're a Loan Agent who is knowledgeable about all types of loans
            offered by the financial institutions you represent and can advise
            people on the best options. Get your Ruloans Loan Agent Partner
            Advantage now and advise people on how to finance their dreams!
          </p>
        </div>

        <div class="training-section">
          <h3>What Kind of Training Is Required to Become a DSA?</h3>
          <p>
            Once selected, a DSA loan agent undergoes comprehensive training
            covering:
          </p>
          <ul>
            <li>
              <b>Loan Types</b>: Detailed understanding of different loans,
              interest rates, terms, eligibility criteria, and repayment
              structures.
            </li>
            <li>
              <b>Communication Skills</b>: Enhancing communication for excellent
              sales performance.
            </li>
            <li>
              <b>Customer Rapport</b>: Building trust and dependability with
              potential borrowers.
            </li>
            <li>
              <b>Regulations Knowledge</b>: Learning about RBI regulations and
              other financial institution guidelines to sharpen technical
              skills.
            </li>
          </ul>
          <img src="dsa_training_image.jpg" alt="DSA Training" />
        </div>
      </div>
    </div>
  );
};
export default BeacamePartner;
