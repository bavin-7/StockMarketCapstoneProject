import React from "react";
import CredRatingandCard from "./CredScoreandCardDetails.js/CredRatingandCard";
import PreApprovedLoans from "./PreApprovedLoans/PreApprovedLoans";
import CreditCardInsights from "./CreditInsights/CreditCardInsights";
import DealsToOffer from "./Offers/DealsToOffer";
import ManageLoans from "./ManageYourLoan/ManageLoans";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Dashboard() {
  const userId = localStorage.getItem('userId'); // Replace with your own userId; // Set the userId here
  const [userLoans, setUserLoans] = useState([]); // Replace with your own userLoans; // Set the userLoans here
  useEffect(()=>{
    axios.get(`http://localhost:9003/loans/${userId}`)
    .then(response => {
      setUserLoans(response.data);
    })
    .catch(error => {
      console.error("Error fetching user loans:", error);
    });
  },[]);
  console.log(userLoans);
  return (
    <div>
      <CredRatingandCard />
      {userLoans.length!==0 && <ManageLoans />}      
      <PreApprovedLoans />
      <CreditCardInsights />
      <DealsToOffer />
    </div>
  );
}
