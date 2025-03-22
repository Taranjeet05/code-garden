import React from "react";

const Result = () => {
  return (
    <div className="mt-10 ml-11">
      <h1
        className="text-9xl font-bold"
        style={{ color: "var(--color-purple)" }}
      >
        --
        <span
          className="tracking-tight"
          style={{ color: "var(--color-off-black)" }}
        >
          years
        </span>
      </h1>
      <h1
        className="text-9xl font-bold"
        style={{ color: "var(--color-purple)" }}
      >
        --
        <span
          className="tracking-tight"
          style={{ color: "var(--color-off-black)" }}
        >
          months
        </span>
      </h1>
      <h1
        className="text-9xl font-bold"
        style={{ color: "var(--color-purple)" }}
      >
        --
        <span
          className="tracking-tight"
          style={{ color: "var(--color-off-black)" }}
        >
          days
        </span>
      </h1>
    </div>
  );
};

export default Result;
