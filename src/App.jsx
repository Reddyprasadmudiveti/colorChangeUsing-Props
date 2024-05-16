import React, { useState } from "react";
import Callback from "./components/Callback";

const App = () => {
  const [uiColor, setUiColor] = useState("white");

  const getColor = (color) => {
    setUiColor(color);
  };
  return (
    <div className=" w-screen h-screen gap-4 flex flex-col items-center justify-center bg-slate-400">
      <h1 className=" font-extrabold text-2xl " style={{ color: `${uiColor}` }}>
        Color Changer Using Props
      </h1>
      <div
        className="h-[40%] w-[50%] border boxshadow-3xl "
        style={{ backgroundColor: `${uiColor}` }}
      ></div>
      <Callback getcolor={getColor} />
    </div>
  );
};

export default App;
