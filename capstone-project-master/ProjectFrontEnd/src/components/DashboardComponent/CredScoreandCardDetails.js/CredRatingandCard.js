import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CreditScoreProgressBar from './ProgressBar/ProgressBar';
import CreditCard from '../../CardComponent/creditCard/CreditCard';
import creditCardData from '../../CardComponent/choosecardsection/creditCardData.json';
import { Link } from 'react-router-dom';
import NoCard from '../CreditCard/NoCard';

const CredRatingandCard = () => {
  const userId = localStorage.getItem('userId');
  const [userCardData, setUserCardData] = useState({});
  const [card, setCard]=useState({});
  const [userCardIdexist, setUserCardIdexist] = useState(false);
  const [creditScore, setCreditScore] = useState(0);
  
 

  useEffect(() => {
    const fetchUserCardData = async () => {
      try {
        const userResponse = await axios.get(`http://localhost:9002/cardinfo/${userId}`);
        const cardData = userResponse.data;
        setUserCardData(cardData);
        setUserCardIdexist(true);
        // const userCardId = cardData.creditCardId;
        setCard(creditCardData.card.find(card => card.id === cardData.creditCardId));
        console.log(card);
      } catch (error) {
        console.error('Error fetching card data:', error);
      }
    };

    fetchUserCardData();
  }, []);

  useEffect(() => {

    // Fetch user's credit score (or obtain it from user data)
    // Example: Fetching credit score from an API endpoint
    axios.get(`http://localhost:9001/users/${userId}`)
      .then((response) => {
        const userCreditScore = response.data.creditScore;
        setCreditScore(userCreditScore);
     
      })
      .catch((error) => {
        console.error('Error fetching user credit score:', error);
      });
  }, [userId]);

  const creditValue = () => {
    if (creditScore >= 500 && creditScore < 700) {
      return "Rs 40,000";
    } else if (creditScore >= 700) {
      return "Rs 60,000";
    }
  };

  console.log(creditScore);
  console.log(creditValue());
  console.log(userCardData);
  
  return (
    <section className="container-fluid" style={{ marginBottom: '4.5rem', marginTop: '4rem' }}>
      <div className="row justify-content-between">
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <CreditScoreProgressBar creditScore={creditScore} />
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 mb-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '4px' }}>
          {userCardData.creditCardId ? (
            <CreditCard
              cardname={card.cardname}
              type={card.type}
              number={userCardData.cardNumber}
              balance={userCardData.cardBalance}
              cardHolder={userCardData.name}
              expiry={userCardData.expiryDate}
              cvv="XXX"
              bgColor={card.bgColor}
            />
          ) : 
            <NoCard/>
          }
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 mb-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="total-credit text-center" style={{color:"#652CB3"}}>
            <h1>Total Credit Allowed:</h1>

            {userCardData? <h2>{creditValue()}</h2> :<h2>N/A</h2>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredRatingandCard;
