import { useState } from "react";
import ItemCount from "./ItemCount";

const ItemCountConteiner = ({ stock, onAdd, initial = 1 }) => {
  const [counter, setCounter] = useState(initial);

  const addOne = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const subOne = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <ItemCount
      counter={counter}
      addOne={addOne}
      subOne={subOne}
      stock={stock}
      onAdd={onAdd}
    />
  );
};

export default ItemCountConteiner;
