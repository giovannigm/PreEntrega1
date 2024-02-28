import React from "react";

const ItemCount = ({ counter, addOne, subOne }) => {
  return (
      <div className="button-container">
        <button onClick={subOne} disabled={counter === 1 ? true : false}>
          -
        </button>
        <h4>{counter}</h4>
        <button onClick={addOne}>+</button>
        <button>Agregar al carrito</button>
      </div>
  );
};

export default ItemCount;
