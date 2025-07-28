import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  // This effect will run when the component mounts
  useEffect(() => {
    console.log("Page loaded 🟩");
  }, []);

  // This effect will run when the component when the name changes to a new value and not when it is the same value
  // This is because of the dependency array [name]
  useEffect(() => {
    console.log("Name Changed 🟦", name);
  }, [name]);

  // This effect will run when the count changes, This is because of the dependency array [count]
  useEffect(() => {
    console.log("Count Changed 🔴", count);
  }, [count]);

  return (
    <div className="p-10 mt-5">
      <h1 className="text-2xl font-bold mb-4">🎯 useEffect Practice</h1>

      <input
        type="text"
        placeholder="Type you name over Here"
        className="p-2 border border-gray-400 rounded mb-4 w-1/3"
        onChange={(e) => setName(e.target.value)}
      />
      <div className="mb-4">
        <p className="my-14 font-bold text-5xl ml-16">{count}</p>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded font-bold"
          onClick={incrementCount}
        >
          Increment Count
        </button>
      </div>
      <div>
        <button className="bg-blue-500 text-white font-bold px-4 py-2 rounded">
          Start Timer
        </button>
      </div>
      <div className="mt-5">
        <h2>Api Data</h2>
      </div>
    </div>
  );
};

export default UseEffect;
