import { useCounterStore } from "../store/counterStore";

const Counter = () => {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);

  return (
    <div className="flex flex-col gap-10 items-center justify-center h-1/2 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-3xl shadow-2xl p-12">
      <div className="input text-7xl flex items-center justify-center mb-4">
        <input
          type="number"
          name="counter"
          value={count}
          id="counter"
          readOnly
          className="w-40 h-24 text-center border-4 border-blue-400 rounded-2xl shadow-xl focus:outline-none bg-white text-blue-700 font-extrabold tracking-widest transition-all duration-300 ring-2 ring-blue-200"
        />
      </div>
      <div className="buttons flex gap-8 text-4xl mt-8">
        <button
          onClick={increment}
          className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-extrabold py-3 px-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200 border-2 border-green-300"
        >
          <span role="img" aria-label="add">
            ➕
          </span>{" "}
          ADD
        </button>
        <button
          onClick={reset}
          className="bg-gradient-to-r from-gray-200 to-gray-400 hover:from-gray-300 hover:to-gray-500 text-gray-800 font-extrabold py-3 px-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200 border-2 border-gray-300"
        >
          <span role="img" aria-label="reset">
            🔄
          </span>{" "}
          RESET
        </button>
        <button
          onClick={decrement}
          className="bg-gradient-to-r from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 text-white font-extrabold py-3 px-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200 border-2 border-red-300"
        >
          <span role="img" aria-label="minus">
            ➖
          </span>{" "}
          MINUS
        </button>
      </div>
    </div>
  );
};

export default Counter;
