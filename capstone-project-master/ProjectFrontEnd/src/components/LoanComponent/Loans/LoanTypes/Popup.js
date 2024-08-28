import React from 'react';
import './Popup.css';

const Popup = ({ onClose }) => {
  return (
    <div className="expanded-card">
      <div className="header">
        <h1>Home Loan</h1>
        <div className="close-button" onClick={onClose}>
          <span className="close-icon">&times;</span>
        </div>
      </div>
      <div className="subheadings-container">
        <div className="subheading">
          <h4>Subheading 1</h4>
          <p>Content for Subheading 1 goes here...</p>
        </div>
        <div className="subheading">
          <h4>Subheading 2</h4>
          <p>Content for Subheading 2 goes here...</p>
        </div>
        <div className="subheading">
          <h4>Subheading 3</h4>
          <p>Content for Subheading 3 goes here...</p>
        </div>
        <div className="subheading">
          <h4>Subheading 4</h4>
          <p>Content for Subheading 4 goes here...</p>
        </div>
        {/* You can add more subheadings as needed */}
      </div>
    </div>
  );
};

export default Popup;
