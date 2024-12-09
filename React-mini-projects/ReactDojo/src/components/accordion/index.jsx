import { useState } from "react";
import PropTypes from "prop-types";
import data from "./data";

const Accordion = () => {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(getCurrentId) {
    console.log(getCurrentId);
    setSelected(getCurrentId);
  }

  return (
    <div className="flex h-screen w-screen justify-center items-center flex-col gap-5">
      {/* Wrapper styles */}
      <div className="w-[500px]">
        {/* Accordion styles */}
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              key={dataItem.id}
              className="bg-[#614101] mb-2 p-4"
              onClick={() => handleSingleSelection(dataItem.id)}
            >
              <div className="text-white flex justify-between items-center cursor-pointer">
                {/* Title styles */}
                <h2>{dataItem.question}</h2>
                <span>{selected === dataItem.id ? "-" : "+"}</span>
              </div>
              {selected === dataItem.id && (
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
