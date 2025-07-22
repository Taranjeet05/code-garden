import React, { useEffect, useState } from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);
  useEffect(() => {
    // XSS attempt
    if (inputValue.includes("<script>alert('XSS');</script>")) {
      alert("XSS attempt detected!");
      setInputValue("");
      return;
    }

    // Invalid single character
    if (
      inputValue.includes("<") ||
      inputValue.includes(">") ||
      inputValue.includes("{") ||
      inputValue.includes("}")
    ) {
      alert("Invalid input detected!");
      setInputValue("");
      return;
    }

    // Too long input
    if (inputValue.length > 100) {
      alert("Input is too long!");
      setInputValue(inputValue.slice(0, 100));
      return;
    }

    // Disallow links
    if (inputValue.includes("http://") || inputValue.includes("https://")) {
      alert("Links are not allowed!");
      setInputValue("");
      return;
    }
  }, [inputValue]); // 👈 run this logic every time inputValue changes
  return (
    <>
      <div className="p-10 mt-5">
        <label htmlFor="text">
          <p className="text-green-700 hover:text-green-900 cursor-pointer mb-5">
            Type something in the input below:
          </p>
        </label>
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Type something here ..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border-2 border-gray-300 p-2 rounded active:border-green-500 ring-1 outline-none focus:ring-green-500 focus:border-green-500 w-1/3"
        />
        <p className="mt-15">
          You Typed: <strong>{inputValue}</strong>
        </p>
      </div>
    </>
  );
};

export default Home;
