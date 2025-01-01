import { useState } from "react";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("HEX");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g}, ${b})`);
  }

  function handleCopyColor() {
    navigator.clipboard.writeText(color);
    alert("Color copied to clipboard!");
  }
  

  return (
    <div
      className="w-screen h-screen flex flex-col items-center justify-center"
      style={{
        background: color,
      }}
    >
      <div>
        <h1 className="text-white font-bold text-6xl mb-28">Color Blast</h1>
      </div>
      <div className="flex gap-4">
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          onClick={() => setTypeOfColor("HEX")}
        >
          Create HEX Color
        </button>
        <button
          className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition duration-300"
          onClick={() => setTypeOfColor("RGB")}
        >
          Create RGB Color
        </button>
        <button
          className="bg-purple-500 text-white font-bold py-2 px-4 rounded hover:bg-purple-600 transition duration-300"
          onClick={
            typeOfColor === "HEX"
              ? handleCreateRandomHexColor
              : handleCreateRandomRgbColor
          }
        >
          Generate Random Color
        </button>
      </div>
      <div className="flex flex-col items-center justify-center text-white mt-12 gap-4">
        <h3 className="text-2xl font-semibold">
          {/* Placeholder for color type */}
          {typeOfColor === "HEX" ? "HEX Color" : "RGB Color"}
        </h3>
        <h1
          className="text-6xl font-bold cursor-pointer"
          onClick={handleCopyColor}
        >
          {color}
        </h1>
      </div>
    </div>
  );
};

export default RandomColor;