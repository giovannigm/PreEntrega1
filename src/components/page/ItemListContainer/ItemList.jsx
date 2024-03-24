// import { AgregarDocs } from "../../../AgregarDocs";
import ProductCard from "../../../components/common/ProductCard/ProductCard.jsx";

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
