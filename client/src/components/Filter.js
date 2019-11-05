import React from "react";

const Filter = ({ searchText, onChange }) => {
  const handleChange = e => {
    onChange(e.target.value);
  };

  return <input type="text" value={searchText} onChange={handleChange} />;
};

export default Filter;
