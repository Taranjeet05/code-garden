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
    <>
      <div>
        <div>
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div
                key={dataItem.id} 
                onClick={() => handleSingleSelection(dataItem.id)} 
              >
                <h2>{dataItem.question}</h2>
                <span>{selected === dataItem.id ? "-" : "+"}</span>
                {/* display the answer if selected */}
                {selected === dataItem.id && <p>{dataItem.answer}</p>}
              </div>
            ))
          ) : (
            <div>No Data Found ...</div>
          )}
        </div>
      </div>
    </>
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
