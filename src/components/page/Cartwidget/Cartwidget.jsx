import React from "react";
import "./Cartwidget.css";
const Cartwidget = () => {
  const CantidadItems = 1;
  return (
    <div className="carrito">
      <p className="prod-carrito">{CantidadItems}</p>
      <img src="src/assets/carrito-de-compras.svg" alt="imagen-carrito" />
    </div>
  );
};

export default Cartwidget;
