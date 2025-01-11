import React, { useState } from "react";
//import './EMICalculator.css'; // Optional: for custom styles

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTenure, setLoanTenure] = useState("");
  const [emi, setEmi] = useState(0);

  const calculateEMI = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 12 / 100;
    const tenure = parseInt(loanTenure);

    if (principal && rate && tenure) {
      const emi =
        (principal * rate * Math.pow(1 + rate, tenure)) /
        (Math.pow(1 + rate, tenure) - 1);
      setEmi(emi.toFixed(2));
    } else {
      setEmi(0);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">EMI Calculator for Personal Loan</h2>
      <p className="text-center">
        An EMI calculator is a useful tool that can help you estimate the
        monthly installments you will have to pay towards your personal loan
        within a specific period.
      </p>

      <div
        className="card mx-auto shadow-sm p-4"
        style={{ maxWidth: "1200px", background: "#3B5998", color: "#fff" }}
      >
        <h4 className="text-center mb-4">Apply for Personal Loan</h4>
        <div className="row mb-3">
          <div className="col-md-4">
            <label>Your desired loan amount</label>
            <input
              type="number"
              className="form-control"
              placeholder="₹"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <label>Rate of Interest in Percent</label>
            <input
              type="number"
              className="form-control"
              placeholder="%"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <label>Loan Tenure (In Months)</label>
            <input
              type="number"
              className="form-control"
              placeholder="Months"
              value={loanTenure}
              onChange={(e) => setLoanTenure(e.target.value)}
            />
          </div>
        </div>

        <div className="text-center mt-4">
          <button className="btn btn-danger px-5" onClick={calculateEMI}>
            Calculate your EMI
          </button>
        </div>

        <div className="d-flex justify-content-between align-items-center mt-4">
          <h5>EMI Amount: ₹ {emi}</h5>
          {/* <button className="btn btn-light">Apply Now</button> */}
        </div>
      </div>
    </div>
  );
};

export default EMICalculator;
