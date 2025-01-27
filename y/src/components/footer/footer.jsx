import "./footer.scss";
import logo from "../../assets/images/footer-logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer class="footer">
      <div class="d-flex flex-wrap justify-content-center py-2 border-bottom-1 top-bg">
        <a href="#" class="mx-3">
          DSA Partner
        </a>
        <a href="#" class="mx-3">
          Direct Selling Agent
        </a>
        <a href="#" class="mx-3">
          Credit Card
        </a>
        <a href="#" class="mx-3">
          Car Refinance
        </a>
        <a href="#" class="mx-3">
          DSA Loan
        </a>
        <a href="#" class="mx-3">
          DSA Loan Agent
        </a>
        <a href="#" class="mx-3">
          Personal EMI Calculator
        </a>
        <a href="#" class="mx-3">
          Become Loan DSA
        </a>
      </div>
      <div class="container">
        <div class="row text-center text-md-start py-4">
          <div class="col-md-3">
            <img src={logo} width="200" />
            <p>
              Address-307, 3rd Floor, Nexus Esplanade Mall, Rasulgarh,
              Bhubaneshwar-751010
            </p>
          </div>

          <div class="col-md-2">
            <h6 class="fw-bold">Company</h6>
            <ul class="list-unstyled">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">Grow With Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Data Storage Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>

          <div class="col-md-2">
            <h6 class="fw-bold">Insurance</h6>
            <ul class="list-unstyled">
              <li>
                <a href="#">Life Insurance</a>
              </li>
              <li>
                <a href="#">Health Insurance</a>
              </li>
              <li>
                <a href="#">General Insurance</a>
              </li>
            </ul>
          </div>

          <div class="col-md-2">
            <h6 class="fw-bold">Loans</h6>
            <ul class="list-unstyled">
              <li>
                <a href="#">Home Loan</a>
              </li>
              <li>
                <a href="#">Personal Loan</a>
              </li>
              <li>
                <a href="#">Business Loan</a>
              </li>
              <li>
                <a href="#">Car Loan</a>
              </li>
              <li>
                <a href="#">Car Refinance</a>
              </li>
              <li>
                <a href="#">Used Car Loan</a>
              </li>
            </ul>
          </div>

          <div class="col-md-2">
            <h6 class="fw-bold">DSA</h6>
            <ul class="list-unstyled">
              <li>
                <a href="#">Personal Loan DSA</a>
              </li>
              <li>
                <a href="#">Home Loan DSA</a>
              </li>
              <li>
                <a href="#">Business Loan DSA</a>
              </li>
              <li>
                <a href="#">Loan Against Property DSA</a>
              </li>
              <li>
                <a href="#">Education Loan DSA</a>
              </li>
              <li>
                <a href="#">Auto Loan DSA</a>
              </li>
              <li>
                <a href="#">Credit Card DSA</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-between align-items-center py-3 border-top-1 bottom-bg">
        <p class="mb-0">© {currentYear} My scope. All Rights Reserved.</p>
        <p class="mb-0">
          Contact : <a href="#">9861346171</a>
        </p>
        <div class="social-icons">
          <a href="#" class="bi bi-whatsapp"></a>
          <a href="#" class="bi bi-x"></a>
          <a href="#" class="bi bi-facebook"></a>
          <a href="#" class="bi bi-instagram"></a>
          <a href="#" class="bi bi-youtube"></a>
          <a href="#" class="bi bi-envelope"></a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
