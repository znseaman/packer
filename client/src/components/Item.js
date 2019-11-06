import React, { useContext } from "react";
import ItemsContext from "../context";

const Item = ({ item }) => {
  const { items, setItems } = useContext(ItemsContext);

  const onCheck = item => {
    let newItems = items.map(i => {
      if (i.id === item.id) {
        i.packed = !item.packed;
      }
      return i;
    });

    setItems(newItems);
  };

  const onRemove = id => {
    let updatedItems = items.filter(i => i.id !== id);

    setItems(updatedItems);
  };

  const { id, value, packed } = item;
  return (
    <article>
      <label htmlFor={id}>
        <input
          type="checkbox"
          id={id}
          checked={packed}
          onChange={() => onCheck(item)}
        />
        {value}
      </label>
      <button onClick={() => onRemove(id)}>Remove</button>
    </article>
  );
};

export default Item;
