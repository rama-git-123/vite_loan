import { Link, useLocation } from "react-router-dom";
import Breadcrumb from "../components/breadcrumb/breadcrumb";
const ContactUs = () => {
  const location = useLocation();
  return (
    <div className="container contct-us margin-t-2">
      <Breadcrumb location={location} page={"contact us"} />
      <div class="container my-5">
        <div class="alert alert-warning text-center" role="alert">
          <strong>Note:</strong> We do not charge for our services to customers.
          If any Ruloans personnel take any charges other than bank fees, please
          immediately contact our toll-free number or write to us.
        </div>

        <div class="row">
          <div class="col-md-6">
            <form>
              <div class="row g-3">
                <div class="col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Name"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email Id"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Mobile Number"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="State"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <select class="form-select" required>
                    <option selected disabled>
                      City
                    </option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Bangalore">Bangalore</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <select class="form-select" required>
                    <option selected disabled>
                      Reason to Connect
                    </option>
                    <option value="Inquiry">Inquiry</option>
                    <option value="Complaint">Complaint</option>
                    <option value="Feedback">Feedback</option>
                  </select>
                </div>
                <div class="col-12">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div class="col-12">
                  <textarea
                    class="form-control"
                    rows="3"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div class="col-12 text-center">
                  <button type="submit" class="btn btn-danger w-100">
                    SEND MESSAGE
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div class="col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160996419!2d72.74109923708287!3d19.082522348881803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63a37a8f8f1%3A0x88e08038f23f2e0a!2sAndheri%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1684244670954!5m2!1sen!2sin"
              width="100%"
              height="400"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div class="row text-center mt-4">
          <div class="col-md-3">
            <p>
              <strong>WORKING HOURS</strong>
            </p>
            <p>MON-SAT</p>
            <p>10:00 AM - 07:00 PM</p>
          </div>
          <div class="col-md-3">
            <p>
              <strong>EMAIL</strong>
            </p>
            <p>Phone-myscope435@gmail.com</p>
          </div>
          <div class="col-md-3">
            <p>
              <strong>ADRESS</strong>
            </p>
            <p>
              307, 3rd Floor, Nexus Esplanade Mall, Rasulgarh,
              Bhubaneshwar-751010
            </p>
          </div>
          <div class="col-md-3">
            <p>
              <strong>PHONE</strong>
            </p>
            <p>9861346171</p>
            <p>9861346171</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
