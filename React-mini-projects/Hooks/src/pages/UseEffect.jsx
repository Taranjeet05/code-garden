import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [showTime, setShowTime] = useState(false);
  const [timer, setTimer] = useState(0);

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  const startTimer = () => {
    if (!showTime) {
      // Start timer
      const intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
      // Store intervalId in state if you want to clear it later
      window.timerInterval = intervalId;
    } else {
      // Stop timer
      clearInterval(window.timerInterval);
      setTimer(0);
    }
    setShowTime((prevShowTime) => !prevShowTime);
  };
  
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

  useEffect(() => {
    if (showTime) {
      console.log("Timer started 🟨", showTime);
    }
    return () => {
      console.log("Timer Stopped 🟥", showTime);
    };
  }, [showTime]);

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
        <p className="my-14 font-bold text-5xl ml-16">{timer}</p>
        <button
          className="bg-blue-500 text-white font-bold px-4 py-2 rounded"
          onClick={startTimer}
        >
          {showTime ? "Stop Timer" : "Start Timer"}
        </button>
      </div>
      <div className="mt-5">
        <h2>Api Data</h2>
      </div>
    </div>
  );
};

export default UseEffect;
