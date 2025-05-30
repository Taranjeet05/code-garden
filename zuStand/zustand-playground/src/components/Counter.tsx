const Counter = () => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center h-1/2">
      <div className="input text-6xl flex items-center justify-center">
        <input
          type="number"
          name="counter"
          id="counter"
          className="w-32 h-20 text-center border-4 border-blue-400 rounded-lg shadow-lg focus:outline-none focus:border-blue-600 transition duration-200 bg-white text-blue-700 font-bold"
        />
      </div>
      <div className="buttons flex gap-4 text-3xl mt-6">
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded shadow transition duration-200">
          ADD
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-6 rounded shadow transition duration-200">
          RESET
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded shadow transition duration-200">
          MINUS
        </button>
      </div>
    </div>
  );
};

export default Counter;
