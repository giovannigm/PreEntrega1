import { useContext } from "react";
import imgCart from "../../../assets/carrito-de-compras.svg";
import { CartContext } from "../../../context/CartContext";

const Cartwidget = () => {
  const { getTotalItems } = useContext(CartContext);
  const CantidadItems = getTotalItems();

  return (
    <div className="carrito">
      <p className="prod-carrito">{CantidadItems}</p>
      <img src={imgCart} alt="img-carrito" />
    </div>
  );
};

export default Cartwidget;
