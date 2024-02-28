import imgCart from "../../../assets/carrito-de-compras.svg";

const Cartwidget = () => {
  const CantidadItems = 1;
  return (
    <div className="carrito">
      <p className="prod-carrito">{CantidadItems}</p>
      <img src={imgCart} alt="img-carrito" />
    </div>
  );
};

export default Cartwidget;
