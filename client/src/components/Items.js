import React from "react";
import Item from "./Item";

const Items = ({ title, items, onCheck, onRemove }) => {
  return (
    <section>
      <h2>
        {title} ({items.length})
      </h2>
      {items.map(item => (
        <Item key={item.id} item={item} onCheck={onCheck} onRemove={onRemove} />
      ))}
    </section>
  );
};

export default Items;
