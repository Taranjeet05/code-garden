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
    <div className="accordion-wrapper">
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              key={dataItem.id}
              className="accordion-item"
              onClick={() => handleSingleSelection(dataItem.id)}
            >
              <div className="accordion-title">
                <h2>{dataItem.question}</h2>
                <span>{selected === dataItem.id ? "-" : "+"}</span>
              </div>
              {selected === dataItem.id && (
                <div className="accordion-content">
                  <p>{dataItem.answer}</p>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="no-data">No Data Found ...</div>
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
