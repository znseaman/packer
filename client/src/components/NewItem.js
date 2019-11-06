import React, { useState, useContext } from "react";
import uniqueId from "lodash/uniqueId";

import ItemsContext from "../context";

const NewItem = () => {
  const [value, setValue] = useState("");
  const { items, setItems } = useContext(ItemsContext);

  const addNewItem = value => {
    const item = {
      value,
      packed: false,
      id: uniqueId()
    };

    setItems([item, ...items]);
  };

  const onSubmit = e => {
    e.preventDefault();

    addNewItem(value);

    setValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <input type="submit" value="submit" />
    </form>
  );
};

export default NewItem;
