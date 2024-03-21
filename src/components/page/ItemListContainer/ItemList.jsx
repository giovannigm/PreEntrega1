import ProductCard from "../../common/productCard/productCard";

const ItemList = ({ products }) => {
  return (
    <div className="card-conteiner">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ItemList;
