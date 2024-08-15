import React, { useState } from "react";

export const Counter = () => {
  //State
  const [count, setCount] = useState(0);
  //Function
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div className="p-3 m-3 border rounded-lg border-violet-600 w-60 min-h-48">
      <h1 className="my-2 text-lg font-bold text-center ">Counter</h1>
      <button
        className="p-2 my-3 font-bold text-white bg-red-500 rounded-xl ml-14 hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300"
        onClick={handleClick}
      >
        Increment
      </button>
      <p className="font-bold">
        Count :{" "}
        <span
          className={`${count % 2 ? "text-violet-600" : "text-red-600"} pl-3`}
        >
          {count}
        </span>
      </p>
    </div>
  );
};
