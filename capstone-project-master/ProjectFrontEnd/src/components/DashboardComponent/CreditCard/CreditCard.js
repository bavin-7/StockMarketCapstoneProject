import "./CreditCard.css";

import BTClogo from "../../../images/BTC.png";
import VisaLogo from "../../../images/visa.png";
import Chip from "../../../images/card chip.png";

const CreditCard = () => {
  return (
    // <div>Credit Card</div>
    <div className="cards" style={{ width: "75%" }}>
      <div className="top" style={{ height: "33%" }}>
        <div className="left">
          <img src={BTClogo} alt="BTC" />
          <h2>BTC</h2>
        </div>
        <div
          className="right"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "1rem",
          }}
        >
          <img
            src={VisaLogo}
            alt=""
            className="right"
            style={{ height: "1rem", marginBottom: "10px" }}
          />
          <img src={Chip} className="chip" alt="" style={{ height: "2rem" }} />
        </div>
      </div>
      <div
        className="middle"
        style={{
          height: "33%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <h4>XXXX XXXX XXXX 6182</h4>
        <h2 style={{ fontSize: "1.5rem" }}>$827,199</h2>
      </div>
      <div className="bottom">
        <div className="left">
          <small>Card Holder</small>
          <h5>JOHN DOE</h5>
        </div>
        <div className="right">
          <div className="expiry">
            <small>Expiry</small>
            <h5>08/23</h5>
          </div>
          <div className="cvv">
            <small>CVV</small>
            <h5>123</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreditCard;
