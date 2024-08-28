import "./DealsToOffer.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { Deals } from "../../../DealsOfTheDay";
import { useState,useEffect } from 'react';
import axios from "axios";

const DealsToOffer = () => {
  const [credScore, setUserCreditScore] = useState(0);
  let credLabel;
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    // Fetch user data when the component mounts

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

  if (credScore >= 500 && credScore < 700) {
    credLabel = "Average";
  } else if (credScore >= 700) {
    credLabel = "Good";
  }

  const myDeals = Deals.filter((deal) => deal.credScore === credLabel);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div style={{ backgroundColor: "#f0eff5" }}>
      <section className="container mycontainer">
        <h1 className="DealsHeading">Deals Of The Day</h1>
        <Carousel responsive={responsive}>
          {myDeals.map((deal) => {
            return <Product deal={deal} />;
          })}
        </Carousel>
      </section>
    </div>
  );
};
export default DealsToOffer;
