import React, { useState } from "react";
import Breadcrumb from "../../components/breadcrumb/breadcrumb";
import LoansData from "../../data/loan.json";
import { Link, useLocation } from "react-router-dom";
import LoanNavBar from "../../components/loanNavbar/loanNavBar";

const Eligibility = ({ mainData }) => {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();
  return (
    <div className="features">
      <Breadcrumb
        location={location}
        page={"Eligibility"}
        //subPage={"Personal Loan"}
      />
      <div className=" container personal-loan">
        <LoanNavBar />

        <div class="container mt-5">
          <h3>Personal Loan Eligibility Criteria</h3>
          <p>
            To qualify for a personal loan, you have to meet certain criteria.
            Below are the important factors that lenders take into consideration
            to decide your eligibility for a personal loan.
          </p>
          <ul>
            <li>Age should fall under the range of 21 years to 60 years</li>
            <li>
              Net monthly income should be 15,000/- for salaried and
              self-employed, yearly transactions should be a minimum of 20 lakhs
            </li>
            <li>Credit score must be above 650</li>
            <li>Debt-to-income ratio</li>
            <li>Employment stability</li>
            <li>Maintained a good credit score</li>
            <li>Clear repayment history</li>
            <li>Must be a Resident Citizen of India</li>
          </ul>
        </div>

        <div class="container mt-5">
          <h3>Documents required to apply for Personal Loan</h3>
          <ul>
            <li>
              <strong>Identity Proof:</strong> Passport, Voter's ID, Driving
              License, PAN Card, Aadhaar Card
            </li>
            <li>
              <strong>Proof of Residence or Address Proof:</strong> Passport,
              Voter's ID, Driving License, PAN Card, Aadhaar Card, Electricity
              Bill, Telephone Bill, Ration Card
            </li>
            <li>
              <strong>Age Proof:</strong> Passport, Voter's ID, Driving License,
              PAN Card, Aadhaar Card
            </li>
            <li>
              <strong>Income Proof:</strong> 1 year Bank statement, 3 months
              Salary Slips
            </li>
            <li>
              <strong>Employment Proof:</strong> Employment Certificate, Office
              address proof
            </li>
            <li>
              <strong>GST or VAT Registration for Self-employed</strong>
            </li>
            <li>
              <strong>Photograph:</strong> Passport-size photographs
            </li>
            <li>
              <strong>Business proof:</strong> Business registration documents
              such as a partnership deed, Memorandum of Association (MOA),
              Articles of Association (AOA), etc.
            </li>
            <li>
              <strong>Income tax returns:</strong> Documents of the past 2-3
              years to verify income and tax payment history
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Eligibility;
