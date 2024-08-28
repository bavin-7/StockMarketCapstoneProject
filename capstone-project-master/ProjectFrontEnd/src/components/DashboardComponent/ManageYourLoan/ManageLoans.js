import React, { Component } from 'react'
import {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
function ManageLoans () {
    const userId = localStorage.getItem('userId'); // Replace with your own userId; // Set the userId here

   const [userLoans, setUserLoans] = useState([]);
   
   const navigate=useNavigate();
  useEffect(() => {
    // Fetch user loans data when the component mounts
    axios.get(`http://localhost:9003/loans/${userId}`)
      .then(response => {
        setUserLoans(response.data);
      })
      .catch(error => {
        console.error("Error fetching user loans:", error);
      });
  }, []); 
    return (
      <div>
            <div>
              <h1 className="manage text-center mb-3">Manage Your Loans</h1>
            </div>
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Loan Type</th>
                  <th scope="col">Loan Amount</th>
                  <th scope="col">Loan Interest Rate</th>
                  <th scope="col">Loan Period</th>
                  <th scope="col">Total Payable Amount</th>
                  <th scope="col">Payment</th>
                </tr>
              </thead>
              <tbody>
                {userLoans.map((loan) => (
                  <tr key={loan.id}>
                    <td>{loan.loanType}</td>
                    <td>Rs.{loan.loanAmt}</td>
                    <td>{loan.loanInterest}%</td>
                    <td>{loan.loanTime}months</td>
                    <td>Rs.{loan.tpa}</td>
                    <td>
                    <button
                      onClick={() => {
                        navigate("/partialPaymentPopup", { state: { loan } });
                      }}
                      className="btn btn-primary but"
                      style={{ backgroundColor: "#5e10b1",color:"white" }}
                    >
                      Payment
                    </button>

                    </td>
                    {/* Add additional columns for other loan details as needed */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
    )
  }

export default ManageLoans;