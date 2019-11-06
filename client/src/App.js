import React, { useState } from "react";

import "./App.css";
import ITEMS from "./data/items";
import Items from "./components/Items";
import NewItem from "./components/NewItem";

import ItemsContext from "./context";
import UnpackedItemsContainer from "./containers/UnpackedItemsContainer";
import PackedItemsContainer from "./containers/PackedItemsContainer";
import Filter from "./components/Filter";

function App() {
  const [items, setItems] = useState(ITEMS);

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

  return (
    <ItemsContext.Provider
      value={{
        items,
        setItems
      }}
    >
      <div className="App">
        <NewItem />
        <UnpackedItemsContainer>
          {({ items }) => (
            <Items title="Unpacked" items={items}>
              <Filter />
            </Items>
          )}
        </UnpackedItemsContainer>
        <PackedItemsContainer>
          {({ items }) => (
            <Items title="Packed" items={items}>
              <Filter />
            </Items>
          )}
        </PackedItemsContainer>
        {items.filter(item => item.packed).length > 0 && (
          <button onClick={onUnpackAll}>Unpack All</button>
        )}
        {items.filter(item => !item.packed).length > 0 && (
          <button onClick={onPackAll}>Pack All</button>
        )}
        {items.length > 1 && <button onClick={onRemoveAll}>Remove All</button>}
      </div>
    </ItemsContext.Provider>
  );
}

export default App;
