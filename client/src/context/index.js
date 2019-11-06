import { createContext } from "react";

const ItemsContext = createContext({
  items: [],
  setItems: f => f,
  onCheck: f => f,
  onRemove: f => f,
  addNewItem: f => f
});

export default ItemsContext;
