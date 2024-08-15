import React from "react";
import { useState } from "react";

export const ToggleButton = () => {
  //States
  const [status, setStatus] = useState(true);
  //Function
  const handleClick = () => {
    if (!status) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  };
  return (
    <div className="p-3 m-3 border border-red-600 rounded-lg w-60 min-h-48">
      <h1 className="my-2 text-lg font-bold text-center ">Toggle Button </h1>
      <button
        className="p-2 my-3 font-bold text-white rounded-xl ml-11 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
        onClick={handleClick}
      >
        Toggle Button
      </button>
      <p className="font-bold">
        Button Status :{" "}
        <span className={`${status ? "text-violet-600" : "text-red-600"} pl-3`}>
          {status ? "On" : "Off"}
        </span>
      </p>
    </div>
  );
};
