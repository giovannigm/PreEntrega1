import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export const Cart = () => {
  const { cart, removeById } = useContext(CartContext);
  return (
    <article className="product-cart">
      {cart.map((product) => (
        <div className="cart" key={product.id}>
          <img src={product.img} />
          <div>
            <h4 className="title">{product.title}</h4>
            <div>
              <h5 className="price">Unidades: {product.quantity}</h5>
              <h3 className="price">precio unitario: {product.price}</h3>
            </div>
          </div>
          <button onClick={() => removeById(product.id)}>Eliminar</button>
        
        </div>
      ))}
    </article>
  );
};
