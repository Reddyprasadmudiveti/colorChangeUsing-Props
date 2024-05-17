import React, { useEffect, useState } from "react";

const Callback = ({ getcolor }) => {
  const [activeColor, setActivecolor] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setActivecolor(value);
    getcolor(value);
  };
  return (
    <div className="flex gap-2">
      <label for="color" className="font-bold">
        Enter color Value
      </label>
      <input
        className="text-sm pl-2"
        name="color"
        placeholder="Enter any color value"
        onChange={handleChange}
        style={{ backgroundColor: `${activeColor}` }}
      ></input>
    </div>
  );
};

export default Callback;
