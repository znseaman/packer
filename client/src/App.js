import React, { useState } from "react";
import uniqueId from "lodash/uniqueId";

import "./App.css";
import ITEMS from "./data/items";
import Items from "./components/Items";
import NewItem from "./components/NewItem";

function App() {
  const [items, setItems] = useState(ITEMS);

  const addNewItem = value => {
    const item = {
      value,
      packed: false,
      id: uniqueId()
    };

    setItems([item, ...items]);
  };

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

  return (
    <div className="App">
      <NewItem addNewItem={addNewItem}></NewItem>
      <Items
        title="Unpacked"
        items={items.filter(item => !item.packed)}
        onCheck={onCheck}
        onRemove={onRemove}
      ></Items>
      <Items
        title="Packed"
        items={items.filter(item => item.packed)}
        onCheck={onCheck}
        onRemove={onRemove}
      ></Items>
    </div>
  );
}

export default App;
