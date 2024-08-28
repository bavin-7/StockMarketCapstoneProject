import {Link} from 'react-router-dom';
const ServicesWeOffer = () => {
  return (
    <div>
      <section className="container mycontainer mt-4 mb-4">
        <h1 className="text-center" style={{ marginBottom: "4rem" }}>
          Services We Offer
        </h1>
        <div className="row">
          <div className="col-md-4">
            <div className="card Dashboard">
              <img
                src="/home/loan.jpeg" // Replace with your image URL
                className="card-img-top"
                alt="Personal Loan"
                style={{ width: "100%" }}
              />
              <div className="card-body">
                {/* <h5 className="card-title">Personal Loan</h5> */}
                
                <Link style={{ backgroundColor: "#652CB3" ,color:"white"}} className="btn btn-primary" to="/loan">
                  Loans
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card Dashboard">
              <img
                src="/home/card.jpeg" // Replace with your image URL
                className="card-img-top"
                alt="Home Loan"
              />
              <div className="card-body">
               
              <Link style={{ backgroundColor: "#652CB3" ,color:"white"}} className="btn btn-primary" to="/card">
                  Credit Cards
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card Dashboard">
              <img
                src="/home/credScore.jpeg" // Replace with your image URL
                className="card-img-top"
                alt="Vehicle Loan"
              />
              <div className="card-body">
                
              <Link style={{ backgroundColor: "#652CB3" ,color:"white"}} className="btn btn-primary" to="/login">
                  Credit Score
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ServicesWeOffer;
