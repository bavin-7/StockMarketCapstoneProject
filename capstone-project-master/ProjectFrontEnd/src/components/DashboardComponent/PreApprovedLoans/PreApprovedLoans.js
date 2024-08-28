import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { preApprovedLoans } from "../../../db";
import axios from "axios";
const PreApprovedLoans = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId")
  const [cards, setCards] = useState({});
  const [a, setCreditScore] = useState(0);
   // Assuming 'a' represents some kind of credit score or condition
  console.log("I am ",a);
  useEffect(() => {

    // Fetch user's credit score (or obtain it from user data)
    // Example: Fetching credit score from an API endpoint
    axios.get(`http://localhost:9001/users/${userId}`)
      .then((response) => {
        const userCreditScore = response.data.creditScore;
        setCreditScore(userCreditScore);
        let selectedArray = [];
        if (a > 700) {
          console.log("I am above 700")
          selectedArray = preApprovedLoans.Good;
        } else if (a >= 500 && a <= 700) {
          console.log("I am between 500 and 700")

          selectedArray = preApprovedLoans.Average;
        }
      })
      .catch((error) => {
        console.error('Error fetching user credit score:', error);
      });
  }, [userId,a]);
  // useEffect(() => {
  //   // fetch("http://localhost:3000/preApprovedLoans") // Assuming db.json is in your public directory
  //   //   .then((response) => response.json())
  //   //   .then((data) => {
  //   //     // Determine which array to use based on the 'a' condition
  //   //     let selectedArray = [];
  //   //     if (a > 700) {
  //   //       selectedArray = data.Good;
  //   //     } else if (a >= 500 && a <= 700) {
  //   //       selectedArray = data.Average;
  //   //     }

  //   //     setCards(selectedArray);
  //   //   })
  //   //   .catch((error) => console.error("Error fetching data:", error));
  //   let selectedArray = [];
  //   if (a > 700) {
  //     console.log("I am above 700")
  //     selectedArray = preApprovedLoans.Good;
  //   } else if (a >= 500 && a <= 700) {
  //     console.log("I am between 500 and 700")

  //     selectedArray = preApprovedLoans.Average;
  //   }


  //   setCards(selectedArray);
  //   console.log(cards);
  // }, [a]);
  console.log(cards);
  return (
    <div style={{ backgroundColor: "#f0eff5" }}>
      <section className="container mycontainer mt-4 mb-4">
        <h1 className="text-center" style={{ marginBottom: "4rem" }}>
          Pre-Approved Loans For You
        </h1>
        <div className="row">
          {cards.length > 0 ? (
            cards.map((card) => (
              <div className="col-md-4" key={card.id}>
                <div className="card">
                  <img
                    src={card.imageUrl} // Assuming images are in a directory named "images"
                    className="card-img-top"
                    alt={card.title}
                    style={{ width: "100%" }}
                  />

                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">
                      <strong>Interest Rate:</strong> {card.interestRate}
                      <br />
                      <strong>Loan Amount:</strong> {card.loanAmount}
                      <br />
                      {card.description}
                    </p>
                    <button
                      onClick={() => {
                        navigate("/loan", { state: { card } });
                      }}
                      className="btn btn-primary"
                      style={{ backgroundColor: "#5e10b1", color: "white" }}
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default PreApprovedLoans;
