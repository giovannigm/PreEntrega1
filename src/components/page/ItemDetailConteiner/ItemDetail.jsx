import ItemCountConteiner from "../../common/ItemCount/ItemCountConteiner";
import "./ItemDetail.css";

export const ItemDetail = ({ item, onAdd, initial }) => {
  if (!item) {
    return <h1>El producto no existe </h1>;
  } else {
    return (
      <div className="container">
        <div className="content">
          <img src={item.img} alt="Producto" className="card-img" />
          <div className="text">
            <h5 className="title">{item.title}</h5>
            <p>{item.description}</p>
            <p>Precio: {item.price}</p>
          </div>
        </div>
        {initial && <p>ya tienes {initial} en el carrito </p>}
        <ItemCountConteiner
          stock={item.stock}
          onAdd={onAdd}
          initial={initial}
        />
      </div>
    );
  }
};
