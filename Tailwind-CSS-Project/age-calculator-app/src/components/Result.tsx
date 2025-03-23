import React from "react";
import { AgeResult } from "@/types";

type ResultProps = {
  result: AgeResult | null;
};

const Result = ({ result }: ResultProps) => {
  const format = (value: number | undefined) =>
    value !== undefined ? value : "--";

  return (
    <div className="mt-10 ml-11">
      <h1
        className="text-9xl font-bold"
        style={{ color: "var(--color-purple)" }}
      >
        {format(result?.years)}
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
        {format(result?.months)}
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
        {format(result?.days)}
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
