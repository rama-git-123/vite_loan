import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Breadcrumb from "../components/breadcrumb/breadcrumb";

ChartJS.register(ArcElement, Tooltip, Legend);

const EmiCalculatorPage = () => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(6);
  const [loanTenure, setLoanTenure] = useState(5);

  // EMI Calculation Formula
  const calculateEMI = () => {
    let P = loanAmount;
    let R = interestRate / 12 / 100;
    let N = loanTenure * 12;
    let EMI = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    return EMI.toFixed(2);
  };

  const monthlyEMI = calculateEMI();
  const totalPayable = (monthlyEMI * loanTenure * 12).toFixed(2);
  const totalInterest = (totalPayable - loanAmount).toFixed(2);

  // Chart Data
  const chartData = {
    labels: ["Principal Amount", "Interest Amount"],
    datasets: [
      {
        data: [loanAmount, totalInterest],
        backgroundColor: ["#007bff", "#ff6384"],
        hoverBackgroundColor: ["#0056b3", "#ff4569"],
      },
    ],
  };

  return (
    <>
      <div className="container ">
        <Breadcrumb
          location={location}
          page={"Emi Calculator"}
          //subPage={"Personal Loan"}
        />
      </div>

      <div className="container mt-5">
        <h2 className="text-center">EMI Calculator</h2>

        {/* Tabs */}
        <ul className="nav nav-tabs mb-4">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              🏠 Home
            </a>
          </li>
          {/* <li className="nav-item">
          <a className="nav-link" href="#">💰 Personal</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">🏢 Business</a>
        </li> */}
        </ul>

        <div className="row">
          {/* Inputs */}
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Loan Amount</label>
              <input
                type="range"
                className="form-range"
                min="10000"
                max="5000000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
              />
              <input
                type="text"
                className="form-control text-end"
                value={`₹ ${loanAmount.toLocaleString()}`}
                readOnly
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Interest Rate (%)</label>
              <input
                type="range"
                className="form-range"
                min="1"
                max="20"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
              />
              <input
                type="text"
                className="form-control text-end"
                value={`% ${interestRate}`}
                readOnly
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Loan Tenure (Years)</label>
              <input
                type="range"
                className="form-range"
                min="1"
                max="30"
                value={loanTenure}
                onChange={(e) => setLoanTenure(Number(e.target.value))}
              />
              <input
                type="text"
                className="form-control text-end"
                value={`Y ${loanTenure}`}
                readOnly
              />
            </div>
          </div>

          {/* Results */}
          <div className="col-md-6">
            <div style={{ height: "300px" }}>
              <Doughnut
                data={chartData}
                options={{ maintainAspectRatio: false }}
              />
            </div>

            <ul className="list-group mt-3">
              <li className="list-group-item d-flex justify-content-between">
                <span>Monthly EMI</span>
                <strong>₹{monthlyEMI}</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Principal Amount</span>
                <strong>₹{loanAmount.toLocaleString()}</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Interest Payable</span>
                <strong>₹{totalInterest}</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between bg-light">
                <span>
                  <strong>Total Amount Payable</strong>
                </span>
                <strong>₹{totalPayable}</strong>
              </li>
            </ul>

            <button className="btn btn-danger w-100 mt-3">Apply Now</button>
          </div>
        </div>

        <div className="mt-5">
          <h4>What is Loan EMI?</h4>
          <p>
            Loan EMI Calculator (Equated Monthly Installment) is the principal,
            rate, and interest you have to pay monthly to the bank as a
            consideration for their loan. It includes both your principal amount
            and interest on it. So, it is always wise that you manage your
            payment enough systematically so that you can keep a good CIBIL
            Score and also don’t have to pay late payment or other charges.
          </p>
        </div>
      </div>
    </>
  );
};

export default EmiCalculatorPage;
