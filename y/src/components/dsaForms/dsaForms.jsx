import React from "react";
import { Link } from "react-router-dom";
import "./dsaForms.scss";
import dsaImage from "../../assets/images/myscop-image.webp";
const DSAForms = ({ title }) => {
  console.log("location>>>", location);

  return (
    <>
      <div class="container my-5">
        <div class="row">
          <div class="col-lg-7 col-md-12">
            <h2 class="mb-3">We are India’s Leading {title} Loan DSA Agent</h2>
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
    </>
  );
};

export default DSAForms;
