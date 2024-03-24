import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ id, img, title, description, price, stock }) => {
  if (stock === 0) {
    return (
      <>
        <div className="card-info">
          <img src={img} alt="" />
          <h4 className="card-title">{title}</h4>
          <p className="card-description">{description}</p>
          <h3 className="card-price">{price}</h3>
          <button className="details-button" disabled={true}>
            Sin stock
          </button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="card-info">
          <img src={img} alt="" />
          <h4 className="card-title">{title}</h4>
          <p className="card-description">{description}</p>
          <h3 className="card-price">{price}</h3>
          <Link to={`/item/${id}`}>
            <button className="details-button">Detalles</button>
          </Link>
        </div>
      </>
    );
  }
};

export default ProductCard;
