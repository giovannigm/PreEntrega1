import ItemCountConteiner from "../ItemCount/ItemCountConteiner";
import "./ItemDetail.css";
export const ItemDetail = ({ description, title, img, price, stock }) => {
  return (
    <div className="container">
      <div className="content">
        <img src={img} alt="" className="card-img" />
        <div className="text">
          <h5 className="title">{title}</h5>
          <p>{description}</p>
          <p>Precio: {price}</p>
        </div>
      </div>
        <ItemCountConteiner stock={stock} />
    </div>
  );
};
