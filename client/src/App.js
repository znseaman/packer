import React from "react";

import "./App.css";
import Items from "./components/Items";
import NewItem from "./components/NewItem";

import Filter from "./components/Filter";
import useItems from "./hooks/useItems";

function App() {
  const { items, setItems } = useItems();

  const onUnpackAll = () => {
    let unpackedItems = items.map(i => {
      i.packed = false;
      return i;
    });

    setItems(unpackedItems);
  };

  const onPackAll = () => {
    let unpackedItems = items.map(i => {
      i.packed = true;
      return i;
    });

    setItems(unpackedItems);
  };

  const onRemoveAll = () => {
    setItems([]);
  };

  const unpackedItems = items.filter(item => !item.packed);
  const packedItems = items.filter(item => item.packed);

  return (
    <div className="App">
      <NewItem />
      <Items title="Unpacked" items={unpackedItems}>
        <Filter />
      </Items>
      <Items title="Packed" items={packedItems}>
        <Filter />
      </Items>
      {packedItems.length > 0 && (
        <button onClick={onUnpackAll}>Unpack All</button>
      )}
      {unpackedItems.length > 0 && (
        <button onClick={onPackAll}>Pack All</button>
      )}
      {items.length > 1 && <button onClick={onRemoveAll}>Remove All</button>}
    </div>
  );
}

export default App;
