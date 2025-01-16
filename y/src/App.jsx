import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
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
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
