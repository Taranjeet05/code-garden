import { useState } from "react";
import PropTypes from "prop-types";
import data from "./data";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [multiple, setMultiple] = useState([]);
  const [enableMultiSlection, setEnableMultiSlection] = useState(false);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    setMultiple((prev) => {
      const isSelected = prev.includes(getCurrentId);
      if (isSelected) {
        return prev.filter((id) => id !== getCurrentId);
      } else {
        return [...prev, getCurrentId];
      }
    });
  }

  function closeAllSelections () {
    setMultiple([]);
    setSelected(null)
  }
  
  return (
    <div className="flex h-screen w-screen justify-center items-center flex-col gap-5 bg-stone-50">
      <h1 className="text-6xl font-bold mb-28">Accordify</h1>
      {/* Wrapper styles */}
      <button
        className="px-5 py-2 bg-[#614101] text-white font-bold text-xl cursor-pointer hover:bg-[#513E00]"
        onClick={() => setEnableMultiSlection(!enableMultiSlection)}
      >
        {enableMultiSlection
          ? "Disable Multi Selection"
          : "Enable Multi Selection"}
      </button>

      <button
        onClick={closeAllSelections}
        className="px-5 py-2 bg-[#614101] text-white font-bold text-xl cursor-pointer hover:bg-[#513E00]"
      >
        close all selection
      </button>
      <div className="w-[500px]">
        {/* Accordion styles */}
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              key={dataItem.id}
              className="bg-[#614101] mb-2 p-4"
              onClick={
                enableMultiSlection
                  ? () => handleMultiSelection(dataItem.id)
                  : () => handleSingleSelection(dataItem.id)
              }
            >
              <div className="text-white flex justify-between items-center cursor-pointer">
                {/* Title styles */}
                <h2>{dataItem.question}</h2>
                <span>{selected === dataItem.id ? "-" : "+"}</span>
              </div>
              {enableMultiSlection
                ? multiple.includes(dataItem.id) && (
                    <div className="text-white">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="text-white">
                      {/* Content styles */}
                      <p>{dataItem.answer}</p>
                    </div>
                  )}
            </div>
          ))
        ) : (
          <div className="text-center text-white">No Data Found ...</div>
        )}
      </div>
    </div>
  );
};

// Add prop validation
Accordion.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ),
};

export default Accordion;
