import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { CardSkeleton } from "../../common/CardSkeleton/CardSkeleton";

const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    let productColection = collection(db, "products");
    let consulta = productColection;

    if (category) {
      let productFiltered = query(
        productColection,
        where("category", "==", category)
      );
      consulta = productFiltered;
    }

    getDocs(consulta).then((res) => {
      let arrayProductos = res.docs.map((elemento) => {
        return { ...elemento.data(), id: elemento.id };
      });
      setProducts(arrayProductos);
      setLoad(false);
    });
  }, [category]);

  if (load) {
    return (
      <div className="card-Skeletor">
        {category ? (
          <>
            <CardSkeleton />
            <CardSkeleton />
          </>
        ) : (
          <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </>
        )}
      </div>
    );
  }
  return (
    <>
      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;
