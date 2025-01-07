import "./footer.scss";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer class="bg-darkk text-white pt-5 pb-4 footer-bg">
      <div class="container text-center text-md-start">
        <div class="row">
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <p>
              Your company's brief description goes here. Share your mission,
              vision, or tagline to engage your visitors.
            </p>
            <Link className="navbar-brand" to="/">
              <img src={logo} width="200" />
            </Link>
          </div>

          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold">Quick Links</h6>
            <ul class="list-unstyled">
              <li>
                <a href="#" class="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#" class="text-white text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a href="#" class="text-white text-decoration-none">
                  Services
                </a>
              </li>
              <li>
                <a href="#" class="text-white text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 class="text-uppercase fw-bold">Contact</h6>
            <p>
              <i class="fas fa-home me-2"></i> 123 Main Street, City, Country
            </p>
            <p>
              <i class="fas fa-envelope me-2"></i> info@company.com
            </p>
            <p>
              <i class="fas fa-phone me-2"></i> + 123 456 789
            </p>
          </div>

          <div class="col-md-3 col-lg-3 col-xl-2 mx-auto mb-md-0 mb-4">
            <h6 class="text-uppercase fw-bold">Follow Us</h6>
            <a href="#" class="text-white me-4">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="text-white me-4">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="text-white me-4">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="text-white me-4">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="text-center p-3">
        © {currentYear} Daitapati Finance. All Rights Reserved.
      </div>
    </footer>
  );
};
export default Footer;
