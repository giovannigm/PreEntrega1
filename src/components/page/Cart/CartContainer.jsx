import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import "./Cart.css";
import { Cart } from "./Cart";
import Swal from "sweetalert2";
import { Button } from "@mui/material";

export const CartContainer = () => {
  const { cart, clearCart, getTotalPrice } = useContext(CartContext);
  let total = getTotalPrice();

  const limpiarAlert = () => {
    Swal.fire({
      title: "Seguro quieres limpiar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si, Limpiar",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Eliminado!", "", "success");
        clearCart();
      } else if (result.isDenied) {
        Swal.fire("El carrito se mantiene", "", "info");
      }
    });
  };

  let mostrar = <Cart />;
  if (cart.length === 0) {
    mostrar = (
      <div className="product-cart">
        <h3>No tienes productos en el carrito</h3>
      </div>
    );
  }

  return (
    <section className="cart-Conteiner">
      {mostrar}
      <aside className="cart-info">
        <h2>Descripcion del carrito</h2>
        <h3>Cantidad de productos: </h3>
        <h3>Precio Total: $ {total}</h3>

        {cart.length > 0 ? (
          <div className="btn-cart">
            <Button variant="contained" color="warning" onClick={limpiarAlert}>
              Limpiar carrito
            </Button>
            <Link to="/checkout">
              <Button variant="contained" color="success">
                Finalizar compra
              </Button>
            </Link>
          </div>
        ) : (
          <Link to="/">
            <Button variant="contained" color="info">Agrega productos</Button>
          </Link>
        )}

        <h1>Precio Total + IVA: $ {total * 1.22}</h1>
      </aside>
    </section>
  );
};
