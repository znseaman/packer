import React, { useContext } from "react";
import ItemsContext from "../context";

const PackedItemsContainer = ({ children }) => {
  const { items, onCheck, onRemove } = useContext(ItemsContext);
  return (
    children &&
    children({
      items: items.filter(item => item.packed),
      onCheck,
      onRemove
    })
  );
};

export default PackedItemsContainer;
