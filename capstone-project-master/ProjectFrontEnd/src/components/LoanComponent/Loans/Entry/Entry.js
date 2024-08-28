import React from 'react';
import './Entry.css'
import logo from './loan_logo.jpg'
const Entry = () => {
  return (
    <div className="container">
      <div className="row align-items-center">
        
        <div className="col-md-6">
          {/* Text */}
          <div className="text-left" >

            <h1 className='loan-heading'>CREDIT PULSE</h1>
            <p className='loan-heading'>
              YOUR ONE STOP SOLUTION TO YOUR EVERY BANKING NEED.<br/>
            WE OFFER LOANS WITH THE LOWEST INTEREST RATES<br/>BASED ON YOUR CREDIT RATING</p>

          </div>
        </div>
        <div className="col-md-6">
          {/* Image */}
           
          <img
            src={logo}
            alt=""
            className="img-fluid"
          />
          
        </div>
      </div>
    </div>
  );
};

export default Entry;
