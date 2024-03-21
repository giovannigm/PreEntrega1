import "./ItemCount.css";

const ItemCount = ({ counter, addOne, subOne, stock, onAdd, }) => {
  return (
    <div className="button-container">
      <button onClick={subOne} disabled={counter === 1 ? true : false}>
        -
      </button>
      <h4>{counter}</h4>
      <button onClick={addOne} disabled={counter === stock ? true : false}>
        +
      </button>
      <button onClick={() => onAdd(counter)}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
