import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./LoanTypes.css"; // Custom CSS file for additional styling

const LoanTypes = () => {
  const [showText, setShowText] = useState({});

  const toggleText = (id) => {
    setShowText((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const [cardsData, setd] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/loans')
      .then(response => response.json())
      .then(result => setd(result))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  return (
    <div className="container">
      <div className="row">
        {cardsData.map((card) => (
          <div className="col-md-6 col-lg-3" key={card.id}>
            <div className="card mb-4 ">
              <img
                src={card.imageUrl}
                className="card-img-top img-fluid si"
                alt={card.loanName}
              />
              <div className="card-body">
                <button
                  className="btn btn-primary btn-block text-white"
                  onClick={() => toggleText(card.id)}
                  style={{ background: "#652cb3" }}
                >
                  {showText[card.id] ? "Close" : "Read More"}
                </button>
                {showText[card.id] && (
                  <div style={{ color: "#652cb3" }}>
                    <h5 className="card-title">{card.loanName}</h5>
                    <p className="card-text">
                      Total Interest Rate: {card.totalInterestRate}
                    </p>
                    <p className="card-text">{card.loanType}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoanTypes;
