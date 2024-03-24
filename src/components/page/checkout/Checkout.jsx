import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import "./Checkout.css";
export const Checkout = ({ envioFormulario, change, orderId }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    setLoading(true); // Establecer el estado de carga a true al enviar el formulario
    envioFormulario(e); // Llamar a la función de envío del formulario
  };

  return (
    <>
      {orderId ? (
        <div className="checkout-card">
          <h2>Verificador de orden</h2>
          <p>Gracias por su orden, su pedido está pronto a la brevedad</p>
          <h4>Su numero de orden es:  {orderId} </h4>
          <Link to="/">
            <Button type="submit" variant="contained" sx={{ width: 200 }}>
              Seguir Comprando
            </Button>
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="fromCheck">
          <TextField
            label="Nombre"
            variant="outlined"
            onChange={change}
            name="name"
            type="text"
          />

          <TextField
            label="Telefono"
            variant="outlined"
            onChange={change}
            type="number"
            name="phone"
          />

          <TextField
            label="Email"
            variant="outlined"
            onChange={change}
            name="email"
            type="email"
          />

          <Button type="submit" variant="contained" sx={{ width: 200 }}>
            {loading ? "Cargando..." : "Comprar"}
          </Button>
        </form>
      )}
    </>
  );
};
