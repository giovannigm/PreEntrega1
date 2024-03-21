import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore";
import { CardSkeleton } from "../../common/CardSkeleton/CardSkeleton";

export const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState(null);
  const [load, setLoading] = useState(true);
  const { addToCart, getTotalQuantity } = useContext(CartContext);
  let initial = getTotalQuantity(id);

  useEffect(() => {
    let productCollection = collection(db, "products");
    let refDocumento = doc(productCollection, id);
    getDoc(refDocumento)
      .then((resDoc) => {
        if (resDoc.exists()) {
          setItem({ ...resDoc.data(), id: resDoc.id });
        } else {
        }
      })
      .finally(() => setLoading(false));
  }, [id]);

  const onAdd = (cantidad) => {
    let infoProduct = {
      ...item,
      quantity: cantidad,
    };
    addToCart(infoProduct);
  };

  if (load) {
    return <CardSkeleton />;
  }
  return (
    <>
      <ItemDetail item={item} onAdd={onAdd} initial={initial} />
    </>
  );
};
