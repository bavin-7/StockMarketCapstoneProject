import { Link } from "react-router-dom";
const NoCard = () => {
    return (
      <div className="myContainerss text-center" >
        <div className="h1">No Credit Card:</div>
        <div className="mybtn" style={{ marginTop: "0.8rem" }}>
          <Link
            className="btn btn-primary"
            style={{ backgroundColor: "#5e10b1",color:"white" }} to="/card"
          >
            Apply Now
          </Link>
        </div>
      </div>
    );
  };
  export default NoCard;