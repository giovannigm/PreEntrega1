import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetProduct } from "../../ProductsMock";
import { ItemDetail } from "../common/Item id/ItemDetail";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const idNumer = Number(id);

  const [item, setItem] = useState(null);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    GetProduct(idNumer).then((resp) => {
      setLoading(false);
      setItem(resp);
    });
  }, []);

  return (
    <>{Loading ? <h1>Cargando producto.....</h1> : <ItemDetail {...item} />}</>
  );
};
