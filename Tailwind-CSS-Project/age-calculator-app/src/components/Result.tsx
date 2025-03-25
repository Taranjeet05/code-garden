import React from "react";
import { AgeResult } from "@/types";

type ResultProps = {
  result: AgeResult | null;
};

const Result = ({ result }: ResultProps) => {
  const format = (value: number | undefined) =>
    value !== undefined ? value : "--";

  return (
    <div className="mt-8 md:mt-10 px-2 sm:px-4 md:ml-6 lg:ml-10 animated-slide">
      <h1
        className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold italic"
        style={{ color: "var(--color-purple)" }}
      >
        {format(result?.years)}
        <span
          className="ml-2 tracking-tight italic"
          style={{ color: "var(--color-off-black)" }}
        >
          years
        </span>
      </h1>
      <h1
        className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold italic"
        style={{ color: "var(--color-purple)" }}
      >
        {format(result?.months)}
        <span
          className="ml-2 tracking-tight italic"
          style={{ color: "var(--color-off-black)" }}
        >
          months
        </span>
      </h1>
      <h1
        className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold italic"
        style={{ color: "var(--color-purple)" }}
      >
        {format(result?.days)}
        <span
          className="ml-2 tracking-tight italic"
          style={{ color: "var(--color-off-black)" }}
        >
          days
        </span>
      </h1>
    </div>
  );
};

export default Result;
