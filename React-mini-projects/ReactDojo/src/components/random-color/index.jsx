const RandomColor = () => {
  return (
    <div
      className="w-screen h-screen flex flex-col items-center justify-center"
      style={{
        background: "#000", // Replace with dynamic color logic later
      }}
    >
      <div className="flex gap-4">
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
          Create HEX Color
        </button>
        <button className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition duration-300">
          Create RGB Color
        </button>
        <button className="bg-purple-500 text-white font-bold py-2 px-4 rounded hover:bg-purple-600 transition duration-300">
          Generate Random Color
        </button>
      </div>
      <div className="flex flex-col items-center justify-center text-white mt-12 gap-4">
        <h3 className="text-2xl font-semibold">
          {/* Placeholder for color type */}
          HEX Color
        </h3>
        <h1 className="text-6xl font-bold">
          {/* Placeholder for color value */}
          #FFFFFF
        </h1>
      </div>
    </div>
  );
};

export default RandomColor;
