import React, { useEffect } from "react";

const UseEffect = () => {
  useEffect(() => {
    // This will run once when the component mounts
    console.log("Page loaded 🟩");
  }, []);

  return (
    <div className="p-10 mt-5">
      <h1 className="text-2xl font-bold mb-4">🎯 useEffect Practice</h1>

      <input
        type="text"
        placeholder="Type you name over Here"
        className="p-2 border border-gray-400 rounded mb-4 w-1/3"
      />
      <div className="mb-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded font-bold">
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
