import React, { useContext } from "react";
import ItemsContext from "../context";

const UnpackedItemsContainer = ({ children }) => {
  const { items } = useContext(ItemsContext);
  return children && children({ items: items.filter(item => !item.packed) });
};

export default UnpackedItemsContainer;
