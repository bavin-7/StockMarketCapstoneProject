import Creditworth from "../../../images/CreditWorthiness.jpg";
const CreditWorthiness = () => {
  return (
    <div>
      <div class="container mycontainer" style={{ backgroundColor: "#f0eff5" }}>
        <div class="row">
          <div class="col-md-6 col-sm-12 mb-4">
            <div
              class="insight text-center"
              style={{
                display: "flex",
                justifyContent: "flex-end",
                padding: "1.5rem",
                margin: "1rem",
              }}
            >
              <img
                src={Creditworth}
                alt="Credit Insight Image"
                class="img-fluid"
                width="80%"
              />
            </div>
          </div>
          <div class="col-md-6 col-sm-12 mb-4">
            <div class="insight text-center">
              <h1 style={{ fontSize: "3rem", marginBottom: "1.5rem" }}>
                Unlock Your Credit Potential
              </h1>
              <div className="text-container" style={{ padding: "1rem" }}>
                <p style={{ fontSize: "1.5rem", color: "black" }}>
                  Unlock Your Credit Potential with our expert tips to improve
                  your credit score and take control of your financial future.
                  Discover the key to achieving your dreams, whether it's buying
                  a home, starting a business, or securing a brighter tomorrow.
                  With our guidance, you'll embark on a journey towards
                  financial freedom and endless possibilities.
                </p>
                <a href="https://www.nerdwallet.com/article/finance/raise-credit-score-fast">
                  <h4>Click to know more..</h4>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreditWorthiness;
