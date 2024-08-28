import React, { useState, useEffect } from 'react';
import './ChooseCardSection.css';
import CreditCard from '../creditCard/CreditCard';
import axios from 'axios';
import creditCardData from './creditCard2.json';
import { useNavigate } from 'react-router-dom';
import {useAuth} from '../../../Auth/auth';
import {Link} from 'react-router-dom'

const AVERAGE_CREDIT_SCORE_THRESHOLD = 300;
const GOOD_CREDIT_SCORE_THRESHOLD = 650;

async function fetchUserData(userId, setFormData) {
  try {
    const userResponse = await axios.get(`http://localhost:9001/users/${userId}`);
    const userData = userResponse.data;

    setFormData({
      name: userData.fullName,
      email: userData.email,
      phoneNumber: userData.contactNumber
    });
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
}

function ChooseCardSection() {
  const [selectedCardType, setSelectedCardType] = useState('All');
  const [filteredCards, setFilteredCards] = useState([]);
  const [visibleCards, setVisibleCards] = useState([]);
  const [cardsToDisplay, setCardsToDisplay] = useState(6);
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [appliedCardId, setAppliedCardId] = useState([]); // Track applied card IDs
  const [userCreditScore, setUserCreditScore] = useState(null);

  const navigate = useNavigate();
  const auth = useAuth();
  

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });

  const userId = localStorage.getItem('userId'); // Replace with your own userId; // Set the userId here
  
  useEffect(() => {
    // Fetch user data when the component mounts
    fetchUserData(userId, setFormData);

    // Fetch user's credit score (or obtain it from user data)
    // Example: Fetching credit score from an API endpoint
    axios.get(`http://localhost:9001/users/${userId}`)
      .then((response) => {
        const userCreditScore = response.data.creditScore;
        setUserCreditScore(userCreditScore);
      })
      .catch((error) => {
        console.error('Error fetching user credit score:', error);
      });
  }, [userId]);

  useEffect(() => {
    // Fetch user data when the component mounts
    fetchUserData(userId, setFormData);
  }, [userId]);

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Full Name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Invalid email format';
    }

    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = 'Contact Number is required';
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isFormValid = validateForm();

    if (isFormValid) {
      try {

        // Then, submit the application
        // const applicationData = {
        //   ...formData,
        //   selectedCard.id,
        //   userId,
        //   bgColor: selectedCard.bgColor,
        //   cardName: selectedCard.cardname,
        //   cardType: selectedCard.type,
        //   cardId :  // Include the userId in the application data
        // };
        // console.log(selectedCard);
        // console.log(applicationData);
        console.log({...formData,"creditCardId":selectedCard["id"]});
        await axios.post(`http://localhost:9002/cardinfo/${userId}`, {...formData,"creditCardId":selectedCard["id"]});

        setFormData({
          name: '',
          email: '',
          phoneNumber: '',
        });
        alert("Card applied successfully!!")
        navigate('/dash');
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  // Sample real credit card data, you can replace this with your actual data
  
  useEffect(() => {
    // Update the filteredCards based on userCreditScore and selectedCardType
    if(auth.user){
    let filteredCardsByCreditScore = [];
    if (userCreditScore >= AVERAGE_CREDIT_SCORE_THRESHOLD && userCreditScore < GOOD_CREDIT_SCORE_THRESHOLD) {
      filteredCardsByCreditScore = creditCardData.averageCards;
    } else if (userCreditScore >= GOOD_CREDIT_SCORE_THRESHOLD) {
      filteredCardsByCreditScore = [...creditCardData.goodCards, ...creditCardData.averageCards];
    }

    // Apply additional filtering based on selectedCardType
    if (selectedCardType === 'All') {
      // Show all cards (no card type filtering)
      setFilteredCards(filteredCardsByCreditScore);
    } else {
      // Filter cards based on selectedCardType
      const cardsOfType = filteredCardsByCreditScore.filter((card) => card.type === selectedCardType);
      setFilteredCards(cardsOfType);
    }}
    else{
      const defaultCards = [...creditCardData.goodCards, ...creditCardData.averageCards];
      setFilteredCards(defaultCards); 
    }
  }, [selectedCardType, userCreditScore]);


  useEffect(() => {
    setVisibleCards(filteredCards.slice(0, cardsToDisplay));
  }, [cardsToDisplay, filteredCards]);

  useEffect(() => {
    setCardsToDisplay(6);
  }, [selectedCardType]);
  
  const handleSelectCard = (card) => {
    setSelectedCardId(card.id);
    setSelectedCard({
      ...card,
      bgColor: card.bgColor,
      cardname: card.cardname,
      type: card.type,
    });
  };

  const handleShowMore = () => {
    setCardsToDisplay(cardsToDisplay + 6);
  };

  const handleCancel = () => {
    setSelectedCard(null);
  };
  
  useEffect(() => {
    // Fetch user data when the component mounts
    fetchUserData(userId, setFormData);

    // Check if the user has already applied for a card
    axios.get(`http://localhost:9002/cardinfo/${userId}`)
      .then((userResponse) => {
        const userData = userResponse.data;

        if (userData && userData.creditCardId) {
          // The user has already applied for a card
          const appliedCardId = userData.creditCardId;

          // Check if the user is applying for the same card
          if (selectedCard && selectedCard.id === appliedCardId) {
            // Show an alert if the user is applying for the same card
            alert('You have already applied for this card. You cannot apply for this twice.');
          } else {
            // User is applying for a different card, show the "Upgrade Now" button
            setAppliedCardId(appliedCardId);
          }
        }
      })
      .catch((error) => {
        console.error('Error fetching user card info:', error);
      });
  }, [userId, selectedCard]);

  const applyForCard = (card) => {
    setSelectedCardId(card.id);
    console.log("this is applied card id",appliedCardId);
    if (appliedCardId.length!==0) {
      console.log(selectedCardId);
      console.log(appliedCardId);
      if(appliedCardId===selectedCardId){
        alert('You have already applied for this card. You cannot apply for this twice.');
     }
        else{// User has already applied for a card, show "Upgrade Now" functionality
        alert('Based on your credit score, you will get the email notification for the procedure');
        }
    }
      else {
      // User hasn't applied, you can proceed with the application
      setSelectedCardId(card.id);
      setSelectedCard({
        ...card,
        bgColor: card.bgColor,
        cardname: card.cardname,
        type: card.type,
      });
    }
  }
 console.log(appliedCardId);
  return (
    <section className="choose-card">
      {selectedCard ? (
        <h2>Apply for {selectedCard.name}</h2>
      ) : (
        <h2>Choose the best credit card that suits your needs</h2>
      )}

      {selectedCard ? null : (
        <div>
          <label htmlFor="cardTypeFilter">Card Type:</label>
          <select
            id="cardTypeFilter"
            onChange={(e) => setSelectedCardType(e.target.value)}
            value={selectedCardType}
          >
            <option value="All">All</option>
            <option value="Travel">Travel</option>
            <option value="Sports">Sports</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Shopping">Shopping</option>
          </select>
        </div>
      )}

      {selectedCard ? (
        <div className="center-container">
          <div className="application-form">
            <p>Type: {selectedCard.type}</p>
            <form onSubmit={(e) => handleSubmit(e)}>
              <label htmlFor="name">Full Name:</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                name="name"
                value={formData.name}
                onChange={(e) => handleInputChange(e)}
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                name="email"
                value={formData.email}
                onChange={(e) => handleInputChange(e)}
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange(e)}
                className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`}
              />
              {errors.phoneNumber && <span className="invalid-feedback">{errors.phoneNumber}</span>}
              <button className="apply-button">Submit Application</button>
              <button className="apply-button" onClick={handleCancel}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="card-container">
          {visibleCards.map((card, index) => (
            <div key={index} className="credit-card">
              <CreditCard
                cardname={card.cardname}
                type={card.type}
                number="XXXX XXXX XXXX 1234"
                balance="Rs.12,345"
                cardHolder="JANE SMITH"
                expiry="07/24"
                cvv="456"
                bgColor={card.bgColor}
                onClick={() => handleSelectCard(card)}
              />
              <p><strong>Type:</strong> {card.type}</p>
              <p><strong>Joining Fee:</strong> {card.joiningFee}</p>
              <p><strong>Annual Fee:</strong> {card.AnnualFee}</p>
              <p><strong>Card Special feature:</strong> {card.cardFeature}</p>
              
             {auth.user ? <button className="apply-button" onClick={() => applyForCard(card)}>
        
                {appliedCardId.length!==0 ? 'Upgrade Now' : 'Apply Now'}
              </button>: <Link className="btn btn-primary" style={{ background: "#652cb3", color:"white" }} to="/login">Apply Now</Link>}
            </div>
          ))}
        </div>
      )}

      {selectedCard ? null : (
        <div className="show-more-link">
          {cardsToDisplay < filteredCards.length && (
            <span onClick={handleShowMore}>Show More</span>
          )}
        </div>)
      }

    </section>
  );
}

export default ChooseCardSection;
