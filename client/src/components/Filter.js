import React from "react";

const Filter = ({ name, id, value, onChange }) => {
  return (
    <label htmlFor={id}>
      {name}
      <input
        type="text"
        name={id}
        id={id}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </label>
  );
};

export default Filter;
