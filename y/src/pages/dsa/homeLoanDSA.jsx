import Breadcrumb from "../../components/breadcrumb/breadcrumb";
import dsaImage from "../../assets/images/myscop-image.webp";
import DSAFaq from "../../components/dsaFaq/dsaFaq";
import Faq from "../../components/faq/faq";
import "./dsa.scss";
const HomeLoanDSA = ({ mainData }) => {
  return (
    <div>
      <Breadcrumb location={location} page={"Home Loan DSA"} />
      <div class="container my-5">
        <div class="row">
          <div class="col-lg-7 col-md-12">
            <h2 class="mb-3">
              Who can Become a Home Loan DSA Partner with Ruloans?
            </h2>
            <p class="mb-4">
              Earning Opportunity for all existing agents with My scope Loan
              Partner Program
            </p>
            <form>
              <div class="row g-3">
                <div class="col-md-4">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div class="col-md-4">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Middle Name"
                  />
                </div>
                <div class="col-md-4">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Last Name"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="PAN Number"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <input
                    type="tel"
                    class="form-control"
                    placeholder="Mobile Number"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <select class="form-select" required>
                    <option selected disabled>
                      Select Profession
                    </option>
                    <option>Employee</option>
                    <option>Self-Employed</option>
                    <option>Freelancer</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <select class="form-select" required>
                    <option selected disabled>
                      Select State
                    </option>
                    <option>Maharashtra</option>
                    <option>Delhi</option>
                    <option>Karnataka</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <select class="form-select" required>
                    <option selected disabled>
                      Select City
                    </option>
                    <option>Mumbai</option>
                    <option>Bangalore</option>
                    <option>Delhi</option>
                  </select>
                </div>
                <div class="col-12">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" required />
                    <label class="form-check-label">
                      I agree to the <a href="#">terms & conditions</a> and{" "}
                      <a href="#">privacy policy</a>.
                    </label>
                  </div>
                </div>
                <div class="col-12">
                  <button type="submit" class="btn submit-btn w-100">
                    SUBMIT
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div class="col-lg-5 col-md-12 mt-5 mt-lg-0 dsa-image">
            <img src={dsaImage} />
          </div>
        </div>
      </div>
      {/* section 2 */}
      <div class="container my-5 ">
        <h2>Who can Become a Home Loan DSA Partner with My Scope?</h2>
        <p>
          Enhance your professional status. Fire up your entrepreneurial
          instincts and drive into victory! Any person with interpersonal skills
          and a passion for success can be a part of Team My scope.
        </p>
        <div class="container my-5">
          <div class="row g-3">
            <div class="col-lg-2 col-md-4 col-sm-6">
              <div class="profession-card">
                <i class="bi bi-person-fill profession-icon"></i>
                <h6>Loan Agent</h6>
              </div>
            </div>

            <div class="col-lg-2 col-md-4 col-sm-6">
              <div class="profession-card">
                <i class="bi bi-bank profession-icon"></i>
                <h6>Ex-Banker</h6>
              </div>
            </div>

            <div class="col-lg-2 col-md-4 col-sm-6">
              <div class="profession-card">
                <i class="bi bi-graph-up-arrow profession-icon"></i>
                <h6>Financial Analyst</h6>
              </div>
            </div>

            <div class="col-lg-2 col-md-4 col-sm-6">
              <div class="profession-card">
                <i class="bi bi-piggy-bank-fill profession-icon"></i>
                <h6>Mutual Fund Agent</h6>
              </div>
            </div>

            <div class="col-lg-2 col-md-4 col-sm-6">
              <div class="profession-card">
                <i class="bi bi-calculator-fill profession-icon"></i>
                <h6>Chartered Accountant</h6>
              </div>
            </div>

            <div class="col-lg-2 col-md-4 col-sm-6">
              <div class="profession-card">
                <i class="bi bi-building profession-icon"></i>
                <h6>Builder</h6>
              </div>
            </div>
          </div>
        </div>
        <h4>About Loan Agent Partner</h4>
        <p>
          You're a Loan Agent who is knowledgeable about all types of loans
          offered by the financial institutions you represent and can advise
          people on the best options. Get your Ruloans Loan Agent Partner
          Advantage now and advise people on how to finance their dreams!
        </p>
        <h4>Help finance your clients' futures now</h4>
        <div className="dsa">
          <ul>
            <li>Personal Loans</li>
            <li>Home Loans</li>
            <li>Business Loans</li>
            <li>Auto Loans and More</li>
          </ul>
          <button class="btn submit-btn">Beacome a Partner</button>
        </div>
      </div>
      {/* section 3 */}
      <div className="eligibility">
        <div className="container">
          <h2>
            What Are The Eligibility Criteria For The My Scope Home Loan DSA
            Registration Process?
          </h2>
          <p>
            My Scope Distribution Services Private Limited (RDSPL), a registered
            DSA, has partnerships with more than 265 leading Banks and NBFCs to
            offer loans in more than 2000 cities in India. Ruloans retail
            portfolio includes Personal Loans, Business Loans, Home Loans, Loan
            against Property or Mortgage Loans, New Car Loan , Used Car Loan &
            Car Refinance, Credit Cards, and more. Eligibility criteria to
            operate as a Loan DSA Partner or Loan DSA Franchise are as follows:
          </p>
          <p>
            To Become a DSA Loan Agent Registration, you need to meet the
            following eligibility criteria:
          </p>
          <h6>Age</h6>
          <p>You must be over 25 years of age.</p>
          <h6>Nationality</h6>
          <p>You must be a Resident Citizen of India</p>
          <h6>Educational Qualifications</h6>
          <p>
            There are no educational requirements to qualify as a My Scope Loan
            DSA Partner
          </p>
          <h6>Professional Qualifications</h6>
          <p>
            Whether you are a working professional, or a business owner, you are
            welcome to register as a My Scope Loan DSA Franchise
          </p>
        </div>
      </div>
      {/* section 4 */}
      <div className="container my-5">
        <h2>Process Of Home Loan DSA Registration</h2>
        <p>
          Registering to partner with Ruloans makes for a good start to a
          successful DSA career. This guide will walk you through each Online
          Loan DSA Registration step as you begin and grow your business.
        </p>
        <h5>
          Here is the step-by-step guide for Loan DSA Partner Registration
        </h5>
        <h5>Apply</h5>
        <p>
          Apply Click on "Apply Now", fill in the Personal Loan DSA Registration
          details, and submit along with the documents.
        </p>
        <h5>Expect a Call</h5>
        <p>
          The My scope support team will call you to guide and coordinate a
          meeting with you.
        </p>
        <h5>Meet</h5>
        <p>
          At the meeting, a Ruloans Manager will explain all you need to know,
          including the process to follow while generating leads for the
          Personal Loan DSA.
        </p>
        <h5>Sign DSA Agreement</h5>
        <p>
          After signing the DSA agreement, you will become a Ruloans Partner and
          can start earning instantly.
        </p>
        <p>
          Once you're comfortable with the processes and procedures, an
          agreement will be inked between you and My scope. Once signed and
          stamped, you will be an official Ruloans Loan DSA Partner running a
          Loan DSA Franchise.
        </p>
        <button class="btn submit-btn">Apply Now</button>
      </div>
      {/* section 5 */}
      <div className="container my-5 document">
        <h2>Documents Required to Become a Personal Loan DSA</h2>
        <p>
          Here is the list of documents required to become a Personal Loan DSA:
        </p>
        <ul>
          <li>Register with your mobile number.</li>
          <li>Soft copies of PAN card, Aadhaar, passport, or voter ID.</li>
          <li>Two passport-size photographs.</li>
          <li>GST registration for companies (if applicable).</li>
          <li>
            Proof of employment:
            <li>Salary slips if employed</li>
            <li>Account statements and address proof if business is running</li>
            <li>Invoices and financial statements if self-employed</li>
          </li>
          <li>Account details: Your Bank Account Cancelled Cheque.</li>
          <li>
            Registration form: Fill up the Personal Loan DSA Registration form
            with all your personal and financial details.
          </li>
        </ul>
      </div>
      {/* section 6 */}
      <div className="container my-5 pertners">
        <h2>Why Partner With Ruloans? - Benefits And Perks</h2>
        <p>
          My scope Distribution Services Private Limited (RDSPL), is your
          premier destination for all types of loans, Credit Cards, Fixed
          Deposits, and Insurance across 40+ cities in India to, catering to 5
          million under-served borrowers. With over 25 years of experience in
          financial product distribution, our extensive network includes 265+
          partner banks and NBFCs, and our annual business surpasses Rs 1,000
          crores. This impressive track record highlights our successful journey
          in the finance world.
        </p>
        <p>
          If you're looking for a Personal Loan DSA Near You, partnering with
          Ruloans as a Loan DSA Partner could be your ideal choice. Here's why
          you should consider Online Loan DSA Registration with Ruloans: We
          collaborate with industry leaders to drive and fulfill upwardly mobile
          financial aspirations!
        </p>
        <ul>
          <li>
            <i class="bi bi-arrow-right-circle"></i>Investment Free
          </li>
          <li>
            <i class="bi bi-arrow-right-circle"></i>Instant Pay-outs
          </li>
          <li>
            <i class="bi bi-arrow-right-circle"></i>High Potential Industry
          </li>
          <li>
            <i class="bi bi-arrow-right-circle"></i>Guaranteed Success
          </li>
          <li>
            <i class="bi bi-arrow-right-circle"></i>Channel Partner Recognition
          </li>
          <li>
            <i class="bi bi-arrow-right-circle"></i>Easy Process
          </li>
        </ul>
        <p>
          We partner with industry front-runners to jointly deploy and lead
          upwardly mobile financial aspirations!
        </p>
      </div>
      {/* section 7 */}
      <div className="container my-5 document">
        <h2>Features And Earnings of Home Loan DSA Program</h2>
        <p>
          As a My Scope Business Partner in our Loan DSA Partner program, you'll
          have the opportunity to work with Personal Loan Agents Near You. By
          becoming a Personal Loan DSA franchise, you'll receive training from
          top-notch coaches and specialists. Supported by advanced digital
          technology and expert back-end support and getting a chance to work
          with Loan DSA, our Personal Loan DSA Apply online program ensures that
          you benefit significantly from our DSA program.
        </p>
        <div class="container my-5">
          <div class="row text-center">
            <div class="col-md-3">
              <div class="card border-0 shadow-sm">
                <div class="card-body">
                  <i class="bi bi-person-circle fs-1 mb-3 text-primary"></i>
                  <h6 class="card-title">Identify Clients</h6>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="card border-0 shadow-sm">
                <div class="card-body">
                  <i class="bi bi-check-circle fs-1 mb-3 text-success"></i>
                  <h6 class="card-title">Check and Verify Leads</h6>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="card border-0 shadow-sm">
                <div class="card-body">
                  <i class="bi bi-telephone fs-1 mb-3 text-warning"></i>
                  <h6 class="card-title">Help Pick Finance Provider</h6>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="card border-0 shadow-sm">
                <div class="card-body">
                  <i class="bi bi-clock fs-1 mb-3 text-danger"></i>
                  <h6 class="card-title">Expect Early Loan Disbursals</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p>
          Trained to be a professional Ruloans Agent by first-class focused
          coaches and specialists supported by effective and superior digital
          backend technology and experts, you benefit from our DSA program
          through Online Loan DSA Registration as follows:
        </p>
      </div>
      {/* section 8 */}
      <div className="container my-5 dsafaq">
        <h2>Home Loan DSA FAQs</h2>
        <DSAFaq mainData={mainData} />
        <p>
          Join us today for a rewarding career in the financial services
          industry!
        </p>
        <button class="btn submit-btn">Apply Now</button>
      </div>
      {/* section 9 */}
      <div className="container my-5">
        <Faq mainData={mainData} />
      </div>
    </div>
  );
};
export default HomeLoanDSA;
