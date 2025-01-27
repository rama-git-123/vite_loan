import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./scss/dsa.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import data from "../src/data/data.json";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Navbar from "./components/navbar/navbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import MainContainer from "./container/container";
import Footer from "./components/footer/footer";
import PesonalLoan from "./pages/loans/personalLoan";
import CreditCard from "./pages/creditCard";
import BeacamePartner from "./pages/becamePartner";
import AllInsuarance from "./pages/insurance/allInsurance";
import LifeInsuarance from "./pages/insurance/lifeInsurance";
import HealthInsuarance from "./pages/insurance/healthInsurance";
import GeneralInsuarance from "./pages/insurance/generalInsurance";
import HomeLoan from "./pages/loans/homeLoan";
import BusinessLoan from "./pages/loans/businessLoan";
import LoanAgainstProprties from "./pages/loans/loanAgainastProprties";
import CarLoan from "./pages/loans/carLoan";
import EducationLoan from "./pages/loans/educationLoan";
import GoldLoan from "./pages/loans/goldLoan";
import PersonalLoanDSA from "./pages/dsa/prsonalLoanDSA";
import HomeLoanDSA from "./pages/dsa/homeLoanDSA";
import BusinessLoanDSA from "./pages/dsa/businessLoanDSA";
import LoanAgainstPropertiesDSA from "./pages/dsa/loanAgainstPropertiesDSA";
import EducationLoanDSA from "./pages/dsa/educationLoanDSA";
import AutoLoanDSA from "./pages/dsa/autoLoanDSA";
import CreditCardDSA from "./pages/dsa/creditCardDSA";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <MainContainer mainData={data} />
        <Routes>
          <Route path="/" element={<Home mainData={data} />} />
          <Route path="/about-us" element={<AboutUs mainData={data} />} />
          <Route
            path="/credit-cards"
            element={<CreditCard mainData={data} />}
          />
          <Route
            path="/become-a-partner"
            element={<BeacamePartner mainData={data} />}
          />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route
            path="loans/personal-loan"
            element={<PesonalLoan mainData={data} />}
          />
          <Route
            path="loans/home-loan"
            element={<HomeLoan mainData={data} />}
          />
          <Route
            path="loans/business-loan"
            element={<BusinessLoan mainData={data} />}
          />
          <Route
            path="loans/loan-against-property"
            element={<LoanAgainstProprties mainData={data} />}
          />
          <Route path="loans/car-loan" element={<CarLoan mainData={data} />} />
          <Route
            path="loans/education-loan"
            element={<EducationLoan mainData={data} />}
          />
          <Route
            path="loans/gold-loan"
            element={<GoldLoan mainData={data} />}
          />
          <Route
            path="dsa/personal-loan-dsa"
            element={<PersonalLoanDSA mainData={data} />}
          />
          <Route
            path="dsa/home-loan-dsa"
            element={<HomeLoanDSA mainData={data} />}
          />
          <Route
            path="dsa/business-loan-dsa"
            element={<BusinessLoanDSA mainData={data} />}
          />
          <Route
            path="dsa/loan-against-property-dsa"
            element={<LoanAgainstPropertiesDSA mainData={data} />}
          />
          <Route
            path="dsa/education-loan-dsa"
            element={<EducationLoanDSA mainData={data} />}
          />
          <Route
            path="dsa/auto-loan-dsa"
            element={<AutoLoanDSA mainData={data} />}
          />
          <Route
            path="dsa/credit-card-dsa"
            element={<CreditCardDSA mainData={data} />}
          />
          <Route
            path="insurance/All-Insurance"
            element={<AllInsuarance mainData={data} />}
          />
          <Route
            path="insurance/Health-Insurance"
            element={<HealthInsuarance mainData={data} />}
          />
          <Route
            path="insurance/life-insurance"
            element={<LifeInsuarance mainData={data} />}
          />
          <Route
            path="insurance/General-Insurance"
            element={<GeneralInsuarance mainData={data} />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
