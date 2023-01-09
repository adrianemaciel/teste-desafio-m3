import { useState } from "react";

const Checkbox = ({ name, value, setAmerelo }) => {
  const Colors = () => {};
  return (
    <div className="color-filter">
      <input
        className="checkbox"
        type="checkbox"
        checked={value}
        onChange={(e) => setAmerelo(e.target.checked)}
      ></input>
      <label className="label" htmlFor={value}>
        {name}
      </label>
    </div>
  );
};

export default Checkbox;
