import "./Product.css";

const Product = ({ deal }) => {
  // const {credScore,img_url,imgName,price,description}=deal;
  const img_url = deal.img_url;
  const credScore = deal.credScore;
  const imgName=deal.imgName;
  const imgPrice=deal.price;
  const imgDescription=deal.description;
  return (
    <div className="card Dashboard">
      <img className="product--image" src={img_url} alt="" />
      <h2>{imgName}</h2>
      <p className="price">{imgPrice}</p>
      <p>{imgDescription}</p>
      <p>
        <button
          className="btn btn-primary"
          style={{ backgroundColor: "#5e10b1" }}
        >
          Avail Now
        </button>
      </p>
    </div>
  );
};
export default Product;
