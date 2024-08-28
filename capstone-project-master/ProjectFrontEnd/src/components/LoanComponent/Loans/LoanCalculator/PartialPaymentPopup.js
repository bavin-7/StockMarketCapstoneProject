import React, { useState, useEffect } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import axios from 'axios';
function PartialPaymentPopup() {
  const [purpose, setPurpose] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [intr, setInterest] = useState(0);
  const [tpa, setTpa] = useState(0);
  const [initialPay, setInitialPay] = useState(0);
  const location = useLocation();
  // const calculatetpa = () => {
  //   if (tpa && loanAmount) {
  //     const totalAmount = (tpa - initialPay);
  //     console.log(totalAmount);
  //     setTpa(totalAmount);
  //   } else {
  //     setTpa(0);
  //   }
  // };
  const nav=useNavigate();

  const handle= async(e)=>{
    e.preventDefault();
    if(initialPay>tpa)
       alert("Enter a valid amount to pay!")
    else{  
    // setTpa(tpa-initialPay)
    location.state.loan.tpa=tpa-initialPay
    console.log(tpa);
    try{
    const response=await axios.put(`http://localhost:9003/loans/${location.state.loan.id}`,location.state.loan);
    alert("Partial payment successful!")
    nav('/dash')
    }
    catch(error){
      alert("Payment failed")
    }
  }}
  useEffect(() => {
    if (location.state && location.state.loan) {
      const loan = location.state.loan;
      setPurpose(loan.loanType);
      setLoanAmount(loan.loanAmt);
      setInterest(loan.loanInterest);
      setTpa(loan.tpa);
    }
   // calculatetpa();
  
  }, [tpa, location.state]);
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Partial Payment</h2>
              <form>
                <div className="form-group">
                  <label>Loan Type</label>
                  <input
                    type="text"
                    className="form-control"
                    value={purpose}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label>Loan Amount</label>
                  <input
                    type="text"
                    className="form-control"
                    value={loanAmount}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label>Loan Interest Rate</label>
                  <input
                    type="text"
                    className="form-control"
                    value={intr}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label>Total Payable Amount</label>
                  <input
                    type="text"
                    className="form-control"
                    value={tpa}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label>Enter the amount you wish to pay</label>
                  <input
                    type="number"
                    className="form-control"
                    value={initialPay}
                    onChange={(e) => {
                      setInitialPay(e.target.value);
                    }}
                  />
                  <br/>
                </div>
                <div className='text-center'>
                <button className="btn btn-primary" style={{background:'#652cb3', color:'white'}} onClick={handle}>Pay</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartialPaymentPopup;