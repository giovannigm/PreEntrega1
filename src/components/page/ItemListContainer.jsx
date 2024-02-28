import { useEffect, useState } from "react";
import { GetProducts } from "../../ProductsMock";
import ItemList from "../common/ItemList /ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setproducts] = useState([]);

  useEffect(() => {
    GetProducts()
      .then((res) => {
        if (category) {
          const productFilter = res.filter(
            (product) => product.category === category
          );
          setproducts(productFilter);
        } else {
          setproducts(res);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [category]);

  return (
    <>
      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;
