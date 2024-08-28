import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./LoanCalculator.css";
import {useAuth} from '../../../../Auth/auth';
import {Link} from 'react-router-dom';

function LoanCalculator() {
  const location = useLocation();
  console.log(location);
  const [purpose, setPurpose] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanTermYears, setLoanTermYears] = useState("");
  const [loanTermMonths, setLoanTermMonths] = useState("");
  const [interest, setInterest] = useState(9);
  const [tpa, setTotalPayableAmount] = useState(0);
  const [showApplyNow, setShowApplyNow] = useState(true);
  const [showManageLoans, setShowManageLoans] = useState(false);
  const [userLoans, setUserLoans] = useState([]);
  const userId = localStorage.getItem('userId'); // Replace with your own userId; // Set the userId here
  let interestRate = interest; // Change this to your desired interest rate
  const navigate= useNavigate();
  const calculateTotalPayableAmount = () => {
    if (purpose && loanAmount && (loanTermYears || loanTermMonths)) {
      const totalMonths = loanTermYears * 12 + Number(loanTermMonths);
      const totalAmount = (loanAmount * interestRate * totalMonths) / 1200;
      setTotalPayableAmount(totalAmount + Number(loanAmount));
    } else {
      setTotalPayableAmount(0);
    }
  };
  const auth = useAuth();

  useEffect(() => {
    if (location.state && location.state.card) {
      const card = location.state.card;
      setPurpose(card.title);
      setLoanAmount(card.loanAmount);
      setInterest(card.interestRate);
    }
    calculateTotalPayableAmount();
  }, [
    purpose,
    loanAmount,
    loanTermYears,
    loanTermMonths,
    calculateTotalPayableAmount,
    location.state,
  ]);

  const onSubmit = async (e) => {
    e.preventDefault();

    // Create an object with the data you want to send to the server
    const loanData = {
      loanType: purpose,
      loanAmt: loanAmount,
      loanInterest: 9.04, // Hardcoded interest rate
      loanTime: loanTermYears * 12 + Number(loanTermMonths), // Total months
      userId: userId,
      tpa: tpa,
    };

    // Send a POST request to the server with the loanData
    try {
      const response = await axios.post(`http://localhost:9003/loans/${userId}`, loanData);
      console.log("Loan data sent successfully:", response.data);

      // Fetch user loans after submitting the new loan
      const userLoanResponse = await axios.get(
        `http://localhost:9003/loans/${userId}`
      );
      setUserLoans(userLoanResponse.data);

      // Hide the "Apply Now" card and show the "Manage Your Loans" card
      alert("Loan applied successfully!");
      navigate('/dash');
    } catch (error) {
      console.error("Error sending loan data:", error);
      // Handle errors here
    }
    
  };

  return (
    <div className="container mt-5">
      { (
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-6">
                <h1>Loan Calculator</h1>
                <h4>What are you borrowing for?</h4>
                <select
                  className="form-select mb-3"
                  value={purpose}
                  onChange={(e) => {
                    setPurpose(e.target.value);
                    calculateTotalPayableAmount();
                  }}
                >
                  <option value="">Select Purpose</option>
                  <option value="Pre-Approved Loan">Pre-Approved Loan</option>
                  <option value="Personal Loan">Personal Loan</option>
                  <option value="Home Loan">Home Loan</option>
                  <option value="Vehicle Loan">Car</option>
                  <option value="Education">Education</option>
                  <option value="Other">Other</option>
                </select>
                <h4>Amount you wish to borrow</h4>
                <input
                  type="number"
                  className="form-control mb-3"
                  value={loanAmount}
                  onChange={(e) => {
                    setLoanAmount(e.target.value);
                    calculateTotalPayableAmount();
                  }}
                />
                <h4>Time period of the loan</h4>
                <div className="input-group mb-3">
                  <input
                    type="number"
                    className="form-control"
                    value={loanTermYears}
                    onChange={(e) => {
                      setLoanTermYears(e.target.value);
                      calculateTotalPayableAmount();
                    }}
                  />
                  <select
                    className="form-select"
                    value={loanTermMonths}
                    onChange={(e) => {
                      setLoanTermMonths(e.target.value);
                      calculateTotalPayableAmount();
                    }}
                  >
                    <option value="">Select Months</option>
                    <option value="1">1 Months</option>
                    <option value="2">2 Months</option>
                    <option value="3">3 Months</option>
                    <option value="4">4 Months</option>
                    <option value="5">5 Months</option>
                    <option value="6">6 Months</option>
                    <option value="7">7 Months</option>
                    <option value="8">8 Months</option>
                    <option value="9">9 Months</option>
                    <option value="10">10 Months</option>
                    <option value="11">11 Months</option>
                  </select>
                </div>
                {auth.user ? <button
                  type="submit"
                  style={{ background: "#652cb3" }}
                  className="btn btn-primary text-white"
                >
                  Submit
                </button>: <Link className="btn btn-primary" style={{ background: "#652cb3", color:"white" }} to="/login">Please Login first</Link>}
              
              </div>
              <div className="col-md-6">
                <div
                  className="card"
                  style={{ backgroundColor: "#652cb3", color: "white" }}
                >
                  <div className="card-body">
                    <h1>Loan Calculator</h1>
                    <h4>What are you borrowing for?</h4>
                    <p style={{color:"white"}}>{purpose}</p>
                    <h4>Amount you wish to borrow</h4>
                    <p style={{color:"white"}}>{loanAmount}</p>
                    <h4>Time period of the loan</h4>
                    <p style={{color:"white"}}>
                      {loanTermYears} years {loanTermMonths} months
                    </p>
                    <h4>Interest Rate</h4>
                    <p style={{color:"white"}}>{interest}</p>
                    <h4 className="btn btn-primary" style={{display:"block"}}>Total Payable Amount</h4>
                    <p className="btn btn-primary" style={{ display:"block"}}>{tpa}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
      
    </div>
  );
}

export default LoanCalculator;
