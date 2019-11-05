import React from "react";

const Item = ({ item, onCheck, onRemove }) => {
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
