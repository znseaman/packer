import { useState, useEffect } from "react";
import ITEMS from "../data/items";

function useItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(ITEMS);
  }, []);

  return { items, setItems };
}

export default useItems;
