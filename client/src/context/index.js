import { createContext } from "react";

const ItemsContext = createContext({
  items: [],
  setItems: f => f
});

export default ItemsContext;
