import React, { useState } from "react";
import Item from "./Item";

const Items = ({ title, items, children }) => {
  const [searchText, setSearchText] = useState("");

  const bySearchText = item => {
    const regex = new RegExp(`${searchText}`, "i");
    return regex.test(item.value);
  };

  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, { onChange: setSearchText })
  );

  return (
    <section>
      <h2>
        {title} ({items.length})
      </h2>
      {childrenWithProps}
      {items.filter(bySearchText).map(item => (
        <Item key={item.id} item={item} />
      ))}
    </section>
  );
};

export default Items;
