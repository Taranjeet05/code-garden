import React from "react";
import { BirthDate } from "@/types";

type InputFieldsProps = {
  setBirthDate: React.Dispatch<React.SetStateAction<BirthDate>>;
  errors: {
    day: string;
    month: string;
    year: string;
    general: string;
  };
};

const InputFields = ({ setBirthDate, errors }: InputFieldsProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBirthDate((prev) => ({ ...prev, [name]: Number(value) }));
  };

  const getInputStyle = (error: string) => ({
    borderColor: error ? "var(--color-light-red)" : "var(--color-smokey-grey)",
    fontSize: "32px",
    fontWeight: 700,
  });

  return (
    <div className="flex flex-wrap gap-4 md:gap-6 px-2 sm:px-4 md:ml-6 lg:ml-10 animated-fade">
      {/* Day Input */}
      <div className="flex flex-col w-full sm:w-auto">
        <label
          style={{
            color: errors.day
              ? "var(--color-light-red)"
              : "var(--color-smokey-grey)",
          }}
          className="mb-2 text-xs sm:text-sm uppercase font-bold tracking-widest"
        >
          DAY
        </label>
        <input
          type="number"
          name="day"
          placeholder="DD"
          onChange={handleChange}
          className="border p-2 sm:p-3 w-full sm:w-20 md:w-36 lg:w-40 rounded-lg text-lg sm:text-xl md:text-2xl lg:text-3xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-1"
          style={getInputStyle(errors.day)}
        />
        {errors.day && (
          <p
            className="text-xs italic mt-1"
            style={{ color: "var(--color-light-red)" }}
          >
            {errors.day}
          </p>
        )}
      </div>

      {/* Month Input */}
      <div className="flex flex-col w-full sm:w-auto">
        <label
          style={{
            color: errors.month
              ? "var(--color-light-red)"
              : "var(--color-smokey-grey)",
          }}
          className="mb-2 text-xs sm:text-sm uppercase font-bold tracking-widest"
        >
          MONTH
        </label>
        <input
          type="number"
          name="month"
          placeholder="MM"
          onChange={handleChange}
          className="border p-2 sm:p-3 w-full sm:w-20 md:w-36 lg:w-40 rounded-lg text-lg sm:text-xl md:text-2xl lg:text-3xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-1"
          style={getInputStyle(errors.month)}
        />
        {errors.month && (
          <p
            className="text-xs italic mt-1"
            style={{ color: "var(--color-light-red)" }}
          >
            {errors.month}
          </p>
        )}
      </div>

      {/* Year Input */}
      <div className="flex flex-col w-full sm:w-auto">
        <label
          style={{
            color: errors.year
              ? "var(--color-light-red)"
              : "var(--color-smokey-grey)",
          }}
          className="mb-2 text-xs sm:text-sm uppercase font-bold tracking-widest"
        >
          YEAR
        </label>
        <input
          type="number"
          name="year"
          placeholder="YYYY"
          onChange={handleChange}
          className="border p-2 sm:p-3 w-full sm:w-20 md:w-36 lg:w-40 rounded-lg text-lg sm:text-xl md:text-2xl lg:text-3xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-1"
          style={getInputStyle(errors.year)}
        />
        {errors.year && (
          <p
            className="text-xs italic mt-1"
            style={{ color: "var(--color-light-red)" }}
          >
            {errors.year}
          </p>
        )}
      </div>
    </div>
  );
};

export default InputFields;
