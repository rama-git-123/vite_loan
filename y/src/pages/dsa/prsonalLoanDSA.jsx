import Breadcrumb from "../../components/breadcrumb/breadcrumb";
const PersonalLoanDSA = () => {
  return (
    <div>
      <Breadcrumb location={location} page={"Personal Loan DSA"} />
      <div class="container">
        <div class="row mt-4">
          <div class="col-lg-8 mx-auto">
            <form>
              <div class="row g-3">
                <div class="col-md-4">
                  <label for="firstName" class="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="firstName"
                    placeholder="First Name"
                  />
                </div>
                <div class="col-md-4">
                  <label for="middleName" class="form-label">
                    Middle Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="middleName"
                    placeholder="Middle Name"
                  />
                </div>
                <div class="col-md-4">
                  <label for="lastName" class="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="lastName"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div class="row g-3 mt-3">
                <div class="col-md-6">
                  <label for="mobileNumber" class="form-label">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="mobileNumber"
                    placeholder="Mobile Number"
                  />
                </div>
                <div class="col-md-6">
                  <label for="panNumber" class="form-label">
                    PAN Number
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="panNumber"
                    placeholder="PAN Number"
                  />
                </div>
              </div>

              <div class="row g-3 mt-3">
                <div class="col-md-6">
                  <label for="email" class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div class="col-md-6">
                  <label for="profession" class="form-label">
                    Select Profession
                  </label>
                  <select class="form-select" id="profession">
                    <option selected>Choose...</option>
                    <option value="1">Salaried</option>
                    <option value="2">Self-Employed</option>
                  </select>
                </div>
              </div>

              <div class="row g-3 mt-3">
                <div class="col-md-6">
                  <label for="state" class="form-label">
                    Select State
                  </label>
                  <select class="form-select" id="state">
                    <option selected>Choose...</option>
                    <option value="1">State 1</option>
                    <option value="2">State 2</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <label for="city" class="form-label">
                    Select City
                  </label>
                  <select class="form-select" id="city">
                    <option selected>Choose...</option>
                    <option value="1">City 1</option>
                    <option value="2">City 2</option>
                  </select>
                </div>
              </div>

              <div class="form-check mt-3">
                <input class="form-check-input" type="checkbox" id="terms" />
                <label class="form-check-label" for="terms">
                  I agree to the <a href="#">terms & conditions</a> and{" "}
                  <a href="#">privacy policy</a>.
                </label>
              </div>

              <div class="d-grid mt-4">
                <button type="submit" class="btn btn-primary btn-lg">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PersonalLoanDSA;
