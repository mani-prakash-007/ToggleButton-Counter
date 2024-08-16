import React, { useRef, useState } from "react";

export const InputForm = () => {
  const inputRef = useRef();
  const [value, setValue] = useState("");
  //Function
  const handleClick = () => {
    const value = inputRef.current.value;
    value === "" ? setValue("No Value") : setValue(value);
  };
  return (
    <div className="p-3 m-3 border border-green-600 rounded-lg w-60 min-h-48">
      <h1 className="my-2 text-lg font-bold text-center ">
        Form Input and Display
      </h1>
      <input
        type="text"
        className="py-1 pl-3 my-3 ml-3 border border-green-400 rounded-lg"
        placeholder="Enter name"
        ref={inputRef}
      />
      <button
        className="p-1 px-4 font-bold text-white bg-green-500 border ml-14 rounded-xl hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300"
        onClick={handleClick}
      >
        Submit
      </button>
      <p className="text-lg font-bold">
        Entered Text : <span className="text-green-600">{value}</span>
      </p>
    </div>
  );
};
