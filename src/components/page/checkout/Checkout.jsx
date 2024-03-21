import { Link } from "react-router-dom";

export const Checkout = ({ envioFormulario, capturar, orderId }) => {
  return (
    <div>
      <h1>Checkout</h1>

      {orderId ? (
        <div>
          <h1>Gracias tu numero de orden es: {orderId} </h1>
          <Link to="/">seguir Comprando</Link>
        </div>
      ) : (
        <form onSubmit={envioFormulario}>
          <input
            type="text"
            placeholder="ingresa tu nombre "
            onChange={capturar}
            name="name"
          />
          <input
            type="number"
            placeholder="ingresa tu telefon "
            onChange={capturar}
            name="phone"
          />
          <input
            type="text"
            placeholder="ingresa tu email "
            onChange={capturar}
            name="email"
          />
          <button type="submit">Comprar</button>
        </form>
      )}
    </div>
  );
};
