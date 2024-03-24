// import { AgregarDocs } from "../../../AgregarDocs";
import ProductCard from "../../common/productCard/productCard";

const ItemList = ({ products }) => {
  return (
    <div className="card-conteiner">
      {/* <AgregarDocs/> AGREGAR CUANDO NO HAY PRODUCTOS */}
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ItemList;