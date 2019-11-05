import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter";

const Items = ({ title, items, onCheck, onRemove }) => {
  const [searchText, setSearchText] = useState("");

  const bySearchText = item => {
    const regex = new RegExp(`${searchText}`, "i");
    return regex.test(item.value);
  };

  return (
    <section>
      <h2>
        {title} ({items.length})
      </h2>
      {items.length > 0 && (
        <Filter
          name="Find: "
          id={title}
          searchText={searchText}
          onChange={setSearchText}
        />
      )}
      {items.filter(bySearchText).map(item => (
        <Item key={item.id} item={item} onCheck={onCheck} onRemove={onRemove} />
      ))}
    </section>
  );
};

export default Items;
