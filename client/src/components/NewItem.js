import React, { useState } from "react";

const NewItem = ({ addNewItem }) => {
  const [value, setValue] = useState("");

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
