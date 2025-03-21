import React from "react";

const InputFields = () => {
  return (
    <form className="flex gap-4 ml-10">
      <div className="flex flex-col items-start">
        <label
          className="flex items-start mb-2"
          htmlFor="day"
          style={{ color: "var(--color-smokey-grey)" }}
        >
          DAY:
        </label>
        <input
          type="number"
          id="day"
          name="day"
          placeholder="DD"
          min={1}
          max={31}
          className="border p-3 w-40 rounded-lg"
          style={{
            borderColor: "var(--color-smokey-grey)",
            fontSize: "32px",
            fontWeight: 700,
          }}
        />
      </div>

      <div className="flex flex-col items-start">
        <label
          htmlFor="month"
          className="flex items-start mb-2"
          style={{ color: "var(--color-smokey-grey)" }}
        >
          MONTH
        </label>
        <input
          type="number"
          name="month"
          id="month"
          placeholder="MM"
          className="border p-3 w-40 rounded-lg"
          min={1}
          max={12}
          style={{
            borderColor: "var(--color-smokey-grey)",
            fontSize: "32px",
            fontWeight: "700",
          }}
        />
      </div>

      <div className="flex flex-col items-start">
        <label
          htmlFor="year"
          className="flex items-start mb-2"
          style={{ color: "var(--color-smokey-grey)" }}
        >
          YEAR
        </label>
        <input
          type="number"
          name="year"
          id="year"
          placeholder="YYYY"
          className="border p-3 w-40 rounded-lg"
          style={{
            borderColor: "var(--color-smokey-grey)",
            fontSize: "32px",
            fontWeight: "700",
          }}
        />
      </div>
    </form>
  );
};

export default InputFields;
