import { useContext, useState } from "react";
import { Checkout } from "./checkout";
import { CartContext } from "../../../context/CartContext";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

export const CheckoutContainer = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);

  const envioFormulario = (event) => {
    event.preventDefault();

    let order = {
      buyer: userInfo,
      items: cart,
      total: getTotalPrice(),
    };

    let ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

    cart.forEach((product) => {
      let referenciaDoc = doc(db, "products", product.id);
      updateDoc(referenciaDoc, { stock: product.stock - product.quantity });
    });
    clearCart();
  };

  const capturar = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  return (
    <Checkout
      orderId={orderId}
      envioFormulario={envioFormulario}
      capturar={capturar}
    />
  );
};
