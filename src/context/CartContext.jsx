import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const addToCart = (product) => {
    let existeID = isInCart(product.id);

    if (existeID) {
      let newArray = cart.map((elemento) => {
        if (elemento.id === product.id) {
          return {
            ...elemento,
            quantity: product.quantity,
          };
        } else {
          return elemento;
        }
      });

      setCart(newArray);
      localStorage.setItem("cart", JSON.stringify(newArray));
    } else {
      setCart([...cart, product]);
      localStorage.setItem("cart", JSON.stringify([...cart, product]));
    }
  };

  const clearCart = () => {
    if (cart.length > 0) {
      setCart([]);
      localStorage.removeItem("cart");
    }
  };

  const isInCart = (id) => {
    let existe = cart.some((elemento) => elemento.id === id);
    return existe;
  };

  const removeById = (id) => {
    let newArray = cart.filter((elemento) => elemento.id !== id);
    setCart(newArray);
    localStorage.setItem("cart", JSON.stringify(newArray));
  };

  const getTotalItems = () => {
    let totalItems = cart.reduce((acumulador, elemento) => {
      return acumulador + elemento.quantity;
    }, 0);
    return totalItems;
  };

  const getTotalPrice = () => {
    let total = cart.reduce((acumulador, elemento) => {
      return acumulador + elemento.quantity * elemento.price;
    }, 0);
    return total;
  };

  const getTotalQuantity = (id) => {
    let product = cart.find((elemento) => elemento.id === id);
    if (product) {
      return product.quantity;
    } else {
      return product;
    }
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    removeById,
    getTotalItems,
    getTotalPrice,
    getTotalQuantity,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
