import { useCounterStore } from "../store/counterStore";

const BearCount = () => {
  const count = useCounterStore((state) => state.count);
  return (
    <button
      className="flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-100 border border-yellow-400 text-yellow-700 text-lg font-bold shadow-sm"
      type="button"
      aria-label={`Bear count: ${count}`}
    >
      🐻 {count}
    </button>
  );
};

export default BearCount;
